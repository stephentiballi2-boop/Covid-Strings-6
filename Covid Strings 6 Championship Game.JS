doc.type html
html lang en 
script
header=document create.element(header)
header.style.backgroundcolor=#4caf50
header.style.color=’white’
header.style.padding=’10px’
header.style.textalign=’center’
header.style.text.fontsize=’24px’
header.textcontent=’welcome to covid strings6 championship round’
document appendchild(header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=championship overview
heading2=championship code
heading3=championship round questions
heading4=victory
subheading1=team stealing
subheading2=result for championship  matchup
<header.html>
championship overview
contains an overview of the championship
html
head
utf8
viewport content=width=device-width, initial-scale=one
title covidstrings 6 championship bracket
div id bracket class bracket div
script src bracket.js
head
body
bracket-container{}
matchup
solid zero;
padding 
text align center 
filename=covidstrings6 championship game .js
championship game=(highest and lowest remaining seeds ) 
team low seed = lowest remaining seed
team high seed= highest remaining seed
createround covid strings6 championship round 
round =document.createelement(div);
round.classlist.add(round);
for (let i = zero; i < teams.length; i += two) 
round.appendchild(creatematchup(teams[i], teams[i + one]));
return round;
<header.html>
championship round questions
the questions asked in the championship round of the covid strings contest
java util.scanner
java.util
championship round questions=questions[27-32]
collections.shuffle(arrays.aslist(questions)
question27
question28
question29
question30
question31
question32 
class myclass
constructor(non-concatenated)
return category
if category==math problem:
prompt
log
else:
select from multiple choice
constmyclass=new.myclass(concatenated)
return category
if category==math problem:
prompt
log
else:
select from multiple choice
import syntax 
team1=lower ranked seed
team2=the higher seeded opponent
points: 10 points or 20 points
<subheading.html>
team stealing
steal points(stealingteam,victimteam,pointstosteal)
if(victimteam.points>=pointtosteal)
victimteam.points-=pointtosteal;
stealingteampoints+=pointstosteal
console.log([stealingteam.name} stole points from {victim team name}!)
else:
console.log({victimteam.name} doesnt have enough points to steal)
if teams final answer==incorrect:
opposing team steals
else:
change covid strings matchup score
substring(start,end)
for multiple choice questions in covid strings
if selectedanswer==correct answer:
return true
else:
return false
<header.html>
victory
contains the functions and processes necessary to declare the winning team
<subheading.html>
result for championship matchup  
the code for how to determine the end result of covid strings6 championship
result=declarewinner(team1score,team2score)
advancingteam=slice(current teams)
if team high seed score>=sixty:
console.log(team high seed wins covid strings6)
else:
remain
if team low seed championship game score>=sixty:
console.log(team low seed wins covid strings6)
else:
remain
return filename
