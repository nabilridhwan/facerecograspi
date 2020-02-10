import time
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)

buzzerPin = 4

GPIO.setup(buzzerPin, GPIO.OUT)

def buzzerSound(amt, dlay):
    for index in range (0,amt):
        GPIO.output(buzzerPin, True)
        sleep(dlay)
        GPIO.output(buzzerPin, False)
        sleep(dlay)

if __name__ == "__main__":
    try:
        buzzerSound(2, 0.5)
    except KeyboardInterrupt:
        GPIO.cleanup()