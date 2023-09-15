export const getNormalDate = (incorrectDate: string | undefined) => {
  if(typeof incorrectDate === "undefined") return

  const dateArray = incorrectDate.split('T')
  
  const date = dateArray[0].split("-").reverse().join("/");
  const time = dateArray[1].slice(0, 5)
  
  const result = date + " " + time;
  
  return result
}