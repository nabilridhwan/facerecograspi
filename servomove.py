import RPi.GPIO as GPIO
import time

servoPIN = 18
GPIO.setmode(GPIO.BOARD)
GPIO.setup(servoPIN, GPIO.OUT)

p = GPIO.PWM(servoPIN, 50) # GPIO 17 for PWM with 50Hz
p.start(7.5) # Initialization

try:
    while True:
        p.ChangeDutyCycle(12.5)
except KeyboardInterrupt:
    GPIO.cleanup()