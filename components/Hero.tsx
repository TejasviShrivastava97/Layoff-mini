import React from 'react';

const SARAH_PHOTO = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACgAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7BNz70n2o1WYGk2n0r7/kR5xa+1H1p32r3qng+lGDRyIC8LrFPF0fWqAoeUQxtJIyxog3M7kAKPUk9BRyIRpC6PrT1uiSAOT2Ar52+M37V+lfDe1aHQ9MfxLqLZCvv8q0Q+743P8ARRj3r4Z+Kv7XHxW8eNNDP4on0PT3JH2DQh9kjA9C6nzG/Fq8uvjcPRfLu/I3jSnJXP1b1/x3oPhKIya7rumaKgGc6jexW/6Owrz/AFD9r34NaW7LP8TfDu5eCIbsy/8AoANfjBqLve3Lz3Uj3M7nLSzsXcn3Zsk1SfjIyRXmSzNt+7AtUu7P2qsf2wfgzqLKsPxN8OhicATXRi/9DUV33h74heHPGCB9B8Q6Vranp/Z19FOfyRia/BCRufvE8U2CV7SZZrdmgmQ5WSIlHB9iORTjmT+1Afsl3P6CWuipIOQR1B4NNN171+MHw2/bO+LnwwaKOy8W3OsafGf+Qfrv+mwkegLnev8AwFhX2d8Fv+CkngzxtJBpvjmzPgnVHwovQ5n05z7vjfF/wIEf7VelRxtCq7PR+Zk6ckfZ5uj2NH2o+tZllewalZwXdpcQ3VpOgkingkDxyKejKwyCPcVLkivUUImRd+1n1o+1n1qiSTQCRRyIVy/9rPr+tAuj61RBY0vIo5EMtGzPpTTae1b5sfamGx9q5fblcphfZKBaYrc+w+1ecfHf4zeH/gF4Il1/Wz59zKTDp+mRuFlvZ8Z2L6KOrP0UepIBl4iMVdjUbjPif8TPDvwj8PHVvEN35KuSltaRYae6kAzsjXv7k8KOSRXznpnivxb+0rrESLHJp+ji4jW30q3Y+XksNplbjzG+vA7AV8meLvin4k+MnjaXX9fuhc3Up2QwqSsVrHniKJf4UH5k5JyTX0V8FPipcfCjwnqkhVUvZri1mgl3btnlyjPUe9fL43MKlb3YaR/M66dOMNWeu/tA/sr6z4e8HS6pcW6TW8SfvZITu8o9ifxr83/Gul/ZL2ZCACGII96/TL42ftdan4s+GFxYeXFBFdxgTNEMFx1x9M1+a3jrUFur2WQdSea833uZ3NOZNWR5xeRYOAM1Z07wpealCZ9nlQZx5knA/Cuv8C+EP+Ei1ZfOZYbSJfNmkb+7/StXxJ4gtb64W00tAtlF8qsi8ED0/wAah1Pe5UbRp3jzyOBbwTPdOsdq6SSHjGcE1jXvh+5snZHADDqDXoTuum2ol5SQ9Ca5nVbkzPvb5iT1qlJsHBI46RDG21uDTOnStu6theIdq/vgOD6+1YjDHB4PpWydzFqx7P8As9/tW+Nf2etRRNLuf7V8NO+658P3rk275PLRnrE/+0vB/iDV+rXwN+OfhL9oPwp/bXhe8Jlh2rfaZcYW6snP8MijqDzhx8rdjnIH4ebvWuu+FnxU8S/BnxnY+J/CuoNYanbHBB+aKeMn5opU6OjdwfqMEA16mGxs6HuvWJjOmpan7u/ZKT7JXn/7Mv7Q3h39pfwCmt6SFstXtdsOraOz7pLKYjjB6tG2CUfvgg4IIr177D7V9DHEqSujm5DC+xkU4Wh9K3BYe1KLD2qvboXKb7WeO1RGzPpW48A9KheAc1877VnVY4zxp4l0n4f+FdU8R67dLZaTpsDXFxMRkhR0CjuzEhQO5IFfjh+0F8ZdY+PfxFufEupl7e2XMGnaaTlLO3ByqD1Y/eZv4mJ7AY+of+Chvx9bxN4zj+Gui3OdK0KQS6q0ZOJ73Hyxkj+GJT0/vsf7or41lfDHc+D/ALprgr1nP3VsXGIzQ7lY5ozIyphs9a7nXfEBFhbIl356spLYPA+cYH6VyWnhS4OxWPA5q94mbGlo4UKVCLhTnq3/ANauNLVFPY7vVtde/wDBar52dq4xn0rxPVYpLyUhcvnsBnNd1pV1JcaJLAyv0PAFdH8KfCVle3F5NqMVwYIYnlIUcsFGeD2x1/Ctak1uRTi72Of8LaJJcf2P4dgbFxqBEl5IvaPsn0AP619OXHwN8JQ6XaxW+nqrRxgNJ/Ex7k14n8FmsLnxxJf6jfQWuCAhnkC8cnv9R+VfVk8sFxDG1pKssWB8yEEH6GvmcVUmppRZ9jgaUHC7VzxXWPgho89rIggBB5GecV8ufEbwlD4U8QXVgf8AVqQyZ64NffV2vlglhlB1zXxj+0nt/wCFghtpAeFT69zXRgpzcrNkZhSpxpXitTzKHS49gKsAw5Gexrm/E+miyvVcLtSYbx6A9xWxDORuAPuKbr8P9o6QkgA3xvnPsa9taM+alscjhd3QUbBnsParH2NhnOKQWTHowrYxO++AXxy1/wDZ5+JWneLfD7+YYj5V7YOxEV9bEjfC/wBcZB/hYKw6V+6/ww8faD8XvAWi+L/DVz9r0fVYBNCxxvjPR43HZ0YFWHqPTFfz2fYGAHzCvuD/AIJgftGS/DP4kN8NtdvAPDHiqYCyaRsLaaljCYz0WYARn/aEZ9a6KVVwduhLVz9XBZ+1OFmfStYW/tinC39q6/bMixbaOvLf2k/i/B8Bvgx4l8ZSbGvbSAQ6dA/Sa8kOyBfcbjuP+yjV6wy1+X3/AAVq+MJv/G3hH4aWcu630u3/ALZ1FFPBuJspArf7sQdv+2tefKTSNbHyPa/2hqt097d3U9ze3TvNNcSS/NLI3zMxz3JJP402+hmjfZJK+f7plz/WsSz1FVdA8Ctgf3iB/Krj3yx/MsKKSP4myf5VyAW7K0D4y7cHpuNXfENo0GhW7qCI2uI4sk/xdQOaTwbrGmW+pyf2tpr31v5JKRw3DRHfnglh24/Wuv8Ag78ZdO8KeOrC91Tw9HrNjY3UzfYHdWVy0bKhy6kZX1IqW2ndD0MDS5RazNDKpVhwy5GR+tdzo2p2+meGNbf7M+8WUqKxTIDMMA5zx1r6T0z9svRNSeT+zvhFaEKwUubi2XkjP/PGuV+N37R7eMvhlr+iL4GttEGoRJbLcxzo7IWdeyoPp1rCdWTXwlwSva54D4cvdR0Dw/FCfDK6vZ3AMzSMu7cewGOc/pXrfww1drHSL2VrWXTbCL5hbTggoxPKgHtXaWOh6Xpeg2Vs4TdDEocseM4FZHxGtxpmlWsCII1uSJNo/hX+H8+v414tSqpuyR9rQw7patnLan4x1a61HaNei0mKXASGaJWXH414b+0Lpl1BrGnXU19b6iJoCFmtk2j5W5BGTzzX0Bf/AA403xRYrcXNsZJHjQSorFd237vINeOfFr4dW/hXQ4BbGbyEuDiGZ9/lhh2PXHFdmGnFSSvqcGMpVJQlK2h4DenZKxUYxWjZWklyrQRo0skyjbGgyWJ5AAHWpp7RJ5bpBjdnarDocVFouoy6XJb3aSL5sBUq2OMo3H4V7R82xy/DjxRIMp4W1ds9D9kfH8qevws8XMox4U1Q/WDB/Ku1l/ab8Ywny0/s1VUYH+iZ4/76qjJ+0r40d9wk09W9RZjP86m8uxloc4PhH4zYjHhLU8e8X/16t2nwi8ewTRzW/hfU4JomDxyphWRgchgc8EEAj6Vuz/tJ+NrdlTz9PJKhsizH+NRH9pfxz2u7FfpZLT959A0P2v8A2ZfiRqfxa+CnhvXtetH0/wAS+R9l1e2kAyt1H8rvxnhxtkH+/wC1epiLjp+lfmF/wTA/ac1rXfjHrfgbxJepPBr9ibuwCxhAl1bjLKAOPmiL/wDfsV+oe2uiMnbUQ7aCQCdqnqx7D1r+fP8AaK+JbfF74/8AjjxaZS8Oo6xN9lJP3baNvKhA9vLjX86/cb9pLxufhv8As/8AxF8TI/lzadoN3JC2cfvWjKR/+Putfzz2ymMRrkkrgZqGB6Bb3ECPExaOVCOVB5z9av6hLp8mzy7gA4BAHOK5qyIZwPnA9SuafIW83IRiPXBrADe0W0e8vWWBkYiMHLyLGOvq5A/Ctz4Da/4O0L4iG68daTPrmg5mVrS3+8ZSpCN99enPf865zT7QXkWyVFkXurjIqnJGlnr0MSRrEmM7VGBnaaHqrDPe5PiN4LsPFmvXGkaZd2Giz3KyWdosOTHF5ajBzIxB3Bj94/0rH8d/ELTde0mNLBLmHbPE+JkCqQGB7E+lcJouj3eqLPNCIzHkIQ74wcfSpNatJtN0i5R40LeWRw2duSBke/8AjWclFKxdNXnc+jjrkLX1o+qXiWllNh43Y/K2eevrV3VI9Q1/bH/aFtqNnDloZxgsR6HHPFct8L9Sh8ReD9GvGRbiTT2R8ONwV0OMEHr9O/FeiX2reCNT055ZNCns75dvmSWv3QMEEggg8kjr6V4KguZrsfdQk501JJteQzw/fJo8ttFMzyW7LscE9GHp/ntXmXx4lXU7G6hiGFaJmX2IORXSQWklzqMktrNdLpAOEiuyGkPOQQR0AHrXF/Ey8is9OuGd8sEZiPTjirgrVFYxrTfs2mfNWmXIFvcSStjaxbGOp6VjXEvlhFU5TdkfjziprjfHvgJK4+Zvxqk0bKIlJz83y+4x1r6G58cT3MYMmQOD2quUAPoKvXC7VGR2zWfM+/hRxVIykrMZdagJZlKpt2KE5Oc1ELliMhQaux6M8iK3mKMjONtSroTjH70f98mrIOm+CXxLuPhP8XPB3jGAbG0XVYLuTb/FEHAlX6GMuPxr+iuKWK4iSWBxJBIoeN1OQykZU/iCDX82qeGZJIHPmgrtII2npiv3u/Y/8bv8RP2Xvhlrsr+ZcS6HBbzuTkmWDMD598xGi4zzL/gp94gOhfsdeKYEbY2qXun6f9Va4V2H5RGvxLg++Du24PWv1/8A+Cvt8bf9mXQrcNj7T4ptQR67be4b/Cvx+hIBHQ80mBvWup3CN8tywGOcP1qw2qXMkoBunPrk1n2jKOm33wasEpuB+XPqTWdgN/Tp5GXLSSH/AHWNU5pCdfiUlshT1+lR2VwEU/dx/vYqK2WS/wDE1vDCu6WUiJFDdWbAAz9SKQHvXhnwVqGkfCy58VrNaTWYiW7eB2ZJAHnMCqOCCcoW+leceKdVOoxqWiCFj0BzXsvjHXD8Ofha/wAPvEFhc2Wvy6fb7QpjkibZeTO2WUnA+bHY5HpXgWqXJuJCBwEwMDtmuX4pHXRSVz1H9mnxpbaR4ivtCv2Agv4t8W88CVTyPxH8q+jn0rS3heUBYyBnkg8V8T+AYDd+NYICc4RiB77TzXs0F5qUgNu19P5Y/hL9vrXm4pRjUv3R9DgakvZuPmeka94ssdJsXgidXmY4wDyBXi/juUz6Tc3l85jjkRzEmMliFJBx6ZwP1rvNG8P2qL9ouV83GSqnqx9T7V5J8X/GFrfTLY2MguJhuEsicogxjaD3rHDvmqJQNcS7U25M8hustHdOSScf0p+owFLLw/JmAmW1JIiYFhiVwN4HQ8dD2xSSRk20yggFj1boKigZBcROVLxIhCj6V9CfLMmvUJcIeMLxmp/C2gL4i8S6ZpbytCLy4SAyIu4rk4yB3PtUc43qjjncK3vhYpPxL8LAnrqMP/oVX0MZbmp8VfAf/CrtRsLKK+kv1uYDLvmgEe3BxgYJzXDPq06HjYfwr3H9rWLZ4j8Pe9nJ/wCjK8ClXgcVUW2iWXF8T3sYZFKbCMY21+x3/BKbxA2tfskWdo7bjpWuahaAZ6KzpMB/5FNfi/HIsNxG7LvVWDFfUA5xX62f8EeNS+1fA3x3bgYSLxP5ir6B7WI/+y00Ba/4LDwM/wCzj4WmHSLxTDkeu61uB/SvyERuRjp6V+0P/BWLRm1P9ke5uVXI07XtOuScdAzSRf8AtUV+LqsFIPpQwLUBkVvlJGeDU0YkDcnNMtXLMCCenpVyMEsQXwexqQHK8gwBnHrV7wrdJbeMtMlnkEcMdxE8kjDhVDqST9BmmwLLu27lKd2PaqTArrL4OeP6CkB7/wDtQfEDQ/H/AMToL/w/qMepWUdkImliDABvMc4+b2IPfrXk2nqbue4DcBWMh+igf41jq5jJfP3jWhpGox6fdzvMrOrxMigdySv+Brna5Y6HXRd3qd98J9BuI/iTapNBJEfIkkYSJjKbflbnqDngivWLy4ttLe7nmUsqvsjSNS7u3oqjkmua+FzXkWn6t4r1eQCa4jwjy8CGBR8oA7DA4H0r6h+HXhewsvA9vdPCv9rXaCWSRxlkDDIQeg5GfU18xjq16npofT4Snyw9T5Q1PTfG/jNXgi0640jTHPzmX5HkXsDkg49un1rmdW8Cw+GrGeK4ik+1sv8ArHHAHtX13rejgyONpGc9BXlnxB8LpqFr5EjfMQTG/ofSopY2aaja0fI6KmFgk5N3fmfJV7YFZ7iAD+E4zWbbYg8kyDKjcpA967jX9JkspplkXypFyp471wyjfsDep/Ovq4SU4pnydaHJKzLs6FIYh3A/rXQ/CgZ+JvhYf9RKH/0KsCdt8EDdPkx+tdB8Kefif4V/7CMH/oVb9Gcctz1D9r6MDxF4c4/5cpf/AEbXzxNjt619GftggDxH4bx1+xS/+jK+dJvkyBjmnHZElUrl6/WL/gjbCy/Bf4gy4+RvEcaj8LSPP86/J/ua/Yb/AIJE6OdP/Zg1a+Zdp1DxNdyA+qxxQR/zDVoB7R+3R4Rfxv8AsjfFHTok8yaLSG1CNQMndbOk/HviM1+BcCPcTKsXzMeRj0r+l/WNItvEGk32l3iB7O+gktJlPQxyIUb9GNfzi6t4fm+G/wAQtf8ADmpxstzo17Pp069G3RSlDjPrtz+NJgZUVjfI5EcefwqfUIb3SLeOW6hC+eCY88dDya6i28VaFBazbrK8mu2jxGxnRUjfs2AnzD2/WuV8V68+rNbhjwibQPTkmo1AWzv5nQEd/akSRjqTO/BIP9Kg0vcIwRxxjrTo2/01hnoD1/CiwGisu/IxwG4966zwZ4Lu/F+s20MULPbqV81u3LcD8f5VT+Hfg6+8beIrfTdOt/OubiQhN33EAHzO3oqjk/8A169r+Iet2fwp8LjwToTg6i5b7beqMO+c4JPZiD+ArzsTWakqNP4n+HmephKCcXVqfCjI+IPi231m/sfCWjFTp8U0cdzLDwkrbgAijuoPfufYV9h6NMIrVIgcKBtwPavg/wCHdh5vjbw9aY3PLeRySfRTu/pX3Tp67Y1wMA9a8DHU40eSnE93B1HVcpsh135QzDnmvMfEq+fOoPODkV6frf8Aq+mR615nrq7Zt5HQ1w7LQ75Hh3xT0lMXUqjDqofjvg14hcRKjSBTkqdw9uTX0V4/VZ5JVIyGt2B96+cwUE11Gc5AAFfT4CTdOzPncfH3k0Tr81hBn72WH610PwtUj4m+FgDtP9pQc/8AAhXNglYAueQc10XwuIT4l+F2z01GA/8Ajwr1eh4ktz1P9r1HHiPw6WffmzlxwBj94P8A9dfO84HWvof9rl92v+HD/wBOc3/owV88TsCK0jsQVwvzgV+63/BPLwk3g/8AY6+HMMkZjnv7WbVZARyftE7yKf8AvgpX4baJol14m1vT9GsEMt9qNxFZQIo5MkrhF/VhX9H/AIR8M2/grwlovh6zAFppFjBp8QAx8sUaxj/0GqA1yMjFfin/AMFU/hQ/w5/agufEVvD5el+MrOPVEdR8v2lAIrhfruVHP/XSv2sr5E/4Kd/Ad/jH+zde6xp1uZ/EHg2RtZtgi5eS227bqMf9swJMesIoA/EYXBB6nbTZpPMZSfSnRki2aPbkk5DDpio1t5D24pIDY09QUBJK4HanWqF9TdF+Zm4X9KjtYMRAE847V1Hw18MP4l8WWMO5Qk15FaEE/MTIeSPoob9KylJRTbKiuaSR9RfCXSbL4JfCG68YX8anV9SiC2sT/e2H/Vr/AMCI3t7AV8/3+oXGsarNqN9IZbi5kaRmbqSeSa9N+O/jaPxN4lTR7R9mkaSDDGin5WI4J/QD6L715HPc7i8vQN8qD/ZrysHTbvXn8UvwXRHt4iSSVGO0fzO/+A/k3XxRtDKfmEMpiB/vcD+W6vtG0cKig9QMZr4s/Z4sTd/FGzl7W0E0pP8AwHb/AOzV9k2snA9BXj5p/HS8l+p6WXq1J+pJrRIg+o6V5z4hX5WZh0r0HVn3xZz9K818X3Jit5DnGMkmvOtqkeg9tTyjxjJ51yVB4MTD9a+brp/LvrjtubH5V9Ba/cFC0r8bYWY1863bGS83E8liT+dfT4BWiz53Hu7iaBYk4PII9a6D4ZuV+Ivho/3dQh/9CFcuDtQHv2roPhu2z4geHCTgfb4Tz/vCvY6Hiy3PVv2r5jJrnh4nnFpL/wCjBXgEzbsYHvXuv7VMwk17QdhBxaSE8/7YrwaVgTVrYg+qP+CaPwnb4m/tU6HfzwebpfhSJ9duSR8vmJ8luv1Mrq3/AGzNftxjj1r40/4JafA1vhj8AD4s1G2MOt+NZVv/AJxhksUBW2X/AIFl5f8AtotfZh6VQBTZYknieOSNZY3Uq8bjKspGCCO4I4NOooA/DT9qP9jrWfhb+0XrHhLQLRf+Eev431nRbidwkS2TPhoy5/iicmMjrgIf4hXzVf2Z0u9uLWd18yByjFeVJHoa/oN/aN+C8Xxp+Hl7p1uIofENtFI+l3j8FJCBujLdkkCgH0IU/wANfgL4/wBMvdB8aa3YX9u9nfWl9NDNbSjbLBIjlWVh2IIrL3lLyAoQvCQP3ykHtzmui+GGur4a8dW9+zYFsxlXPTcFYKfzIrjYxmRSxx82WParVtN5Gp7uqE4475onFSi0+pUXyyTO6uL5rhmJYtJKSWbP5/1qGRvMKpxheap2kuSGPv1qcOSxbPU1mlbQ7U76ntH7MVoJPFeqz4z5dmFz7tIP/ia+pbYbVHPBr5y/Zesv3Ou3ZH35IoQfoCx/nX0OsuyMKRn0r47MZc2Jl5W/I+nwKtQQzUpxHGea8x8bT5jKD+JgOtdzrFzhST0H5V5d4qu/Pu1QdgWI/DH9aypxu0bVHZHlHxCv/s2n3rA4LARj8TXi2ladJqt4yI6qVV5CW9FBJ/lXofxd1DyltbUN8zuZGA9ulc/4F0ebUby4jt4WlmuMWsKrzlpCP6A/nX1eGXJSv3PmMVLnqW7HOSp5e0e1bvw6kH/CwPDuf+f+Hr/vCtb4u/Dy++HHig2N2uYZ4hPBIBwVPUfVTkfl61i/D1v+K78P5P3b6E/+PV3rWN0eZLc9K/aikB1nQioAJtpen++Kq/si/s9XX7Svxv0bwt5cg0KA/b9buU6Q2SMN4z2aQkRr7vnsasftE2VzrPijwzZWNtLeXtzG8EFvAhaSWRpFCooHUkkAD3r9Z/2G/wBlmH9mH4SR2uoRxSeNdbKXmuXCHd5bgfu7ZW7pECRnuxc9xVrYk+h7Kzt9Os4LS0gS2tbeNYYYIhhI0UBVVR2AAAH0qY9KKQ9KoD//2Q==";

