import time
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BOARD)

buzzerPin = 7

GPIO.setup(buzzerPin, GPIO.OUT)

def buzzerSound(amt):

    dlay = 0.1

    for index in range (0,amt):
        GPIO.output(buzzerPin, True)
        time.sleep(dlay)
        GPIO.output(buzzerPin, False)
        time.sleep(dlay)

if __name__ == "__main__":
    try:
        buzzerSound(2)
    except KeyboardInterrupt:
        GPIO.cleanup()