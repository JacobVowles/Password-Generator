let txtPassword = document.getElementById("newPswd");
let copyButton = document.getElementById("btnCopy");
copyButton.disabled = true;
document.getElementById("rangeCheck").addEventListener("input", () => {
  let passwordLength = Number(rangeValue.innerText);
  newPswd.innerText = GeneratePassword(passwordLength);
});

function GeneratePassword(pswdLength)
{
	copyButton.disabled = false;
	const specialCase = '!@#$%^&*()'
	const numbers = '0123456789'
	const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
	let newPassword = '';
	let allCharacters = specialCase + numbers + upperCase + lowerCase;
	requiredCharacters = 
	[
		GetRandomCharacter(specialCase),
		GetRandomCharacter(numbers),
		GetRandomCharacter(upperCase),
		GetRandomCharacter(lowerCase),
	];
	let passwordCharacters = '';
	for(let i = 0; i < requiredCharacters.length; i++)
	{
		passwordCharacters+= requiredCharacters[i];
	}
	for(let i = 4; i < pswdLength; i++)
	{
		randomIndex = Math.floor(Math.random() * allCharacters.length);
		passwordCharacters += allCharacters.charAt(randomIndex);	
	}
	
	function shuffleString(password)
	{
		charArray = password.split('');
		for(let i = charArray.length - 1; i >0; i--)
		{
			const j = Math.floor(Math.random() * (i + 1));
			[charArray[i],charArray[j]] = [charArray[j],[charArray[i]]];
		}
		const shuffledString = charArray.join('');
		return shuffledString;
	}
	passwordCharacters = shuffleString(passwordCharacters)
	return  passwordCharacters;
}
function GetRandomCharacter(character)
{
	let randomCharacter = '';
	const randomIndex = Math.floor(Math.random() * character.length);
	
	randomCharacter = character.charAt(randomIndex);
	return randomCharacter;
}
copyButton.addEventListener("click",()=>{
	let copyText = document.getElementById("newPswd");
	
	const range = document.createRange();
	range.selectNode(copyText);
	
	const selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand("copy");
	
	selection.removeAllRanges();
});



