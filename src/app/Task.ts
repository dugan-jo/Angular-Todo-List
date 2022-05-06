export interface Task {
    //? means its optional
    
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}