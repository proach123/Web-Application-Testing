
   export const strike =(state) =>{
    let strikeUp = state.strikes + 1

    return state.strikes = strikeUp
   }

   export const ball = (state)=>{
       let ballUp = state.balls +1
       
       return state.balls = ballUp
   }

   export const foul = (state)=>{
       let foulBall = state.strikes
       if(state.strikes >= 0 && state.strikes <= 1){
           foulBall++
           return (state.strikes = foulBall)
       } else return state.strikes
   }

   export const hit = (state)=>{
       state.strikes = 0
       state.balls = 0
       return state
   }