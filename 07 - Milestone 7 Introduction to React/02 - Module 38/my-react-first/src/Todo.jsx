// export default function Todo({task, isComplete}) {
//     return (
//         <li>Task: {task}</li>
//     )
// }

/* Conditional Rendering 01 */
// export default function Todo({task, isComplete}) {
//     if (isComplete === true) {
//         return (
//             <li>Task: {task} is completed</li>
//         )
//     } else {
//         return (
//             <li>Task: {task} is on the way to learning</li>
//         )
//     }
// }

/* Conditional rendering 02 */
// export default function Todo({task, isComplete}) {
//     if (isComplete === true) {
//         return <li>Task {task} is complete</li>
//     }
//     return <li>Task {task} is on the way of learning</li>
// }

/* Conditional rendering 03 */
// export default function Todo({task, isComplete}) {
//     return (
//         <li>{task} {isComplete ? 'Complete' : 'Work on'}</li>
//     )
// }

/* Conditional rendering 04 && */
// export default function Todo({task, isComplete}) {
//     return (
//         <li>{task} {isComplete && 'Done'}</li>
//     )
// }

/* Conditional rendering 05 || */
// export default function Todo({task, isComplete}) {
//     return (
//         <li>{task} {isComplete || 'Work on'}</li>
//     )
// }

/* Conditional rendering 05 with variable */
export default function Todo({task, isComplete}) {
    let listItem;
    
    if (isComplete) {
        listItem = <li>Task {task} is complete</li>
    } else {
        listItem = <li>Task {task} is work on</li>
    }
    return listItem;
}
