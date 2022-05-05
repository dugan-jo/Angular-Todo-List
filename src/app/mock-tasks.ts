import {Task} from './Task'

//since task is an array we need to add the [].  if it was a single object we would not need it.
export const TASKS: Task[] = [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'May 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Job Interview',
        day: 'May 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Vet appointment',
        day: 'May 7th at 11:30am',
        reminder: true,
    },
]