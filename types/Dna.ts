import { CSSProperties } from "react";

type LiteralDigits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type LiteralDigitsWithoutZero = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type NumberString<T extends number> = `${T}`;

export type From0To9 = NumberString<LiteralDigits>;
type LiterStringDigitsWithoutZero = NumberString<LiteralDigitsWithoutZero>;

type AppendDigit<T extends number | string> = `${T}${LiteralDigits}`;

type MakeSet<P extends string> = AppendDigit<P>;

export type From10To19 = MakeSet<"1">;
export type From10To16 = Exclude<From10To19, "19" | "18" | "17">;
export type From10To15 = Exclude<From10To16, "16">;
export type From10To99 = MakeSet<LiterStringDigitsWithoutZero>;

export type Colors = Record<From10To99, string>;
export type EyeShape = Record<From10To19, CSSProperties>;
export type Patterns = Record<
  From10To16,
  { mid?: CSSProperties; left?: CSSProperties; right?: CSSProperties }
>;

export type Animations = Record<
  From10To16,
  {
    head?: string;
    tail?: string;
    eye?: string;
    earLeft?: string;
    earRight?: string;
  }
>;

export type DNA = {
  bodyColor: From10To99;
  mouthTailColor: From10To99;
  eyeColor: From10To99;
  earPawColor: From10To99;
  eyeShape: From10To19;
  pattern: From10To16;
  patternColor: From10To99;
  animation: From10To15;
  secret?: From10To19;
};