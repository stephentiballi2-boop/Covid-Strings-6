doc.type html
html lang en
script
header=document create.element(header)
header.style.backgroundcolor=#4caf50
header.style.color=’white’
header.style.padding=’10px’
header.style.textalign=’center’
header.style.text.fontsize=’24px’
header.textcontent=’welcome to covid strings6’
document appendchild(header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=game plays overview
heading2=covid strings calculator 
heading3=covid strings calculator user input 
heading4=thought box 
subheading1=calculator interface 
subheading2=calculator functionality
subheading3=magenta thought box
subheading4=pink thought box
subheading5=green thought box
subheading6=orange thought box
subheading7=indigo thought box
subheading8=red thought box
subheading9=black thought box
subheading10=white thought box
filename=covid strings6 game plays.js
<header.html>
game plays overview
an overview of covid string game plays
string unit=style for non-concatenated strings 
string array=style for concatenated strings 
blank=part of string that user must answer
user answer=individual users answer
team answer=teams answer
user in select string category
if category==non-concatenated
user.fill blank in string unit
else:
remain
if category==concatenated
user.fill blank in string array
else:
remain
if selected question==multiple choice
user in select a,b,c,d
else:
remain
if hyperlink from meta==reference
user in.select hyperlink
else 
remain 
if selected question ==math problem
open covid strings calculator 
else:
remain
<header.html>
calculator 
the calculator used for players to calculate math problems in covid strings6
covid strings calculator=calculator for math problems
operations=addition,subtraction,multiplication,division
if operation==addition:
return addition
else:
remain
if operation==subtraction:
return subtraction
else:
remain
if operation==multiplication:
return multiplication
else:
remain
if operation==division
return division
else:
remain
<header.html>
covid strings calculator user input 
the user input for the covid strings calculator 
<doctype.html>
<html>
<body>
label for user actions in covid strings 
input type=”text” id=”name”
<script>
document.getelementbyid(name)add.eventlistener(input,event)
console.log(current input +event.target.value)
<script>
<body>
<html>
user in select covid strings calculator
<Subheading.Html>
Calculator Interface
The User Interface Of The Covid Strings Calculator 
<DOCTYPE.HTML>
HTML LANG EN
<HEAD>
UTF8
“VIEWPORT” CONTENT =WIDTH DEVICE -WIDTH INITIAL SCALE 1.0
<TITLE> SIMPLE CALCULATOR /<TITLE>
<STYLE>
BODY{
FONT FAMILY ARIAL SANS SERIF
DISPLAY: FLEX
JUSTIFY CONTENT:CENTER
ALIGN  ITEMS:CENTER
HEIGHT 100VH;
BACKGROUND-COLOR:F0F0F0
CALCULATOR
BACKGROUND COLOR FFF
PADDING 20PX
BORDER RADIUS 10PX
BOX-SHADOW 00 10PX RGBA(0,0,0,0.1);
DISPLAY 
WIDTH 100%
HEIGHT 40PX
MARGIN-BOTTOM: 10PX;
TEXT-ALIGN: RIGHT;
PADDING: 10PX;
FONT-SIZE: 1.5EM;
BORDER: 1PX SOLID CCC
BORDER-RADIUS 5PX
Buttons 
Display: Grid;
Grid-Template-Columns:Repeat (4,1Fr)
Gap:10Px;
.Button 
Padding 20Px
Font Size 1.2Em
Border:None
Border Radius:5Px 
Cursor:Pointer;
Background Color F9f9f9
Box Shadow 0 2Px 5PxRGBA(0,0,0,0.1);
Button Operator
Background Color Ff9500
Color:Fff
Button Equal
Background Color 34C759
Color Fff
Grid Column Span 2
Button Clear
Background Color Ff3b30
Color Fff
Grid Column Span 2
<Style>
<Head>
<Body>
<Div Class= “Calculator”
<Input Type=”Text” Class=”Display” Id “Display”=Disabled>
<Div Class Buttons”>
<Button Class “Button” On Click=”AppendNumber(‘0’)>0<Button
<Button Class “Button” On Click=”AppendNumber(‘1’)>1<Button
<Button Class “Button” On Click=”AppendNumber(‘2’)>2<Button
<Button Class “Button” On Click=”AppendNumber(‘3’)>3<Button
<Button Class “Button” On Click=”AppendNumber(‘4)>4<Button
<Button Class “Button” On Click=”AppendNumber(‘5’)>5<Button
<Button Class “Button” On Click=”AppendNumber(‘6’)>6<Button
<Button Class “Button” On Click=”AppendNumber(‘7’)>7<Button
<Button Class “Button” On Click=”AppendNumber(‘8’)>8<Button
<Button Class “Button” On Click=”AppendNumber(‘9’)>9<Button
<Button Class “Button” On Click=”AppendNumber(‘.’)>.<Button
Button Class Operator On Click=Choose Operation (Addition) Button
Button Class Operator On Click=Choose Operation (Subtraction) Button
Button Class Operator On Click=Choose Operation (Multiplication) Button
Button Class Operator On Click =Choose Operation (Division) Button
Button Class =”Button Equal On Click Compute()=</Button>
Button Class = “Button Clear” On Click =Clear Display Button >C< /Button>
Div
Div
Src= “Calculator.Js”>
<Script>
</Body>
</Html>
<Subheading.Html>
Calculator Functionality
The Operation Organization For Practical Use Of The Covid Strings Calculator
Let Display=Document Get Element By Id (‘Display)
Let CurrentOperand=’’
Let Previous Operand=’’
Let Operation =Undefined
Append Number
If (Number ===’.’& CurrentOperand.Includes(‘.’)Return;
CurrentOperand=CurrentOperand.ToString()+Number.ToString();
UpdateDisplay();
ChoseOperation(Op)
If(CurrentOperand===’’)
If(PreviousOperand!==’’)
Compute
Let Computation
Prev=ParseFloat(PreviousOperand)
Current=ParseFloat(CurrentOperand)
<Header.Html>
Thought Box
A Place To Type Your Thoughts On What The Answer Is 
<DOCTYPE.HTML>
<HTML LANG “EN”>
<HEAD>
UTF8
“VIEWPORT” CONTENT =WIDTH DEVICE -WIDTH INITIAL SCALE 1.0
<TITLE> THOUGHT BOX /<TITLE>
<STYLE>
BODY{
FONT FAMILY ARIAL SANS SERIF
DISPLAY: FLEX
JUSTIFY CONTENT:CENTER
ALIGN  ITEMS:CENTER
HEIGHT 100VH;
BACKGROUND-COLOR:F0F0F0
THOUGHT BOX 
BACKGROUND COLOR FFF
PADDING 20PX
BORDER RADIUS 10PX
BOX-SHADOW 00 10PX RGBA(0,0,0,0.1);
DISPLAY 
WIDTH 300PX
TEXT ALIGN CENTER
THOUGHT BOX INPUT 
WIDTH  80%
PADDING: 10PX;
MARGIN-BOTTOM: 10PX;
BORDER: 1PX SOLID CCC
BORDER-RADIUS 5PX
THOUGHT BOX BUTTON
PADDING 10PX, 20PX
BORDER-RADIUS 5PX
background color 007bff
color:fff
cursor:pointer;
THOUGHT BOX HOVER BUTTON
BACKGROUND COLOR 0056B3
THOUGHT DISPLAY 
margin-top 20px;
font-size 1.2em
color 333
<style/>
</head>
<body>
<div class= “thought box”
input type= “text” id=”thought input” 
click on button display thought>submit</button>
div class thought display id=”thought display
</div>
<script>
display thought
thought input=document.get element by id (‘thought input).value
thought display=document.get element by id(‘thought display’)
thought display.text content=thought input 
<script>
</body>
</html>
covid strings team thought box=feature for teams to discuss what category to take and what each person thinks the correct answer to a question is 
prompt covid strings team thought box 
if user prompt covid strings team thought box ==correct answer
return answer 
else
check answer
return filename
