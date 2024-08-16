import { adventurer } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";

export const useGenerateAvatar = (seed: string) => {
  const isFlip = Math.random() > 0.5;
  const avatar = createAvatar(adventurer, {
    randomizeIds: true,
    seed: seed,
    flip: isFlip,
    hairProbability: 95,
    glassesProbability: 30,
    featuresProbability: 20,
    earringsProbability: 70,
  }).toDataUri();

  return avatar;
};
