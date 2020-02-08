import RPi.GPIO as GPIO
import time

servoPIN = 18
GPIO.setmode(GPIO.BOARD)
GPIO.setup(servoPIN, GPIO.OUT)

p = GPIO.PWM(servoPIN, 60) # GPIO 17 for PWM with 50Hz
p.start(7.5) # Initialization

# We need a 1.5 ms pulse to centre the servo, or a Duty Cycle = 0.0015 * 50 = 0.075 (i.e 7.5%).
# Similarly, 1 ms pulse (- 90 degrees) requires a Duty Cycle = 0.001 * 50 = 5%; and
# 2 ms pulse (+ 90 degrees), Duty Cycle = 0.002 * 50 = 10%

try:
    while True:
        p.ChangeDutyCycle(10)
        time.sleep(1)
        p.ChangeDutyCycle(7.5)
        time.sleep(1)

except KeyboardInterrupt:
    GPIO.cleanup()