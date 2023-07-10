class Measures {
	static penContainerSide;
	static hexContainerSide;
	static elevationAngle2;
	static elevationAngle1;
	static penPoints = [];
	static hexPoints = [];

	static init(penContainerSide) {
		console.log('POINTS');

		this.penContainerSide = penContainerSide;
		this.hexContainerSide = penContainerSide * 1.175570505;

		console.log(this.hexContainerSide);

		const MathSin = (angle) => Math.sin((angle * Math.PI) / 180);
		const MathCos = (angle) => Math.cos((angle * Math.PI) / 180);
		const penSide = MathSin(36) * (penContainerSide / 2) * 2;
		const hexApothem = Math.sqrt(penSide ** 2 - (penSide / 2) ** 2);
		const radius = penContainerSide / 2;

		this.hexPoints = {
			p1: 8.891722196,
			p2: 32.725424848,
			p3: 32.668135095,
			p4: 20.225424852,
			p5: 71.139179296,
		};

		this.elevationAngle1 = 37.377368143;
		this.elevationAngle2 = (90 - this.elevationAngle1) / 2 + this.elevationAngle1;

		//const p1 = penSide - (this.hexContainerSide - penContainerSide) / 2;
		const p1 = penContainerSide / 2;
		const p2 = hexApothem * MathSin(this.elevationAngle1);
		const p3 = this.hexContainerSide * MathSin(54);
		const p4 = -p1 + this.hexContainerSide * MathCos(54);

		this.penPoints = {
			p1,
			p2,
			p3,
			p4,
			p5: p3 - this.hexContainerSide * MathSin(18),
			p6: p4 + this.hexContainerSide * MathCos(18),
		};

		console.log(this.hexContainerSide);
		console.log(this.penPoints);

		for (let key in this.hexPoints) {
			this.hexPoints[key] = (this.hexPoints[key] * this.hexContainerSide) / 100;
		}
	}
}

export default Measures;
