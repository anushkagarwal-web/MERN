let date,month ,zodiac_sign;
date= parseInt(prompt("Enter your birth date"));
month= prompt("Enter your birth month");

if((date>=21 && month=="March")|| (date<=19 && month=="April"))
{
    zodiac_sign="Aries"
}
else if((date>=20 && month=="April")|| (date<=20 && month=="May"))
{
    zodiac_sign="Taurus"
}
else if((date>=21 && month=="May")|| (date<=20 && month=="June"))
{
    zodiac_sign="Gemini"
}
else if((date>=21 && month=="June")|| (date<=22 && month=="July"))
{
    zodiac_sign="Cancer"
}
else if((date>=23 && month=="July")|| (date<=22 && month=="August"))
{
    zodiac_sign="Leo"
}
else if((date>=20 && month=="August")|| (date<=20 && month=="September"))
{
    zodiac_sign="Virgo"
}
else if((date>=23 && month=="September")|| (date<=22 && month=="October"))
{
    zodiac_sign="Libra"
}
else if((date>=23 && month=="October")|| (date<=21 && month=="November"))
{
    zodiac_sign="Scorpio"
}
else if((date>=22 && month=="November")|| (date<=21 && month=="December"))
{
    zodiac_sign="Sagittarius"
}
else if((date>=22 && month=="December")|| (date<=19 && month=="January"))
{
    zodiac_sign="Capricon"
}
else if((date>=20 && month=="January")|| (date<=18 && month=="February"))
{
    zodiac_sign="Aquarius"
}
else if((date>=19 && month=="February")|| (date<=20 && month=="March"))
{
    zodiac_sign="Pisces"
}
else{
     zodiac_sign="Invalid date or month";
}
document.write("Zodiac Sign:" +zodiac_sign);