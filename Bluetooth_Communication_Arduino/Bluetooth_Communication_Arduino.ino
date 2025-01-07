#include <SoftwareSerial.h>
#include <ArduinoJson.h>

void handleDevices(String name);
int getId(String name);

struct Appliances {
  String name;
  float current;
  int outputPin;
  int inputPin;
  bool status;
};

SoftwareSerial BTSerial(2, 3); // RX, TX
Appliances devices[2] = {{"Bulb1", 0, 4,5, false}}; 

void setup() {
  Serial.begin(38400);  
  BTSerial.begin(38400);
  Serial.println("Bluetooth communication started...");
  pinMode(5, INPUT);
  pinMode(4, OUTPUT);
}

void loop() {
  float current1 = analogRead(A0);

  if (Serial.available()) {
    String command = Serial.readStringUntil('\n'); 
    BTSerial.println(command); 
    Serial.print("Sent via Bluetooth: ");
    Serial.println(command);
  }

  if (BTSerial.available()) {
    String clientResponse = BTSerial.readStringUntil('\n'); 
    Serial.print(clientResponse);
    if (clientResponse == "Bulb1") {
      handleDevices(clientResponse);
    }
  }

  StaticJsonDocument<200> jsonDoc;
  String jsonString;

  jsonDoc["current"] = current1;
  JsonArray jsonDevice=jsonDoc.createNestedArray("Devices");

  for(int j=0;j<2;j++){
    JsonObject deviceObj=jsonDevice.createNestedObject();
    deviceObj["name"] = devices[j].name;
    deviceObj["current"] = j==0?current1:0;
    deviceObj["outputPin"] = devices[j].outputPin;
    deviceObj["inputPin"] = devices[j].inputPin;
    deviceObj["status"] = devices[j].status;
  }

  serializeJson(jsonDoc, jsonString);

  BTSerial.println(jsonString);  

  Serial.print("Sent JSON to server: ");
  Serial.println(current1);
  delay(1000);
}

int getId(String name) {
  if (name == "Bulb1") return 0; 
  else if(name=="Bulb2") return 1;
  return -1; 
}

void handleDevices(String name) {
  int id = getId(name);
  
  if (id == -1) {
    Serial.println("Device not found");
    return;
  }  
  if (devices[id].status) {
    Serial.println("Turning off device");
    devices[id].status = false;
    digitalWrite(5, LOW);
  } 
  else {
    Serial.println("Turning on device");
    devices[id].status = true;
    digitalWrite(5, HIGH);
  }
}
