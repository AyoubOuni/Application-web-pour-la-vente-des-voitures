const  init_state ={
    user:[]
  }
  export default function Reduceru(state = init_state,action){
        switch(action.type){
          case "id" :
            const newArr = [];
            newArr.unshift(action.payload);
            return{
            user:newArr
            }
                  
              default: return state;
      }
      }
     
  
      
  