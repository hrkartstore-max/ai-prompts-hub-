import mongoose,{Schema,models,model} from "mongoose";
const PromptSchema=new Schema({title:{type:String,required:true,trim:true,maxlength:160},slug:{type:String,required:true,unique:true,index:true},description:{type:String,required:true,maxlength:300},category:{type:String,required:true},tool:{type:String,required:true},level:{type:String,default:"Beginner"},prompt:{type:String,required:true},tags:{type:[String],default:[]},status:{type:String,enum:["draft","published"],default:"draft",index:true}},{timestamps:true});
export default (models.Prompt||model("Prompt",PromptSchema));
