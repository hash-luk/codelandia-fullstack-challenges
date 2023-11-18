import Lottie, { LottieRefCurrentProps } from "lottie-react";
import * as S from "./styles";
import heartAnimation from "../../assets/animations/purple_heart.json";
import { useEffect, useRef, useState } from "react";

interface HeartProps {
  isLiked: boolean;
  onLikeDislike: (isLiked: boolean) => void;
}

export default function Heart({ isLiked, onLikeDislike }: HeartProps) {
  const likeRef = useRef<LottieRefCurrentProps>(null);
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(isLiked ? 1 : 0);

  likeRef.current?.setSpeed(1.3);

  function playAnimation() {
    if (!isActive) {
      likeRef.current?.setDirection(1);
      setIsActive(true);
    } else {
      likeRef.current?.setDirection(-1);
      setIsActive(false);
    }

    likeRef.current?.play();
    handleLikeClick();
  }
  
  useEffect(() => {
    setProgress(isLiked ? 1 : 0);
  }, [isLiked]);

  const handleLikeClick = () => {
    onLikeDislike(!isLiked);
  };

  return (
    <S.AnimationContainer>
      <Lottie
        lottieRef={likeRef}
        animationData={heartAnimation}
        loop={false}
        autoplay={false}
        onClick={playAnimation}
        initialSegment={[0,progress]}
      />
    </S.AnimationContainer>
  );
}
