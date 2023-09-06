import React from "react";
import cat from "../assets/cat.png";
import shit from "../assets/poop.png";
import nice from "../assets/nice.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: shit, alt: "shit" },
    4: { src: nice, alt: "nice" },
    5: { src: cat, alt: "awesome" },
  };

  return (
    <Image
      {...emojiMap[rating]}
      boxSize="40px"
      borderRadius={20}
      marginTop={2}
    />
  );
};

export default Emoji;
