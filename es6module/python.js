class PythonStack{
    constructor(coursename,trainer,duration){
        this.coursename=coursename;
        this.trainer=trainer;
        this.duration=duration;
    }
}

export class PythonFramework extends PythonStack{
     constructor(coursename,trainer,duration,frameworkName){
         super(coursename,trainer,duration,frameworkName);
         this.frameworkName=frameworkName;
     }
}
export default PythonStack;
