declare enum Pal {
    Banana = "banana.ans",
    Default = "default.txt",
    Parrot = "green-parrot.txt",
    Fish = "fish.ans",
    Skull = "skull.ans"
}
declare function say(string: string, pal?: Pal | string): Promise<unknown>;
export { Pal, say };
