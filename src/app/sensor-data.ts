export interface Row {
	SampleTime: string;
	Near: string;
	Temperature: string;
	Humidity: string;
	Distance: string;
	Brightness: string;
}

export interface SensorData {
	IOT_Sensor1s: Row[];
}