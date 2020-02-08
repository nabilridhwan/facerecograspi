import RPi.GPIO as GPIO
import time

servoPIN = 18
GPIO.setmode(GPIO.BOARD)
GPIO.setup(servoPIN, GPIO.OUT)

p = GPIO.PWM(servoPIN, 50) # GPIO 17 for PWM with 50Hz
p.start(7.5) # Initialization Reset Position
# 10 - 90 degrees

def unlock:
    p.ChangeDutyCycle(7.5)
    time.sleep(1)

def lock:
    p.ChangeDutyCycle(12.5)
    time.sleep(1)

try:
    while True:
        unlock()
        lock()
except KeyboardInterrupt:
    GPIO.cleanup()