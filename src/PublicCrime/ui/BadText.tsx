import React, { useState, useEffect } from "react";

interface IProps {
  normal: string;
  mistake: string;
}

enum Step {
  MISTAKE,
  ERASING,
  WRITING,
  END,
}

export function BadText(props: IProps): React.ReactElement {
  const [step, setStep] = useState(Step.MISTAKE);
  const [n, setN] = useState(props.mistake.length);
  let text = props.mistake;

  useEffect(() => {
    if (step !== Step.MISTAKE) return;
    const id = setTimeout(() => setStep(Step.ERASING), 2000);
    return () => clearInterval(id);
  }, [step]);

  useEffect(() => {
    if (step !== Step.ERASING) return;
    const id = setInterval(() => {
      setN((n) => {
        if (n > 0) {
          return n - 1;
        }
        setStep(Step.WRITING);
        return n;
      });
    }, 50);
    return () => clearInterval(id);
  }, [step]);

  useEffect(() => {
    if (step !== Step.WRITING) return;
    const id = setInterval(() => {
      setN((n) => {
        if (n < props.normal.length) {
          return n + 1;
        }
        setStep(Step.END);
        return n;
      });
    }, 50);
    return () => clearInterval(id);
  }, [step]);

  if (step === Step.MISTAKE) {
    text = props.mistake;
  } else if (step === Step.ERASING) {
    text = props.mistake.slice(0, n) + "█";
  } else if (step === Step.WRITING) {
    text = props.normal.slice(0, n) + "█";
  } else {
    text = props.normal;
  }
  return <>{text}</>;
}