const Hero: React.FC = () => {
  const scrollToQuiz = () => {
    const el = document.getElementById('quiz');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#fdfcfb] py-6 md:py-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-red-200 rounded-full px-3 py-1 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-red-600">Free Assessment · 10 Questions · Instant Results</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[52px] font-bold text-slate-950 leading-[1.08] tracking-tight mb-4">
              Find out how replaceable your role looks to{' '}
              <span className="text-red-600 italic">leadership.</span>
            </h1>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-5 font-medium max-w-lg">
              Most professionals assume their value is obvious to leadership.{' '}
              <span className="text-slate-800 font-semibold">It isn't.</span>{' '}
              Organizations don't cut based on performance — they cut based on replaceability. Take the free 10-question diagnostic and find out exactly where you stand.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
              <button onClick={scrollToQuiz} className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 text-white font-black text-sm rounded-full hover:bg-red-700 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-red-200">
                Take The Free Assessment
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
              <span className="text-xs text-slate-400 font-medium">No account needed</span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {['Free','No credit card','Instant results','10 minutes'].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2 h-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-3">
            {/* Score card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Sample Result</span>
                <span className="text-[9px] font-black uppercase text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full tracking-wide">Functionally Replaceable</span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif text-5xl font-black text-slate-950">17</span>
                <span className="text-lg font-bold text-slate-300">/ 40</span>
              </div>
              <p className="text-xs text-slate-500 font-medium mb-3">Your role exists. Your value to leadership doesn't — not yet.</p>
              <div className="space-y-1.5">
                {[{name:'Skill Uniqueness',score:3},{name:'Operational Visibility',score:2},{name:'Revenue Proximity',score:4},{name:'Replacement Ease',score:2},{name:'Institutional Knowledge',score:3},{name:'Cross-Team Dependency',score:3}].map((d) => (
                  <div key={d.name} className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 font-medium w-32 truncate flex-shrink-0">{d.name}</span>
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full" style={{width:`${(d.score/4)*100}%`}}/>
                    </div>
                    <span className="text-[10px] font-black text-slate-700 w-7 text-right">{d.score}/4</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-slate-950 rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 blur-2xl pointer-events-none"/>
              <p className="font-serif text-sm italic text-slate-300 leading-relaxed mb-4 relative z-10">
                "I had no idea I was in the replaceable zone. This changed how I{' '}
                <span className="text-red-400">position myself at work</span>{' '}
                — before anyone made a decision about my role."
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-red-600 flex-shrink-0">
                  <img src={SARAH_PHOTO} alt="Sarah M." className="w-full h-full object-cover" style={{objectPosition:'50% 20%'}}/>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Sarah M.</p>
                  <p className="text-[10px] text-slate-500">Senior Product Manager, Fortune 500</p>
                </div>
                <span className="ml-auto text-red-500 text-[10px] tracking-widest">★★★★★</span>
              </div>
            </div>

            {/* Proof strip */}
            <div className="flex items-center justify-center gap-2 flex-wrap py-2.5 px-4 bg-[#f5f0eb] rounded-xl border border-slate-200">
              <span className="text-red-600 text-[10px] tracking-widest">★★★★★</span>
              <span className="text-[10px] font-semibold text-slate-700">4.9 rating</span>
              <span className="text-slate-300 text-xs">·</span>
              <span className="text-[10px] font-semibold text-slate-700">500+ professionals assessed</span>
              <span className="text-slate-300 text-xs hidden md:inline">·</span>
              <span className="text-[10px] text-slate-500 italic hidden md:inline">"Finally understood why I was at risk"</span>
            </div>

            {/* Proof numbers */}
            <div className="grid grid-cols-3 gap-2">
              {[{num:'500+',label:'Professionals assessed'},{num:'10',label:'Diagnostic questions'},{num:'4',label:'Risk tiers'}].map((s) => (
                <div key={s.label} className="bg-[#f5f0eb] rounded-xl p-3 text-center">
                  <div className="font-serif text-xl font-bold text-slate-950 mb-0.5">{s.num}</div>
                  <div className="text-[9px] text-slate-500 font-medium leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
