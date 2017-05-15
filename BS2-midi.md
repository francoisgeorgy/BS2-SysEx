Work in progress...

## Ranges

    osc
        range   16'=00111111     63
                 8'=01000000     64             
                 4'=01000001     65
                 2'=01000010     66
                              
        fine    min=00011011     27
                max=11100100    228
                   
        coarse  min=00000000      0
                max=11111111    127
                
        w.form  sin=00            0
                tri=01            1
                saw=10            2
                pul=11            3
                
        pul.wi. min=0000000       0
                max=1111111     127

## Two-bytes values

Example with value = 23

    23 / 2 --> 11
    23 % 2 --> 1 --> 64

    MSB: 11 in binary = 00001011
    LSB: 64 in binary = 01000000

    shift MSB one bit to left and add LSB bit:
    
        00010110
      + 00000001
      ----------
        00010111
       
    binary 00010111 = decimal 23        

Example with value = 231                                  
    
    231 / 2 --> 115
    231 % 2 --> 1 --> 64

    MSB: 115 in binary = 01110011
    LSB:  64 in binary = 01000000

    shift MSB one bit to left and add LSB bit:
    
        11100110
      + 00000001
      ----------
        11100111
       
    binary 11100111 = decimal 231       


# Sysex

## Values across bytes

Example with Osc1 LFO1 Depth: 

    mask:   00011111 01110000

    -127:   xxx00000 x000xxxx   00000 000 = 0         0 - 127 = -127
     -56:   xxx01000 x111xxxx   01000 111 = 71       71 - 127 = -56
      -1:   xxx01111 x110xxxx   01111 110 = 126     126 - 127 = -1 
       0:   xxx10000 x000xxxx   10000 000 = 128     128 - 128 = 0
       1:   xxx10000 x001xxxx   10000 001 = 129     129 - 128 = 1 
      56:   xxx10111 x000xxxx   10111 000 = 184     184 - 128 = 56
     127:   xxx11111 x111xxxx   11111 111 = 255     255 - 128 = 127

     rule: if msb==1 substract 128 else substract 127
