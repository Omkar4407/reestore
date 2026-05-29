export const ICONS = {
    // Why ReeStore
    expertReviewed: "/icons/expert-reviewed.png",
    curatedNotCrowded: "/icons/curated-not-crowded.png",
    transparentLabels: "/icons/transparent-labels.png",
    qualityChecked: "/icons/quality-checked.png",
  
    // Ecosystem / Value Props
    connectedToCare: "/icons/connected-to-care.png",
    clearerBeforeYouChoose: "/icons/clearer-before-you-choose.png",
    reviewedWithExpertInputs: "/icons/reviewed-with-expert-inputs.png",
  
    // Left Section Icons
    left1: "/icons/left1.png",
    left2: "/icons/left2.png",
    left3: "/icons/left3.png",
  
    // Right Section Icons
    right1: "/icons/right1.png",
    right2: "/icons/right2.png",
    right3: "/icons/right3.png",
  
    // Product Review Process Steps
    step1: "/icons/step-1.png",
    step2: "/icons/step-2.png",
    step3: "/icons/step-3.png",
    step4: "/icons/step-4.png",
    step5: "/icons/step-5.png",
  
    // Comparison / Feature Icons
    tooManyClaims: "/icons/too-many-claims.png",
    tooManyOptions: "/icons/too-many-options.png",
    tooLittleClarity: "/icons/too-little-clarity.png",
  
    // Feature Cards
    f1: "/icons/f1.png",
    f2: "/icons/f2.png",
    f3: "/icons/f3.png",
    f4: "/icons/f4.png",
  } as const;
  
  export type IconName = keyof typeof ICONS;