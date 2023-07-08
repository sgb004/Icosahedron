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

		const MathSin = (angle) => Math.sin((angle * Math.PI) / 180);
		const penSide = MathSin(36) * (penContainerSide / 2) * 2;
		const hexApothem = Math.sqrt(penSide ** 2 - (penSide / 2) ** 2);

		this.hexPoints = {
			p1: 8.891722196,
			p2: 32.725424848,
			p3: 32.668135095,
			p4: 20.225424852,
			p5: 71.139179296,
		};

		this.elevationAngle1 = 37.377368143;
		this.elevationAngle2 = (90 - this.elevationAngle1) / 2 + this.elevationAngle1;

		this.penPoints = {
			p1: penSide - (this.hexContainerSide - penContainerSide) / 2,
			p2: hexApothem * MathSin(this.elevationAngle1),
		};

		console.log({ penSide, hexApothem, penPoints: this.penPoints });

		for (let key in this.hexPoints) {
			this.hexPoints[key] = (this.hexPoints[key] * this.hexContainerSide) / 100;
		}
	}
}

export default Measures;
