import { log } from "@graphprotocol/graph-ts";
import {
  KittyContract,
  Transfer as TransferEvent,
} from "../generated/KittyContract/KittyContract";
import {
  MarketplaceContract,
  MarketTransaction as MarketplaceTransactionEvent,
} from "../generated/MarketplaceContract/MarketplaceContract";
import { Cat, Dna, Offer, User } from "../generated/schema";

export function handleTransfer(event: TransferEvent): void {
  let cat = Cat.load(event.params.tokenId.toString());

  // mint
  if (!cat) {
    const contract = KittyContract.bind(event.address);
    const kittie = contract.getKitty(event.params.tokenId);

    cat = new Cat(event.params.tokenId.toString());
    cat.genes = kittie.value0;
    cat.birthTime = event.block.timestamp;
    cat.momId = kittie.value2;
    cat.dadId = kittie.value3;
    cat.generation = kittie.value4;
    cat.dna = event.params.tokenId.toHexString();
    cat.offer = event.params.tokenId.toString();
  }

  // transfer
  cat.owner = event.params.to.toHexString();
  cat.save();

  let user = User.load(event.params.to.toHexString());
  if (!user) {
    user = new User(event.params.to.toHexString());
    user.save();
  }

  let dna = Dna.load(event.params.tokenId.toHexString());
  if (!dna) {
    dna = new Dna(event.params.tokenId.toHexString());
    dna.cat = event.params.tokenId.toString();
    const geneString = cat.genes.toString();
    dna.bodyColor = geneString.slice(0, 2);
    dna.mouthTailColor = geneString.slice(2, 4);
    dna.eyeColor = geneString.slice(4, 6);
    dna.earPawColor = geneString.slice(6, 8);
    dna.eyeShape = geneString.slice(8, 10);
    dna.pattern = geneString.slice(10, 12);
    dna.patternColor = geneString.slice(12, 14);
    dna.animation = geneString.slice(14, 16);
    dna.secret = geneString.slice(16, 18);

    dna.save();
  }
}

export function handleMarketTransaction(
  event: MarketplaceTransactionEvent
): void {
  let offer = Offer.load(event.params.tokenId.toString());
  if (!offer) {
    const contract = MarketplaceContract.bind(event.address);
    const _Offer = contract.getOffer(event.params.tokenId);

    offer = new Offer(event.params.tokenId.toString());
    offer.cat = event.params.tokenId.toString();
    offer.price = _Offer.value1;
    offer.index = _Offer.value2;
    offer.seller = _Offer.value0;
  }

  offer.user = event.params.owner.toHexString();
  log.info("txtType.toString: {}", [event.params.TxType.toString()]);
  log.info("txtType.toHexString: {}", [event.params.TxType.toHexString()]);

  if (event.params.TxType.toString() == "Create offer") {
    offer.active = true;
  }
  if (event.params.TxType.toString() == "Buy") {
    offer.active = false;
  }
  if (event.params.TxType.toString() == "Remove offer") {
    offer.active = false;
  }

  offer.save();
}
