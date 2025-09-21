export function calculateAge(birthDate: string): number {
	const birth = new Date(birthDate);
	const today = new Date();
	let age = today.getFullYear() - birth.getFullYear();
	const monthDiff = today.getMonth() - birth.getMonth();

	// If birthday hasn't occurred this year yet, subtract 1 from age
	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
		age--;
	}

	return age;
}

export function daysUntilNextBirthday(birthDate: string): number {
	const birth = new Date(birthDate);
	const today = new Date();

	// Create this year's birthday
	const thisYearBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());

	// If birthday already passed this year, calculate for next year
	if (today > thisYearBirthday) {
		thisYearBirthday.setFullYear(today.getFullYear() + 1);
	}

	// Calculate difference in milliseconds and convert to days
	const diffTime = thisYearBirthday.getTime() - today.getTime();
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	return diffDays;
}
