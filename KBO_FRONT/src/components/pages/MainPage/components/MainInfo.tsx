import { useEffect, useRef } from 'react';
import { InfoTextProps, Container } from '../styles/StyledMainInfo';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function MainInfo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: '0% 70%',
          end: '100% 30%',
          toggleActions: 'restart pause reverse none',
          markers: false,
        },
        x: -200,
        scrub: 1,
        duration: 2,
      });
    }
  }, []);

  return (
    <Container ref={containerRef}>
      <InfoTextProps>
        <b style={{ color: '#5c9b57' }}>KBO Pedia</b>는 야구 초보자도 쉽게 즐길 수 있도록 만들어진 사이트입니다.
        <br />
        다양한 서비스를 통해 야구에 대한 재미와 이해를 함께 느껴보세요!
      </InfoTextProps>
    </Container>
  );
}
