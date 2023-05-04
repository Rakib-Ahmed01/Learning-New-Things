// Write your types here! ✨

// type MotionBase = {
// 	annoyedJustice?: boolean;
// 	status: "allowed" | "denied" | "pending";
// 	from: "defendant" | "plaintiff";
// 	reason: string;
// 	deliberationHours: number;
// };

// type Motion =
// 	| (MotionBase & {
// 			step: "pre-trial";
// 			classification: "dismissals" | "suppressions" | "venue changes";
// 	  })
// 	| (MotionBase & {
// 			step: "post-trial";
// 			classification: "acquittals" | "corrections" | "new trials";
// 	  });

type MotionBase = {
	from: "defendant" | "plaintiff";
	reason: string;
};

type PreTrialMotion = MotionBase & {
	step: "pre-trial";
	classification: "dismissal" | "suppression" | "venue change";
};

type PostTrialMotion = MotionBase & {
	step: "post-trial";
	classification: "acquittal" | "correction" | "new trial";
};

type TrialMotion = PreTrialMotion | PostTrialMotion;

type AllowedMotion = TrialMotion & {
	status: "allowed";
	deliberationHours: number;
};

type PendingMotion = TrialMotion & {
	status: "pending";
	deliberationHours: number;
};

type DeniedMotion = TrialMotion & {
	annoyedJustice: boolean;
	status: "denied";
	deliberationHours: number;
};

type Motion = AllowedMotion | PendingMotion | DeniedMotion;

export const motions: Motion[] = [
	{
		annoyedJustice: true,
		classification: "acquittal",
		deliberationHours: 1,
		from: "defendant",
		reason: "The heretofore document had dried ink on it.",
		status: "denied",
		step: "post-trial",
	},
	{
		annoyedJustice: true,
		classification: "correction",
		deliberationHours: 2.5,
		from: "plaintiff",
		reason: "The tenant has ninety days to vacate.",
		status: "denied",
		step: "post-trial",
	},
	{
		classification: "dismissal",
		deliberationHours: 4,
		from: "plaintiff",
		reason: "Frank was never allowed in the house.",
		status: "allowed",
		step: "pre-trial",
	},
	{
		classification: "acquittal",
		deliberationHours: 3,
		from: "defendant",
		reason: "The duel's been accepted. There's no backing out. That's the law.",
		status: "pending",
		step: "post-trial",
	},
	{
		annoyedJustice: false,
		step: "pre-trial",
		classification: "suppression",
		deliberationHours: 0.5,
		from: "plaintiff",
		reason:
			"It seems like you have a tenuous grasp on the English language in general.",
		status: "denied",
	},
	{
		annoyedJustice: true,
		classification: "correction",
		deliberationHours: 1.5,
		from: "defendant",
		reason: "Fillibuster?",
		status: "denied",
		step: "post-trial",
	},
	{
		annoyedJustice: true,
		classification: "venue change",
		deliberationHours: 0.25,
		from: "defendant",
		reason: "A time was never specified for the duel.",
		status: "denied",
		step: "pre-trial",
	},
	{
		annoyedJustice: true,
		classification: "correction",
		deliberationHours: 5,
		from: "plaintiff",
		reason: "He's making a few good points!",
		status: "denied",
		step: "post-trial",
	},
	{
		step: "post-trial",
		classification: "new trial",
		deliberationHours: 5,
		from: "defendant",
		reason: "Timeout",
		status: "allowed",
	},
];
