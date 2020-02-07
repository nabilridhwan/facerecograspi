import RPi.GPIO as GPIO
import time

sensor = 16
GPIO.setmode(GPIO.BOARD)
GPIO.setup(sensor, GPIO.IN)

print("[INFO] Initialising Motion Sensor!")
print("[INFO] Capturing Motion Sensor Data!")

while True:
    print(GPIO.input(sensor))
    # Activate camera
    # Sleep the program for duration specified
