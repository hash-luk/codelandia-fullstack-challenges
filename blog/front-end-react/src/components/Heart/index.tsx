import Lottie, { LottieRefCurrentProps } from "lottie-react";
import * as S from "./styles";
import heartAnimation from "../../assets/animations/purple_heart.json";
import { useRef, useState } from "react";

export default function Heart() {
  const likeRef = useRef<LottieRefCurrentProps>(null);
  const [isActive, setIsActive] = useState(false);

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
  }

  return (
    <S.AnimationContainer>
      <Lottie
        lottieRef={likeRef}
        animationData={heartAnimation}
        loop={false}
        autoplay={false}
        onClick={playAnimation}
      />
    </S.AnimationContainer>
  );
}
