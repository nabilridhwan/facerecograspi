import RPi.GPIO as GPIO
import time

servoPIN = 18
GPIO.setmode(GPIO.BOARD)
GPIO.setup(servoPIN, GPIO.OUT)

p = GPIO.PWM(servoPIN, 60) # GPIO 17 for PWM with 50Hz
p.start(1.5) # Initialization

try:
    while True:
        p.ChangeDutyCycle(1.5)
        time.sleep(1)
        p.ChangeDutyCycle(2)
        time.sleep(1)
        p.ChangeDutyCycle(1)
        time.sleep(1)

except KeyboardInterrupt:
    GPIO.cleanup()