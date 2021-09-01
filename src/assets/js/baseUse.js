//用于切换切换数字，传入的iStrue如果是true，那么就执行减，反之则加
//最后返回一个加减后的数字
export const imgChange=(currentIndex,length,isTrue)=>{
  let currentIndex1 = currentIndex;
  let length1 = length-1;
  let isTrue1 = isTrue;
  if(isTrue1)
  {
    if(currentIndex1<=0){
      currentIndex1=length1;
    }
    else{
      currentIndex1--;
    }
  }
  else{
    if(currentIndex1>=length1){
      currentIndex1=0;
    }
    else{
      currentIndex1++;
    }
  }
  return currentIndex1;
}

// 点击动态切换ul
export function ulChange(ulFirst,ulSecond,ulThird,ulFourth,currentIndex,num){
    currentIndex+=num;
    if(currentIndex>=4)
    {
      currentIndex=0
    }

    if(currentIndex<0)
    {
      currentIndex=3
    }
    console.log(currentIndex)

    let firstLeft=(currentIndex-1)*645+'px';
    let secondLeft=(currentIndex)*645+'px'
    let thirdLeft=(currentIndex+1)*645+'px'
    let fourthLeft=(currentIndex+2)*645+'px'

     ulFirst.style.setProperty("left",firstLeft);
     ulSecond.style.setProperty("left",secondLeft);
     ulThird.style.setProperty("left",thirdLeft);
     ulFourth.style.setProperty("left",fourthLeft);
    
    if(currentIndex==0){
      firstLeft = (currentIndex+3)*645+'px'
      secondLeft = currentIndex*645+'px'
      console.log(firstLeft+'111')
      console.log(secondLeft+'111')
      ulFirst.style.setProperty("left",firstLeft);
      ulSecond.style.setProperty("left",secondLeft);
      if(num==-1)
      {
        ulSecond.classList.remove('changeOne');
        ulThird.classList.add('changeOne');
        ulFourth.classList.add('changeOne');
      }
      else{
        ulFirst.classList.add('changeOne');
        ulThird.classList.add('changeOne');
        ulFourth.classList.add('changeOne');

      }
    
    }
    else if(currentIndex==1){
        firstLeft = (currentIndex-1)*645+'px';
        ulFirst.style.setProperty("left",firstLeft);
      if(num==-1)
      {
        ulFirst.classList.add('changeOne');
        ulSecond.classList.add('changeOne');
        ulThird.classList.add('changeOne');
      }
      else{
        ulSecond.classList.add('changeOne');
        ulThird.classList.add('changeOne');
        ulFourth.classList.add('changeOne');

      }
  
    }
    else if(currentIndex==2){
      fourthLeft=(currentIndex-2)*645+'px'
      ulFourth.style.setProperty("left",fourthLeft);

      if(num==-1)
      {
        ulFirst.classList.add('changeOne');
        ulSecond.classList.add('changeOne');
        ulFourth.classList.add('changeOne');
      }
      else{
        ulFirst.classList.add('changeOne');
        ulSecond.classList.add('changeOne');
        ulThird.classList.add('changeOne');
      }

    }
  
    else if(currentIndex==3){
      thirdLeft = (currentIndex-3)*645+'px'
      fourthLeft=(currentIndex-2)*645+'px'
      ulThird.style.setProperty("left",thirdLeft);
      ulFourth.style.setProperty("left",fourthLeft);
      if(num==-1)
      {
        ulFirst.classList.add('changeOne');
        ulThird.classList.add('changeOne');
        ulFourth.classList.add('changeOne');
      }
      else{
        ulFirst.classList.add('changeOne');
        ulSecond.classList.add('changeOne');
        ulFourth.classList.add('changeOne');
      }
    }
      return currentIndex;
}



