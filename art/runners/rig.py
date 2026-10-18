# Run-cycle rig for the runner sprites: the painted pose is bent at the hips and shoulders with a smooth "skinning" warp.
# Coordinates are pixels of ref/runners_ref.png.
#   hip_y        about the waistband: nothing above hip_y-14 moves; a leg's bend grows from leg_r[0] to leg_r[1] px away from its hip pivot
#   split        x of the crotch: left of it = back leg, right of it = front leg
#   bl / fl      hip pivots of the back / front leg
#   ba / fa      shoulder pivot, polygon the arm lives in (generous: only the silhouette inside it moves),
#                r0..r1 = distance from the pivot over which the arm goes from fixed to fully swinging
#   arm_k        scales the arm swing (sleeves that are part of a coat bend less)
#   keep         polygons that never move (face, bottle, …) even if they fall inside an arm polygon
RIG = {
 'jogger':    {'hip_y': 280, 'split': 232, 'bl': (212, 284), 'fl': (258, 284),
               'ba': {'pivot': (196, 180), 'poly': [(188, 140), (188, 272), (70, 272), (70, 140)], 'r0': 4, 'r1': 30},
               'fa': {'pivot': (306, 210), 'poly': [(300, 194), (330, 188), (450, 170), (450, 275), (300, 275)], 'r0': 6, 'r1': 30}},
 'endurance': {'hip_y': 285, 'split': 755, 'bl': (715, 295), 'fl': (770, 290),
               'ba': {'pivot': (690, 170), 'poly': [(678, 130), (678, 290), (585, 290), (585, 130)], 'r0': 4, 'r1': 32},
               'fa': {'pivot': (814, 220), 'poly': [(833, 190), (852, 182), (950, 150), (950, 280), (833, 280)], 'r0': 6, 'r1': 30},
               'keep': [[(661, 212), (728, 212), (728, 290), (661, 290)]]},      # bottle on the belt
 'rain':      {'hip_y': 300, 'split': 1240, 'bl': (1215, 300), 'fl': (1262, 295), 'arm_k': .55,
               'ba': {'pivot': (1220, 172), 'poly': [(1212, 150), (1206, 222), (1180, 250), (1170, 300), (1090, 300), (1090, 150)], 'r0': 10, 'r1': 44},
               'fa': {'pivot': (1315, 185), 'poly': [(1330, 175), (1360, 165), (1440, 165), (1440, 300), (1335, 300), (1325, 250)], 'r0': 10, 'r1': 44}},
 'spring':    {'hip_y': 752, 'split': 245, 'bl': (225, 765), 'fl': (268, 760),
               'ba': {'pivot': (200, 650), 'poly': [(188, 610), (188, 730), (60, 730), (60, 610)], 'r0': 4, 'r1': 30},
               'fa': {'pivot': (325, 695), 'poly': [(336, 700), (338, 668), (362, 655), (362, 615), (445, 615), (445, 735), (336, 735)], 'r0': 6, 'r1': 30}},
 'headphone': {'hip_y': 805, 'split': 755, 'bl': (720, 800), 'fl': (765, 795),
               'ba': {'pivot': (688, 690), 'poly': [(679, 650), (679, 790), (560, 790), (560, 650)], 'r0': 4, 'r1': 30},
               'fa': {'pivot': (808, 725), 'poly': [(820, 712), (840, 690), (940, 680), (940, 790), (820, 790)], 'r0': 6, 'r1': 30}},
 'whale':     {'hip_y': 860, 'split': 1250, 'bl': (1195, 862), 'fl': (1280, 856), 'leg_r': (24, 60),
               'ba': {'pivot': (1140, 670), 'poly': [(1150, 640), (1155, 740), (1150, 815), (1030, 815), (1030, 640)], 'r0': 6, 'r1': 40},
               'fa': {'pivot': (1385, 705), 'poly': [(1395, 700), (1410, 688), (1500, 688), (1500, 825), (1400, 825)], 'r0': 6, 'r1': 34}},
}
FRAMES = 8
LEG_SWING = 22      # degrees each leg swings away from its painted angle (forward leg goes back, back leg comes forward)
ARM_SWING = 26
