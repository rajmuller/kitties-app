import { CSSProperties } from "react";

type LiteralDigits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type LiteralDigitsWithoutZero = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type NumberString<T extends number> = `${T}`;

export type From0To9 = NumberString<LiteralDigits>;
export type From0To6 = NumberString<Exclude<LiteralDigits, 9 | 8 | 7>>;
export type From0To5 = Exclude<From0To6, "6">;
type LiterStringDigitsWithoutZero = NumberString<LiteralDigitsWithoutZero>;

type AppendDigit<T extends number | string> = `${T}${LiteralDigits}`;

type MakeSet<P extends string> = AppendDigit<P>;

export type From10To99 = MakeSet<LiterStringDigitsWithoutZero>;

export type From0To99 = From0To9 | From10To99;

export type Colors = Record<From0To99, string>;
export type EyeShape = Record<From0To9, CSSProperties>;
export type Patterns = Record<
  From0To6,
  { mid?: CSSProperties; left?: CSSProperties; right?: CSSProperties }
>;

export type Animations = Record<
  From0To6,
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
  mouthTailColor: From0To99;
  eyeColor: From0To99;
  earPawColor: From0To99;
  eyeShape: From0To9;
  pattern: From0To6;
  patternColor: From0To99;
  animation: From0To5;
  secret?: From0To9;
};
