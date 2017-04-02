# double_cc

Osc 1 fine:

    route double_cc $1 26 58 1

        double_cc from p send_control:

        1: t i i --> trigger int int --> send two ints

        int 1:  %2 
                sel 0 1 --> if 0 or 1
                    if 0 --> store 0
                    if 1 --> store 64
        int 2:  / 2

            valeur 023:

                23 / 2 --> 11
                23 % 2 --> 1 --> 64

                set 26 11       00001011
                set 58 64       01000000

                    vérification: 10110
                                      1
                                  10111 == 23
            valeur 231

                231 / 2 --> 115
                231 % 2 --> 1 --> 64

                set 26 115      01110011
                set 58 64       01000000

                    vérification: 11100110
                                         1
                                  11100111 == 231
        set 26  

----

# SYSEX

    match 240 
     0 32 41 
     0 51 
    nn nn nn nn nn nn nn nn  nn nn nn nn nn nn nn nn  nn nn nn nn nn nn nn nn  nn nn nn nn nn nn 
    nn nn nn nn nn nn nn nn  nn nn nn nn nn nn nn nn  nn nn nn nn nn nn nn nn  nn nn nn nn nn nn nn nn 
    nn nn nn nn nn nn nn nn  nn nn nn nn nn nn nn nn  nn nn nn nn nn nn nn nn  nn nn nn nn nn nn nn nn 
    nn nn nn nn nn nn nn nn  nn nn nn nn nn nn nn nn  nn nn nn nn nn nn

    (il y a 116 fois 'nn')

    trigger 1 list 0

    list:

        zl slice 9 --> two lists: list-1 with 9 elements, list-2 with the rest

        --> remove 240 0 32 41 0 51 0 0 0  

        
                 00 00 00 00 00  01 00 4c 00 00 48 04 07 >7c 36<02 20 10 00 07 30  01 00 43 40 20 00  
        23 7f 7f 7f 75 00 00 00  0f 79 7c 00 08 20 01 44  20 00 00 00 71 02 47 47  00 00 00 00 00 00 0e 20  
        00 00 0c 00 00 2b 00 00  20 28 04 08 1d 19 13 68  04 02 01 14 40 20 20 10  08 02 01 00 40 40 10 0f  
        74 02 01 00 40 36 40 00  00 03 10 00 00 00 00 00  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  
        00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  00 00 00 00 00 f7 

        reste 113 éléments

        zl slice 112 --> list-1 with 112 items, list-2 with 1 item

osc 1 fine

  
             00 00 00 00 00  01 00 4c 00 00 48 04 07 >7c 36<02 20 10 00 07 30  01 00 43 40 20 00  
    23 7f 7f 7f 75 00 00 00  0f 79 7c 00 08 20 01 44  20 00 00 00 71 02 47 47  00 00 00 00 00 00 0e 20  
    00 00 0c 00 00 2b 00 00  20 28 04 08 1d 19 13 68  04 02 01 14 40 20 20 10  08 02 01 00 40 40 10 0f  
    74 02 01 00 40 36 40 00  00 03 10 00 00 00 00 00  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  
    00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  00 00 00 00 00 f7 



