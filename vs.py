import imutils
import cv2
import time

# import the necessary packages
from imutils.video import VideoStream

vs = VideoStream(usePiCamera=True)
time.sleep(2.0)

print("[INFO] Starting Stream")

flag  = True

while True:
    if flag is True:
        vs.start()
    else:
        vs.stop()
    
    frame = vs.read()
    frame = imutils.resize(frame, width=500)

    # display the image to our screen
    cv2.imshow("Frame", frame)

    key = cv2.waitKey(1) & 0xFF

    # if the `q` key was pressed, break from the loop
    if key == ord("q"):
        break

# do a bit of cleanup
cv2.destroyAllWindows()
vs.stop()