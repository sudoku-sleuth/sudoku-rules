/** Chosen shared values, used by classification and case-name checking. */
export const chosenAnswerPrimitives: Record<string, string> = {
 routeAnswer: 'route', networkAnswer: 'network', partitionAnswer: 'partition',
 selectionAnswer: 'selection', choiceAnswer: 'choice', assignmentAnswer: 'assignment',
 valueAnswer: 'value', symbolAnswer: 'symbol',
};
/** Schema readers still need name resolution, without choosing a value. */
export const sharedSchemaPrimitives: Record<string, string> = {routeClosed: 'route'};
