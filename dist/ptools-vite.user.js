// ==UserScript==
// @name         PtToPtools-Dev
// @namespace    http://tampermonkey.net/
// @version      2023.09.13.01
// @author       ngfchl
// @description  PT站点信息与PTools同步及种子推送到下载器
// @icon         data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAcHBwcIBwgJCQgMDAsMDBEQDg4QERoSFBIUEhonGB0YGB0YJyMqIiAiKiM+MSsrMT5IPDk8SFdOTldtaG2Pj8ABBwcHBwgHCAkJCAwMCwwMERAODhARGhIUEhQSGicYHRgYHRgnIyoiICIqIz4xKysxPkg8OTxIV05OV21obY+PwP/CABEIAlgCWAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBQMECAL/2gAIAQEAAAAA9IgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADGeHmQOir5m4yAAAAAAAAAAKsqX0RJaTq6z7t0vn+17EAAAAAAAAAAFX0l37qqDS7i6aU1Nu3AAAAAAAAAABx45dR5ZAPSMsAAAAAAAAAAqqopptarwBm5cwuf2YAAAAAAAAAK/objYAZFk3oAAAAAAAA1/fy+YZMOVBaA4yX3RIdHTEKwzYt6/YAAAAAAAHQ8sTq8+SlKy9AzzjjPnHibj07z5cfnGJs+nZAAAAAAAAAx5L6/3xnoHRVJ18FtXIFf0Ccknn1qgAAAAAABjR+Z+sEkndV9XBbtwhDfOYzIfTgAAAAAABjTRWrYwseUwiDNnuJTWnWb/ANM8opiqGbOn8o7AAAAAAAA80xgs28GKAgTNgwfqk/u/v4rqjOJm/LBAAAAAAABH6Thy97GK1otZ1d9Zg5990NSycl9T8AAAAAAAHF5O4LEvkoutfu96KlO9rb5Ab7mjkl9L5AAAAAAAB5siiwpfFa5x9+kpD2Pnyn0DDJ6Cnep4t2xkAAAAAAAjfmf5ZGEj9Noz5oWZE48syB9CzbwGOv2QAAAAAACH0VO1c9JP7W0P1YfWiPn627erSjdz6CjlK7v0oNVU07mRkAAAAAAMEe1/nTaep/piOVnY242OdN5bnO26+/svuHBUerSax+0AAAAAGIfoLG7Qxq6i5dBNLXy6FQdZMrB5MRuuOob6zO7itokNhZu5yAAAAAxrKg4+/Z26OvUesZnM6+/ipdKNxZuyr6Eh27M6Vag+7BmWQAAAAEXrTjfdgTNWUWDf2XCYWDnl0Lw2XU4H19cbuWfXeoJRY/YAAAABhqax1pJdzATZ6w7PXw2M4r3gDsW9isdQPq197x1/DTZ29zAAAAAOvXMWBtLcjtccA5Lb3GsrHUi0JO4q9h5PZ0Yi1c8E4n4AAAADBD694zltzbY6FXaksaYnFXsPTSwxiLVzu7T+g1sKsT7AAAAABp6x1yypaOKvodKrMyEVidpcgNdz9oAAAAAAAdeuOayQI1vucAAAAAAAAAAPj7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdHq5OXvfedfwANlyZAACGb/Z5AAAAACt4BljHPPLEqKLnzlld24AADFA2fMAAAAAAVvG7sY68MrS2Zblig7Gm2QABhkoCz5gAAAAACt43dhhS+3tIUFY82DGg0/PJO6OKN9DuyTnKAs+YNZHuPayH6AAAACt43dgUvtbTFBWPNhxVLHJB0tZa0rzrqe6261C39yoCz5hCaw3fY0Eitz7AAAAFbxu6zERqi1piKCsebCuIVdOzV3Ab07tOcNxc/HUutu77oCz5fRcrspqKQuKSAAAACuIB2zr/M3sz6FBWPNhQs4sI+KGsGVURckkNVRl07+gLPmFOa2yZLz9Pn5QAAABW8TtI5Nn2wUFY82OPz3b0qFMbqV0zffdMefbTmFAWfMOpXcT60gm8tAAAACt43dgAUFY82MefLRmYo+VSukry2x16At6U0BZ8w+ctPD4Da0xAAAAFbxu7AAoKx5sKe+Ljy0lJXHIqGmtjkHrS+O3QFoSmiLYkpSu5tEAAAAVxGrsACgrHmxjTUxJ5j0a831uIfVU8kWjr6xZ8oGz5hUmmsTt6CvbUmQAAAAiOnsYAKulskDT1/p+eVznlIxBtd3ppLirpnv+vAI3wd6XTXIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/EABsBAQACAwEBAAAAAAAAAAAAAAAFBgIDBAEH/9oACAECEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ5+dfBu0AAAAAM5TXs14R4AAAAEhntGGPDqAAAB7083VzeyiO1d3TojgAAAPZb1x9fumNZyrTGgAABt7c+Do6dO5Ga+vt0R/gAAAe9+UbuktGexjl55waAAAAdfbpzzjdUthsw1x7DIAAAN2mQ84+eGs+nu+a3fLH55J3DIAANfzu2zePzvG/dPz2BtF1p1T6L3HU1M37qAAHPQIe2qhuynK3KR3XxTfsH7K3GhefQZYAAY1Co4zd9okFI/S4yg+/Td9Sq/wBK7OekXLtAABC0z6J0+VSbkXNzSRp3AAAA89AAAAAAAAAAACs8nsh318W3YAg5LqAABR7v5UpuTrEvIe6uXty84t3RV5rr4urcAAUe7qnMylYl5DjqUxD3anSEfPRszVJqEuu4ABQu3zvsSsS8hVpiRre+KuWum901XkvL+gAKPeArEvIVvsmKpLV278tY6JnmlalOygACpW0K/J9uuoZ7bXXeDXa4mUr+HPb+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAQFBgMBAgf/2gAIAQMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHh9M9rq60AAAAA8jYSZDm99iAAAABkIsB75K66eyAAAB80l3QXfPB+7Odl6O22PoAAAPj89+fNHn/iy2yJgvbLagAABX5ePrqeksK/3bTs9mLTXdgAAA+Mly2tbirWLEduHT3X2gAAAM5mrKLw2k/8APpESTL2L7AAABV9czI0cm2x1ljv2n87tm7rst4AAH3u8xUN5yxXzubvOZDUarjip+t8qcTHAAHbb22X81fHyl0NZYRZlMufKzKbX6wtaAAPdRqvafFbS5gfntht353x0+k/PY3bYZOKAAC21mE4NLTwnaRBPv4AAAAAAAAAAAAAAABqZnlZA0fvjG/AC9rIoAAN9gfdlQVerpa50mQPE7hw1lFCnROQABvsC2FJVaukr5mypbrB7auss5bUWwor7CcgAH6HA9r801dJX62jrtPGuMT97eDRaRS0wABvsCGrpK/TwabXU+lwkrWRaKZUbHP1QADYY8NFVQvvafHHI6Sy+8hc1Gj6SMXwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//xAA2EAABBAECAwUIAgEDBQAAAAADAQIEBQYAEBESIAcTFDVQFRYhMDEzNEAiMkE2UWAXJICQoP/aAAgBAQABCAD/ANsPFP8Ag3HXfhUvdb9odi+HQKwaWNgn0wCzJPoGIX/gmeZTa1khkCJEtJ8OcycLGski30NCM12oTeefAhprswnd3YTYS6vLyHSwnSZMvKbuRaOsW4hmj7kqQpX/AADtOr+9rYk5uqyymVkwcuKLtIovAiMXIrZLi3lTU1QWaVNvDnL/ANQ8dWGUzbq6m3M18qVrsugfGxnu9deRg2OeQRhFYjxava9LKnnxNcFRfk4TA8FjkFF9d7Sb1QgHUgiT5sJ/PFr+0a+jcGyLbtKLJr+5gqqqqqvyMa7QITIHcWs/tRit4tgz89ySZxROz/JiTwFrpietZlhrLhr5sMoiBI8RPnYDjU880Fs71KZZ18Hu/FoqKibucjUVVFn2OPmFjKIwjiaUW2X4eG5GsqKYJQGIIu+M4hNvVUq1mI0NaxqCQQkbypZYtRWQ3IfJsLnUvMcXRh2FPs3MnTxjYNjWM9RslO2vmrHkypMszjSMUzg9UrIc6LLjygDODvg8VTWa5ms1SVtdrs5/00zYhRCYryTsyxyGjuY5iSDmMTagqSXFrGhNjRgRQCADcjGEY5j8wx/2JaKwe+M2QrClgmT1JURUVNTALGlyQLrvScnJ0dnP+m2a7Qb+2r5saNDkS5Up/PI6OyyKxT2klentHgtPj6yOgRSiejxQs1ySHwRuPdoZ58+LCleoZBdxqSvJKNMlElypEknTjmSTKKWjx5nUzcgWvs6qVBmw3csno7KpLGltQL058VrMWnIvTijHPyKq5fTrDIaWserJkrtKoQ8UDlGSlv5YiLpE4rw1SdnNhNG0053ZfT8iol9gVrVDecO0K6toDOSK3Nsk5VY/FolNk7Jo502K+JMkxn7YzcLT3MaUoyMKxhGdHaZdDKaPVh3xrAA2ldHnyoWCY3F4LoESNGYjI/p2ZmcbJrNy79nFEKXLNZH3z6gFV2TJMbZGq5yNbUtLiDHWM2bMPOlGlH3xPNi1CNhzIFlAsQoaHpXIiKq5NnsKAMkeuMUpikKXfB8mhToMeuX1C7xqquh8JV/hVrT85W7dmas9gG4b9pyN9hxVXYC1GKVcObqZMkzpJJMnpBJkRiIWOLMMlEnBs68uLBFSX0hMUBWFFh+ZCt2NiTPUDgaaOUb5UckWSeOTXZ5fDr7AkKRv2jXgps0NeDTGPI9jGZfi6zKGN4cQTHegwwcHySZwVJfZpZAryHY5rmOVrvkUeO2N4UjIlhiWQ1/FTKioqouJVBrS7ijYn09RzU0M2ST3RdqPtDsq4TQS07T6bk+N12jWU1jgwVVV2GR4iMIPFMgZeVjCqCLGjorQ6cqNaqrazPHWc2V8ns7liNjomM1Po6ixRfF09DWUwzMheoZVdJT08iSiqrlVV+Ri9vKqriMQCbZfP8Dj1gVNqbs4kzq5JEvIsdl0MkYT7QezKzMznlWVbMrJhIkrXZlYd1ZS4LulJIFOoPTswxxb2vagouP3Us7wArOzGWTg+wuezOUJXPqptbYQH8kvaiwCzsUGeWDDsdDDbGWb2aUh+KxsZwQdNPJLPoMuMYhhjzqms7arEKCYJgFeI2EYXw7q0stdp0FDVMWW3WPQvHXlbG1fXSVoWsFLHV5dCSOeyrpdZLJElYfFsy3sI8LotrMVdFcVz5cl8pZK02UMNygnIvFPgvpnw2uL8NaQQkvosXJqA7YvxT4apK9bK3gw9IiNRETb/OshuEgR+7ECVIjmQwqbIwzUaE8yqrZxAFk/7bZDAWwpLCKmsDUMewl2Jpks0ySQ5WqrVRyMk1dv4YF5DjRI0dg4m5zjAJ5CW9mWylqVdqbIzwVaI0aSCUJpgeiZJeui8YkaoySRDVBSI0oEoTSh3Xa3sxVsRxXHOWQZ5iw5smEZpQWNLMtbUxa7BsSs62xLMsN7GcGBGecsuWaZIIcu1LlBAcoJoiDKxrx7HxbGeDyEm+ASQRIG9RfSa5UYsOdGnBQoNsmufFFWIHor7KVXl5w1V1EsR/wXSeg21kOuivK4pSGK8pNV9lLrzIQFVdxLJnBuy6kSBRwkKW1si2MpxXbI5WqitpspVOUE5rmuajm6IRg2Oe68tn2UpVToqrqXWv8A4V9nEsBIQOsouedywQdMKdJgmQoKi+i2LORcluvCi8KHqGQgntIOmydh+UE1F9ByCjJYo0wShKEjhl2GQg3teymylheUE5F4p8NZJc+MMsYPTT38mtcjFhTo00KFBlFz3rlgg6o8k8UrShJlz317mIqqqqq7VtVJsSPaGTGPFK4Rtmuc1yOaUpDEcQm0CCadKGARKCvJBZEW1pZVaT+e9NkhoStDIjyAyRNKH0C0p4liPgSxq5VcXkNvTZEeCrRGvsiC6K0MLePUT5MQkoW8aXJivV4FVVXiu1XXFsZTQsssWimA1YkiMeKVwjdMWMaUcYBVleKviMAOxrItiLuzWtLKrSfz6Gtc9zWNoalldF/mmiCGUbhvusXKDieHvWWcyvMigC95BDe/0CRHDJE4RrnGzQ1caN1VNYWxltE0ABACwQ7nHAzecwJEY8YrhH6BCIYrBjp6sdbFaNPhqxq4tiJWGtKeXWk4E3RF1jlN4EHfG2KEZmOGS5xggOY0LfF6XgjZx+i5xsM1HGjyIx4xXCNrF6XnVs4/od1i4zo48MoiCI4ZNwhKcrBCqKwdbEaJu1lWRLEXdltKaXWk/nvjNMkcaSz7lCMw3DJc4uSPzGh7YvTd69Jp9IvRc42GbzGBJjHjFcI2PU62EjvCo1GoiJ02NXEsAqw0fFJKWKMOxjWNa1nolrTRbFnAljVy64vIbbGqXwgklH6CiGZjmEucXeDmPC1jVN4sySTpw4dVzjYJvMYFZQSpE9QyBjYNjWM6rCriWAlYeJEDEAwAfTpEYMkTxGucbPD5jR8ZpvElSWfS9VnjcScVCtAAMcLBC+evqKppjGMajW/+EUuwhQ1Ykj2/Ta94KbXvBTa9v02mXVQ5PgwjHtRzdpFrWxS93I94KbXvBTa94KfXvBT694KbXvBTa94KbXvBTaEVhRsIP9FdFzWtEUg1qrQFnG78K+iZ792v25Xa5Xa5XbAkyIz+cNHmDlewFiioqcUzBFW6Jw5Xa5Xa5XbcFX6crtcrtcrtUCL7GgfpL9F1M/Lk6wryl3ouefdr9Y353B1yt1yt1wTRokY7eUt1iACDeaAqKiqi4fYul16hIqIuuVuuVunNbyrqw/Ol6wdEWtk6VG8Ncrdcrf03f1XUz8uTrCvKXei5592v1jXncHpVNZPHYC6lozByqlhJHpN3fRdWH50vWDeWyepfhqZk1PEVWudnNf8A4BmtQRyISJPhTWc0boIUYmOeSVl1OBeDffqBx1GzGnOvK8JwyBoQOzv6rqZ+XJ1hXlLt51vXQE/7gub1jVVGNzqv/wAxMpppKoiNcjkRU/dzz7tfrGvO4PVlJ2mu5StwcarYyCdDvourD86XrBvLZPSYwwCeUl7ksiwe8QARzyCIMI8RvHpxWZQW0JquNHkHjFaUGOZGyyZ3B9rKyjV0V5zWtzNszK40OunTXcsZMQu+HHU2qsIP5NfaTK4qEj01vHtYqFHp39V1M/Lk6wryl22UZASDwiRXOIV6udGxm5ktR7SYhdsTikiLIjEUZ8eyI9cZgTtcjkRU/czz7tfrG/O4OuKa4primle1PitzlUOKN44rnOe5znYbXujV7jv3d9F1YfnS9YN5bJ6c1tXK9leOvgmnyxRhVtXFrQNEHSprKsdG0T7CJHOWMcZhVs1k6DHks1k9o+fYvY3H6Z1rL4OjxgxhNGHRBjKxzCZNRJWmQwKSzJWzxGRqoqIqO/qupn5cnWFeUu0urkrjWs97sHgxikkSibXFWGyhvC97HMc5rsVlrJpo/N+5nv3a/TCPG5Hs9pWOvaVjr2lY6Ic5fuMGQj0YOjxE5XsPPa1ERGt3d9F1YfnS9YN5bJ6P99WcnxVhLPrBobeSVLXd7GvY5iz4qxJsmPrBJPGNLAtrJWLXSzprFIbY1OB3Rcw0m1koG2NSfEUsRyu/qupn5cnWFeUu2ymufDtDESqtZNXI70MHMKqRwQoZIDs5xadAhOVXKIIgt5R/uZ592v1SRQyrWKA3unj/AA17p4/pMToNNxiiGvwjwokZOAOl30XVh+dL1g3lsnoKvKN67Ye1EpRL05UiJfTOGCuVJcxusqVUoZqpquajIERqbr9F0dqNMVqYU5VqXIrv6rqZ+XJ1hXlLtpkKLNC4MmwwmUNznQpNdOiKqSBGKFyOFDyq4jcEdVZZBnOaIqfu5592v1jXncH5bvourD86XrBvLZPQ74tXRhOCYonYQdH1hBdHw1kB0kXM4iYGJeaeXWRC72knNTVGdD1MIibyTtBHMZzlVyqq4gFR0oVV39V1M/Lk6wryh2l1xTZUav1l4/USuKks8KVjHEgua5jnNdiFqWZEfHN+5nv3a/WNedwflu+i6sPzpesG8tk9OWV6xLYhExi1bXWHAiKioi73tqytgkJpVVVVVxeAsKpFzkYwg3sdYQ3wph4z8KtmNV9ebfMbZoYvgRhCQ5hiHBjNiRAR2u/qupn5cnWFeUO0dikCRiPlzmOc12KT0mVAmv3yfuvbkzu8GR3tCSv7uerxNA1jfncH5a/RdT/zpmsG8tk9N3UjtIbgrJjHiHeE9LlkmAxoDizCke3i6bm0EaKkWwsZVgdTSMZoHzztknREROG2U0PjxJJj/wAxv1WZs8bGjnpl9Hy8dWObM5HsgmMU5XlLidA8CpOlaX6LqZ+XJ1hXlDtssqHxJrpQ6m2k1cjvRRc1qiInfPy6hRPhY5uxRuZBe95Hue/DqwkWE+QT9zJ6KZauiqCnxSyhWUaSX5S6l4baGlHI3GqqTVwyhP02lLCsx8DzMLswqqx34/dMXg4OL3ZVRErMKGNyEnjEMTGsZvcYxCsVcVsnELkK/wAFoLlHcuo+J3RncHVGJQ4StKfZf86kYZakkFemO1h6yCoDaPHDJE8RrHCH8yvglxq7Eq8W0Vw76AxO7MqcarDo0Z7DS0+Gk/8Ao1//xABIEAACAQICBgMNBgUDAgcBAAABAgMAEQQhEBIgMUFRIlJxEyMyQlBTYXKRkqGywTBAYoGx0QUUQ1STM2CCJKI0Y3OAkKDS4v/aAAgBAQAJPwD/AOWE/wCx5UMgXWKX6VudtLlJJ5kQEGxAHTrGT/5GqQvJBK8bMxuT4w/2KohEkQcz72NyRZanf+YDXLkli3MNzBqyToAJouKn9jo3RRGQ9rnQcpog47Yzob0Rxje7chWLeKTcioeiq9W1Ye2JCFu6J4DAf7BGcEpRvVk0SakiexhyahKJyOnAi3IPabCkKo9gineFUW0AlYmOuBvKkWNSyCRVuIWQhjTehEHgovIaB1YU+ZvLzBVUEsxNgAKkV1O5lIIOgAmSFtX1hmvx+yFnlUzN/wA8x5eezTDXm9TgtYqWFuaMVv22oRYpPxDUb2rWGfD4h8nckMEH4KNycyT9i/c5IFAR1QkSAdnGsBJJyaUhKxK4dDwhW3xNzUzPiIunG7G5dPLdlxqjdwlApGR0JVlYWII+3Z4IIWJQ8ZTy9Xyni4oddrLrsBfYNgMyTWJZArWEpXvb9hqRZEYXVlNwRpCx45R2CQcjSFZEYqyneCDYjYYwYRTYykXLHklYJJHG+WUB3NRrq8rZVgow3CRAEcfmKJnwfX4p6+yhXBjNEORl/wD5pQqqAFUCwAHlJtWYQSGNrA2bVyNTPLI29nJY0Wlwe4He0X7ipVkjcXV1NwakW/bUn/TA2mlH9X0D8Ojz8miRVUDMk2FfxCOR+CxXk+Wjd5XZ2PMsbnTcK5vI3VQbzUYSONQqqNwA2FDKwIKkXBBoH+WnBeH6p+WxIpfuKiQDgy5HymN4rfFK6e6baHbUvfVubbHn5KxbQxvBrtqgXJvWIlmbm7Fj8dneiRxr2MSTteFhpkYH0N0NiRkYbmUkEVj2lUeLKBJ8TnWAjDTPqiSNiAD2Hyj0j4MacXegoeaRpGsLC7G+0S8Dkd2h4MOY9NQ/zMBw9iVIB38jWFlhblIhX9dneRE6ja3uYlHvjaBNp1Pk/HRxuBfU3t7BSYic81QKP+6ojFDEtkjvrZnedMv8ohzEdtaSsbiw/MlP2phi4FzZkFnXtXTj54kvfUVzq37KxolTiskSMDX8PhjxMVirwAw3VvQK8KGVkP8AxNtN+5X1JvUamDIygqwzBB5bLXER7pN2kZDYxsiLLe0SKAQAbbzWC7sw4ysXqCOJeqihR8PJ/CQJ+SKBsKGTDELED1z+2wgXD4q5CjcrjfpBJJsAMySaa2MngKQYLjY+NJyFMGllYsxAtsBpcH4pHhRViUmTmp3do4aCAKdcRij44zSOnLyOxZmJuSTsAQ4nDxBAnB1XivlGG0gFlmTJxQ/mMKP6qDNfXGneMW9/dXY3jGLb3G0oMV/FcXAssQcZRBxUrSSyG7MdqeSJx4yMVPtFfxSX87N+orHzSqfFLWX3RltOySIQVZTYgiiExyjsEwHEeUR0JEKn0gixoWeKRkbtU20OFhxRFieEg2HDJhSTIech0LdmYAAcScgKXWxGBiATm6AWK1E0jncqAsT7KwRhQ+NMQnw31ikmxC59wRTn2E0CGBsQciCPsUUKgu0j3CDkK/h8jJ14++D/ALaFFlSJhLK4ysF8pDIELIeBkUWbTH/NwruJa0grBYvW5WT96i/lIzkXveTSxV1YMpGRBGYIogYiLoTp6efYahjjBNyEULc/loOQFbppncdhOX2KqrwSuj2FrneDowMMhPjFbN7wzqEoJX1muSx9AufKJtM3Qh9dqNycyT9ijSCRhG8Q8cMdw9Ok9Jo+5r2ydHTiThZZM401L2Xm9SJIJE1kdNOMhgutwqguaj1JE9jDmug5TxB19aPakXuoXW1L528nPbEQEtD1W5g1/D5mdGKvdbBSOBY5CsYsQ6kXSasQJ081IbP+RrCSwm9hrqQD2HSf5XDMAw4uwPIV/DopAN7uLyE+tUs2GPIHXX41iFxDrlB0dXV5k6JVZ4jZ1BzBoKxil7o8ZNi1hYWqNo5FNmVgVI7QaizyaCFvnbQueHms3qyaBcPOpb1V6RqxnfwRyHM1aDHICYn9Po5g8qjKSofyI5ioGcQyqZG3KqHJrnZzbci9Y1K3dS2trg5g0QsnCTcG7eXlBO6OTdxe1loh5U6cXMSLw0C4llAb1Bm3woZDYbv8g6P4RzqVlkB8KrRz7hyesJFK8TBkYjMW0rdnhbVH4lzX46PAwsBC+mSTICjd3Ps9FEgjMGodfuTdCcGx9VyOFRRxxAdFUAA2GCqgJJNXCDKNeQ03kg+K9lSB0PEeRWtKR026gomWH2stSB0bcRtZuckXmabWdzcmpCrfA+g1hV790zH3REs58ILrkVhxGViKxDWVs29XYO7cvFjwFG7MfZ6NJLx8JOI7aYMrC4IOR0/wzDgAXJtasKkEFxYKLa1uJ2LyQXzTl6tSBl48weR0t3mM9M9Zv2Gy+XjIdzUdSUDpRnyHmxyReZptZ3JLHQ/rLwNHUl8ZCdhrKguTWSDJF5DSSCMwaPoEv/6oggi4I0MAqgkk8AKJEKEiNfrsnWiPhRk5U2Y8JDvXt0N0R/qkfLtSarcRwPbXe5+oePZTd+kGZ6i7blXU3DA2NEJJwk3K37HyFIe6oLBCeiaQq6mxUjSxVlNwQbEUQr7hJwPby0t3iM5keO213yDih4dlSBl+I9Bpuip76eZ5bchRxuIqPVxR6OsN3aKNyd+mwCLcsd3oFRlHG8HSSCDkRTlnY5k6RmTmeqOJqPJB0X8YE8aGvET0ZAMti8kHtZKcOjbiPIK6sg8GQbxS3U+C43NsXkg5cV7Kl1jKvSceKuxEWRTb0nnYbErISCDbYyXe7dVatFKi2A4NbnUZR14HaW7ubCuGbHrGkzHguN60NeInoyDcdkEsxAA5k0AZpM3P00IGVhYgjI0paPjHxHZsEkMRePg1JqMyglTwJ4eQYw6NvBq8kG8jeybdwgzduQpQqIAAKtHP8G7ajKOu8HZUs7kBRWcjZyNzOhMx4LjetDWjJ6MgGWyvf5Bn+EctKBlYWIIuDQLx8Y/GXs57C5kd6B+bZtHP8GqMo67wdC5D/SB+byJZJd5TxW/Y0hV1OYOwpZ3NgBWbnORuZ0x2I8FxvFDWiJ6Mg3bC99cdAHxVOwgZGFiDQLx8Y97L2c9K9BT3oHiee1aOfj1W7ajKON4NL3iM9L8R6tbhtJmPBcbxWeGGZceMOVAAAWAHkUasgHRkG8UvRPguPBbSvfpB0QfEXZQMpFiCLg0C8fGPivZz0L3mM9EHx227Rz/Bu2omjSLOT9h20oCqAABtpmPBYbxS2VB5PQOjbwavJBx6yUvekPQB8Zh9B9ge5PfplfGFIFVBYD/YShQOAH/sjxCR619XWNr2rHw+8Kx8PvCsfD7wrHw+9WPgJ/8AUWnBB3EHTi4423lSQDWPh94Vj4feFY+H3qx8PvCsfD7wrHw+8Kx8PvCsfD7wpgyMAVYG4IP3OCclGK3AXh+dK6rrFbMAD5F6sn00A0DQOiZ425qSKsQchNu96jQ/ppQNA0p0CgaBoGvMr9z86/6155vIvVk+ldc/KaAoCgKhjccmUGhqSAX7nwahYjIimvJhyF7VO6hQFAUBXn5Pmr+4PyigKAoD7p51/wBa883kXlJ9K65+U7QsrEP7wua3NDf3Ts+fk+av7g/KNvEB3Hip0qw05/JaSaMcyv7E1iEkA32OY2XCqBckmwAqVpSOoPqaw0/sWmeH11/a9Sq6HcykEHY86/6155tOJRD1d7ewVDM/psAKws4901ie5ueEg1aNwfv3KT6V1z8p2jcJqp7BQyWG3vEbPn5Pmr+4PyjZYKiAlieAFM0eG5bi/paonkc+KoJqBV9BcVhG1B4y9IfCpGjcbmU1ZcSo/JxzGlshko4seQpyI79CIHorWHeT0jcO01CnZrisM6Drb19oqUjPNPFbtFdF1ykTqnT51/1rzzaCBMwu79QUzO7HeSSSTWFKqeLkLUCP6FcfWomjbkwtTl8MxAIPiekUbg/feUn0rrn5TRo0aYWqRZpzkLZqvaaJLEkk8STQs2III9Ubtnz8nzV/cH5RstkAGl+grwnOZ5DiaQXt0n4seZ0pq6ucqD5hTaroQVNWs65jkeI0N3mAlEH6mriCOxkb6VGERdwAtoRWVhYgi4Nf+HlOQ6h5U3eyQsg5qazB0edf9a882jf3dx7psKAZ4yFT8PM6VGvYmN+q1CzKSCORFG7R3jP/AB3fferJ9KdlYbiDY1jZ/wDI1Y2f/I1Y2f8AyNUrv6zE0hdjuUC5NLqRjMRcW7aFgNnz8nzV/cH5Rsm4eVrdm4UM9YRr+p2BcEWIrdHIVHZXiOGHY9b0iYjt4aPCm743/LdsC5KEr6y5jRvVdT3MtHnX/WvPNoU9ynYujek5kUQQcnQ7mFMYH5MMvaKlR1O4qQRowsRJNydQUiqOSiw++9WT6UmtG7EFb24Vgj/lesE3+V6wR/yP+9YEHtJNYeOP1VA2/PyfNX9wflGxwU6OLufjs/g+QVxjX4GvwD2sNHCJAPZscq3ByBXCZtHnX/WvPNoiDofgeYqUSr1HyasNIluJXL21IyNzUkGphMnKQfWh3CY7gTdT2H79yk+ldc/KftPPyfNX9wflGz4SOVPaDW+KU+xs9nd3TV9watbrIoNbwmt7vS0H+koPauR2PBRGY/kL1xoeG7t8baPOv+teebQdArBpc8V6B9q1KWt/Tf6GlIYEgg5EGm1pILWbiVP33qyfSuuflP2nn5Pmr+4PyjZHe5+mp9PGmtDMArnlyOwR3VhqxDm1HOhZ5T3Rh20LhgQfzrfGxHaOBprXJaI/qNg98m8P0JQu7sFHaaNxGgXtto86/wCteeamIJUi4yIrETBlJBBc05MkJZGvmTy2N11v26ovXgiHP2/feUn0rrn5T9p5+T5q/uD8o2bCRc435NSFHU2INIZoBkvWUVM6HkUP0vUTytwJ6K1JrNwA3KOQqO2GQ8fHI0r/ANRGMx11q6Oh7CCKiL2/qJ9RWIa/LUaoTrH+o/0FOXdjdmNJZyO9Id6g8Tp86/6155tC95nNyeT8RVirZOh3MKEkJ43Gt+lYlj2RtULax8d+HYKYszElieJNLZ8QQQOSjd99eMdzDhtckb7cgaeApGSSFJJ3dn2kmHs8jMLs3E9lMhZ5S41CSLWA2k6Y8GQZMKZJ191vjWAl/KxrBlRzZgKlEn/lpktKFVQAAMgBsd5nPjrx7RUazDmjfRrVgZfZUAiHN2H0vR7vMDccFXYkw9mdiLs3E9lMhfXLdEkjRGHRhmpF6mFif9N+HYawTH0qQawE3stWHEY5uw+lP3eQZhbWQf8A2N//xABAEQACAQMBBgIGBQsDBQAAAAABAgMABBEFBhASITFRQXETIjNAYXIUMjVCVBUWICMwNHOBocHRUFKRYHCAkrH/2gAIAQIBAT8A/wC+qIXYAVLAyYPUVCvFItToDGSBzHOgCSABkmngdVz17/6DG3C6n40QCMHpSQohJHU0QCCD0NJCiEkdfjVy2I8d/wDQIOAx4HXxowx5B4f0XjWQYNLDGv3anCiQ8J8/eRTWzBcg5NYNR22Vy3InpTrwsR2NJxhgVBoZxRIAJPQVJM7k88DtQZh0NQTF/VbruuHZUHD4+PvQBJAAoZwO+8pwz5bGD3oYxy6bp/ZNviJ9IvnvkijKk4Gce8QxiRiCcACkhRDkdadwilj4UZ5CfrYqCcseFuvgaIB6jNSKoBC8mPTFDOBnrTAEEHoakiZD05d91vEchmGMdN05cJlf50WY9ST7wCQcg1BKXBB6ip1JjOPDnugBMi48N0JVgWzk+NGWMcuIbutBF7DPluJABJOBQZW6HIqdFV/V95tUOS3h03NBGTnFKipyUY3TJwNy6GlGWA70AABQlQsVB57hIjEgHJFXC5jPw51kjocUSTzJyaLKuMkDJwPeI52jUjGe1T6gLdDLLIFTpzq2uEnjDowIPQg1PKUwFoSSA8mNXd2kMTzTNyUVpm0ENxIEkAjkz6uehp7ksuAME9ajbhdT8auJUhhkkdsBQSSabaS5S+Mqc4egSrTWLa+g4ojk4wynqNzEKCScAcya1jVHu7gCNiIoz6nxPetK2hI4Ybs/ASf5pWV1DKQQeYI9yllSGNpHbCqMk1ca1dvemeOQqF5IvhitM1qC8AR8JN27+W5mCgknAHMk1rWpm9n4UP6lOg7/ABrStautOk9U8UZ6oattSg1BfSRvz8V8RRIAyela5qhu5vRRn9Sh5fE992l6+8OIrklk6B/EVHJHKgdGDKeYINbQ6u0zG0iclAfXPc9t1vczW0gkicqwrS9chvAI5cJN28D5VtDquAbSFvnI/wDm/TdYnsWCn14j1Qnp5VaXlvdxCSJ89x4j3G5tormF4pRlWrU9GnsiWHrxHow8POgxUgg4IrS9oSvDDdn4CT/Na/qwcfRoHBBwXYbnhljVGeMqGGVJHWre5mtpBJE5VhV7tBLc2YhVOBzycjda6Td3VvJNGowvQHq3lToyMVZSGHUGrbULu1R0ilIVgQRROa0bSjfSlpARCvU9z2rVNFmsyXTLw9+3nQJByKJLEknJPMk1pGmtfXAB5Rpguav9FtbuMBVEbqMKwq8sp7OUpKuOx8DVrdz2sokhcg/0NaVqiX8Z9Qq6/WHh7iyqwIYZB5EGtV2e+tNaD4mP/FMrKSGGCOoO7RdMN7PxOP1Kc2Pc9qntLe4h9FJGCngO3lWqaJNZkumXh79vPdpthJfXKxjkg5u3YVDCkMaRxjCqMAVqWjwXylvqSjo4/vV3ZXFnIUmTHY+B8qsbOW8uFiQdep7CrW2jtoEhjGFUUQCCCMg1qmzwbimtBg9TH38qgs55rhbdUPGTgg+FWNnFZ26xIOnU9zuubWC5iMcyBgavNn7qKdVhHHGxwG7edWFlHZW6xJ16se59z1PRoL0F1wk3+7v50uk3hvBatGQx8fDHerS1itYEhjGAP6ncQCCCMg1qezokJktMAnqhrTbCOxt1jXmx5u3c77m1guojHMgYGtP02CwRxHkljksf0BBEJTKEAcjBbHvOBnPj/wBEX+uTWt3JCsSkLjma/OO7/DrQ2juR1t1q01+2ncJKpjY8georUrx7O2EqKGJYDFfnHd/h1o7SXQ626V+cd1+HWvziu/w61E5eKNyMFlB/Y61fz2aQmLGWJzmrKV5rWGR/rMoJ9zvft4fxY6wO1FFIwVBrX7CGFEuIlC5bDAVpExnsIWbmRkE+VYHatpQPRW/zGtLA+gW/L7tYHbdLNFCMySKo7k4oapYE4FylK6uoZWDA9CDncSACSeVPqVihw1wmfOobq3n9lKreR3bTeztvNq039wtvkFPIkalnYKO5NHVdPBx9IWop4ZhmORWHwOfcL37eH8WOsisjvW0F9DIiW8bBiGyxFaPC0OnwhhgnJ/53bTeyt/mNaV9n2/y7r67W0tnlbqOSjuatLO51aZ5ppCEB5n+wptnLMrhXkB7kio5brR7z0bnMZ6jwI7ikdXRXU5BAINajez3119FtyeDixy+8ah2ctgg9LI5bxxV/pMtgBcW0jFVPPuK0nUPpsHre0Tk1bTeztvNq039wtvkFTNPqmpGEvwrxEAeAAobOWQXBeQnvkVd2s+k3MbxSEqeh/saglE0Mcg+8oP7fVUaTWHRThmZAD5gV+Q9U/Er/AOzV+QdRbk1ypHzE1Z7PwxOHmf0hHMDoN+03srf5jWlfZ9v8u7aZyEtk8CWJrSo1j0+3AHVQT5nnu2kjU20MniHx/wAitPmYaLx55pG+P5Vs3GrXE0h6qvL+e6VFkjdGGQwINbPsUv5E8ChFbTeztvNq039wtvkFX+lXcFybm0ycsWwOoqLaC6hPDc2+SOv3TVvq9hdlVJ4W8A4oAAYAwP2979vD+LH+ltN7K3+Y1pX2fb/Lu2jhZ7eKUfcYg+RrRLlZrKNc+tH6rDdtJcqRFbg5OeJqsbUrpaQt1ZDn4cVaHMLa/khk5cQK8+43XlwltbSSsegOPia2chZriabwC4/ma2m9nbebVpxxp9ucZ/VirDWI7ydofRlGAJGTUkUUgw6Kw7EZrXNOt7eNJoRwZbBWtHmeawiZzkjIz+3u7G6fWBMsTGP0iHi/S161nuY4RFGWIJzWnxvFZQI4wyrgjdLEksbRuMqwwRUum6jp8xktCWX4f3FHU9bccAtyD3CGrDRp3mFxed88JOSfPdqujmd/T2+BJ4jvSX+t268DQFscgShP9RRttX1OQemBRB3GAKtLWK0hWJB06nua161nuEgEUZYgnNWEbx2cCOMMqAEVf6TdRXJubPxOcDqDQ1XWUHCbXJ7lDT22r6lIvplKqO44QKtbdLaCOFeij/yq/8QAQREAAgEEAAQDAgkJBwUAAAAAAQIDAAQFERIxQVEGECETcRQiMjM1QGFycxYgIzBUkaHB0RU2UFKBgrFCYHCAkv/aAAgBAwEBPwD/AM63NwlvE0j70KscnFdMUI4W6DvWTlMVlKQdEjQ/1rE3DLeIGY6YFad0RGd20B6kmrbLW88pjGwSdLvr/gGxvW6vIvbWsqd1OqVmRgVOmHIirnIXFzGqSEaFI7I6up0VIIq6yNxdKquQAOgrCw8d2G6ICf8AAMsLlLsu2wp+QRS5K8CFPbEgjXr56Pbytbua1ctGR6jRBqXJXkvOUgdl9KxbzvaKZQdjkT1H1ljpSdchUGbjeYrInAh5NXGmgeIaNXuZMcoSABgvyiat5fbQxya0WUHVXQtmiZJ2UL9pptcR1y6VGjSOqKNliABVnjYLdF2gZ+rGnijdSrICOxFZTGiD9LF8gnRHbyxFvBPOfa/9I2FoaHL6zI6IjM50APU0/Dxtw8tnVcTd/JbozYz2cPEJIwAQOdPx7PHvfXflieH4fDv7fO+CmznDcuAnyBIOxVne3ayxqJWKlgCD6/WMjeNaQq6qCS2vWrnJXVwhRyAp6AVa273E6RL161FirJECmPiPUmsni0gT20O+EH4y0ruh2rFT3BqzmkeUNMS8Q+Xxeop+Hjbh+Ts6qORopFdeakEVZ30N0gKtp+qnyy+QT2ZgjbZb5RHlioraW4Kz6Pp8UHqajghi+RGq+4fWHjSRSrqGB6GsrYR2rI0e+Ft+h6ViZkivELHQYFd+WVlRLKQMfVvQCgNkCsjHLE8cIXUegVA6mksLx1LCBtAb9aIoEggg6Io3E7LozMR2J8o43kYIilieQFPFNE3xkZSKxVxNPb7lHI6Dd/rOduF4Y4B6nfEfKLK3sSBRJsdNip7me4bilcntQ2DusZdfCoAXHx09CalcRxO55KCadi7sx5kk1JZXMUQleMhD18pbS4hRXkiIU8jWIlEd6gPJgVpkRwQygjsRSIiKFVQAOQAoAnehvX1i7xcN1KshYqeTa61DgbefUEUJZz1B9ayeOexn4DvR5bFYmwjueOSUEqpAAp7K0dQrQLoVY2I4kt7dNcRrK4CVIGAJeNhpiOYq1wyQzF3bjA+SKvIva2sqd1OqsLd7i9ghVeIs4GhR8N2s1h7GX5wjZapvDFxY3v6V9IpBQjr5AEkADZPKsTjVtoCZFBkcfG66HaslguctqPtMf9KZWUkMCCPQg/Uo43ldURdsx0BUGItUtBBIgYn1Zuu6yOImtCXXbxf5u3v8gCSABsn0ArEY4WkPE4/SvzPYdqzWAs8vFwy7Vwdq4502KfFj2BU62SG70ASaw+NFrF7Rx+lcfuHbyyWDSXctsAr8yvQ1JG8bFHUgj0INYHDww6u3hUOR8T00QPKe3huIzHKgZTWRw81qS6beLv1HvrBY3erqVfwwf+fPIYmC8UsPiS9GHX31c2s1rIY5U0eh6H6jbzyW8qyxnTLWOy0N2ArfEl6qevuogMCCNg1ksFviltR9pj/pWExZB+Ezpoj0RT/z5JNE7OqOGKHTAHZFT28NxGY5UDKatMFHb3ZlZ+NF9UB/n5XOUtbadIZD6nmRyX30rK6hlIKn1BFXNha3Lo8sYLKQQfLLZP4HGFj0ZW5DsO9Y7MQ3QCPpJe3Q+6iARo0qhQABoDkKymQWzgOvnH9EH86sctc2shJYujHbKTVreQXcYeJveOoq5tYbqMpKux/EVksc9lIBxBkbfCfqIJBBB0RyIrG535MV0fsEn9aVgwBB2D5ZfIi0h4UP6V/RR2HeobmeCX2sbkN1Pesdl4brSPpJe3Q+7yyF8lnAXPqx9FWpZHlkZ3O2Y7JrH5SezYD5UZ5qf5Va3kF3GHib3jqKvLuO0gaVz7h3NXE8lxM8sh2zGgSCCDoisbnSvDFdHY5B/wCtT3UMNuZy44NbBHWru6kup2lfryHYeVvcTW8gkicqRVpnbaWFjN8R1GyO/uq9u5LudpX9yjsPqeOy01mQp+PF/l7e6myloLQ3Kvsduu+1XNxJczPLIfVvIEggg6IrHZ4oBHdbIHJ6v717y4aRvReSr2Hnb3E1vIJInKkVfZCa9dWfQCjQUfmGWQxiMuSgOwu/+4cdgILuzjnaZ1Lb2Pca/Ji0/am/hR8L23S6b9wq98O3VuhkicSqPUgDRrF2SXt0YXcoApO6/Ji0/am/hQ8L2x5XL1+S9r+1NX5MWn7U38KlQJK6A7CsRv8AU4PHW9886zb0gGtGr2FILueJPko5A39TsP7uN+FL5BmBBBIPcV4dyU8zvbTMXAXak1moFgyM6p6AkED3+XhX5+5+4Ky30jdfiHzigmmbhijZz2Ubo4rIgbNrJr3UysjFWUqRzBGvIAkgAbNJi8g4DLaya91TWtzBr2sLpvuNeXhX526+6tZT6QuvxGpI5JGCopZjyAG6GJyRG/gslSwTQtwyxMh+0a+oWH93G/Cl8tV4bsJo5HuZFKgrwqDWanWfJTsp2oIXfu8vCvz9z9wVlvpG6/EPlYWb3l0kK9fVj2Aq8vbXDQpBBEDIRvX82pfE98H20cRXtoipIrPOWRkjHDMP3qexp0ZHZGGipII+0VjLC2x9n8MuQOPh4vug9BU3ii7Ln2MaKvTfqax2ZhyB+C3USBnHp2asxjvgNzpfm39Urwr87dfdWsp9IXX4jVbrb4nFCcR8TlVJPUlqbxPflthIgO2jVnd2+atZY54wGXn/AFFTxGGeWI80Yr+vxEiR4SN2G1VXJHcAmv7fxH7G3/wtDxFjE9UtHB+6oq98STzoY4I/ZA+hO9nz8K/P3P3BWW+kbr8Q+XhSMGS6fqFUCsvK0mSuSTycge4enl4WlYXc0e/Ro9/uNZKBf7d9n0eVN/7q8USMttBGOTOSf9PKJ2jkR1OipBFeJFV8fFJ1DjX+orwr87dfdWsp9IXX4jVjsxZT2i2l5pdKF2fksBUvhu0mHHa3Ogfcwq6wuRswz64kHNkNEkkknZ/X2H93G/Cl/O8K/P3P3BWW+kbr8Q+XhedUupYifnFBHvWs7avBkJG18WX46ny8L2rBprlhpdcK1kLsPlnnXkso1/srPwfCsfFPF6hCG96nysrZ7q6iiUb4iN/YK8TzqttBAD6s29fYK8K/O3X3VrJ+uRufxTWQwsllbrN7UOpYD0Heo5ZYm3HIynuDqvD+TubmV4J24wE2GrNQRwZGZEGl9Dr3/r7PIWaYQwNMBJ7Nxw+/87w9d29rLOZpAgZRqsjIkt9cSIQVZyQfKKV4ZFkQ6ZTsGospjMlAIr0Kj/b6DfcGhicCh42uwy9i41WRzkCQfBrHlrXEBoAfZ5YfNrbJ8HuQTF0bnqnx2AuW9olyqb9SFcD+BpbvC4qNvYESSHseImry7lvJ2mkPqeQ6AV4dvLa1kuDNIEDAarISJJe3Dodqzkg1jsxaS2otL4DQHDxHkRRw+Cc8S3mh2Diku8Lio3EDh3PY8RNXVy91cSTPzc71/wC1X//Z
// @match        https://ptchdbits.co/*
// @match        https://www.gamegamept.com/*
// @match        https://www.ptlsp.com/*
// @match        https://ptcafe.club/*
// @match        https://shadowflow.org/*
// @match        https://rousi.zip/*
// @match        https://www.torrentleech.org/*
// @match        https://hd-space.org/*
// @match        https://www.biho.xyz/*
// @match        https://pt.dhtclub.com/*
// @match        https://ubits.club/*
// @match        https://kufei.org/*
// @match        https://pandapt.net/*
// @match        https://www.okpt.net/*
// @match        https://share.ilolicon.com/*
// @match        https://hdfun.me/*
// @match        http://hdfun.me/*
// @match        https://wukongwendao.top/*
// @match        https://1ptba.com/*
// @match        https://52pt.site/*
// @match        https://audiences.me/*
// @match        https://byr.pt/*
// @match        https://ccfbits.org/*
// @match        https://club.hares.top/*
// @match        https://discfan.net/*
// @match        https://et8.org/*
// @match        https://filelist.io/*
// @match        https://hdatmos.club/*
// @match        https://hdchina.org/*
// @match        https://hdhome.org/*
// @match        https://hdmayi.com/*
// @match        https://hdsky.me/*
// @match        https://hdtime.org/*
// @match        https://hudbt.hust.edu.cn/*
// @match        https://iptorrents.com/t
// @match        https://xp.m-team.io/*
// @match        https://lemonhd.org/*
// @match        https://nanyangpt.com/*
// @match        https://npupt.com/*
// @match        https://ourbits.club/*
// @match        https://pt.btschool.club/*
// @match        https://pt.eastgame.org/*
// @match        https://pt.hdbd.us/*
// @match        https://pt.keepfrds.com/*
// @match        https://pterclub.com/*
// @match        https://pthome.net/*
// @match        https://springsunday.net/*
// @match        https://totheglory.im/*
// @match        https://u2.dmhy.org/*
// @match        https://www.beitai.pt/*
// @match        https://www.haidan.video/userdetails.php?id=*
// @match        https://www.haidan.video/usercp.php
// @match        https://hdarea.club/*
// @match        https://www.hddolby.com/*
// @match        https://www.htpt.cc/*
// @match        https://www.nicept.net/*
// @match        https://www.pttime.org
// @match        https://www.tjupt.org/*
// @match        https://www.torrentleech.org
// @match        https://www.carpet.net/*
// @match        https://wintersakura.net/*
// @match        https://hhanclub.top/*
// @match        https://www.hdpt.xyz/*
// @match        https://ptchina.org/*
// @match        http://www.oshen.win/*
// @match        https://www.hd.ai/*
// @match        http://ihdbits.me/*
// @match        https://zmpt.cc/*
// @match        https://leaves.red/*
// @match        https://piggo.me/*
// @match        https://pt.2xfree.org/*
// @match        https://sharkpt.net/*
// @match        https://www.dragonhd.xyz/*
// @match        https://oldtoons.world/*
// @match        http://hdmayi.com/*
// @match        https://www.3wmg.com/*
// @match        https://carpt.net/*
// @match        https://pt.0ff.cc/*
// @match        https://hdpt.xyz/*
// @match        https://azusa.wiki/*
// @match        https://pt.itzmx.com/*
// @match        https://gamegamept.cn/*
// @match        https://srvfi.top/*
// @match        https://www.icc2022.com/*
// @match        http://leaves.red/*
// @match        https://xingtan.one/*
// @match        http://uploads.ltd/*
// @match        https://cyanbug.net/*
// @match        https://ptsbao.club/*
// @match        https://greatposterwall.com/*
// @match        https://gainbound.net/*
// @match        http://hdzone.me/*
// @match        https://www.pttime.org/*
// @match        https://pt.msg.vg/*
// @match        https://pt.soulvoice.club/*
// @match        https://www.hitpt.com/*
// @match        https://hdfans.org/*
// @match        https://www.joyhd.net/*
// @match        https://hdzone.me/*
// @match        https://reelflix.xyz/*
// @match        https://pt.hdpost.top/*
// @match        https://monikadesign.uk/*
// @match        https://exoticaz.to/*
// @match        https://cinemaz.to/*
// @match        https://avistaz.to/*
// @match        https://iptorrents.com/*
// @match        https://pt.hdupt.com/*
// @match        https://www.oshen.win/*
// @match        https://hdcity.city/*
// @match        https://hdvideo.one/*
// @match        https://chdbits.co/*
// @match        https://kamept.com/*
// @match        https://ultrahd.net/*
// @match        http://pt.tu88.men/*
// @match        https://pt.hd4fans.org/*
// @match        https://hd-torrents.org/*
// @match        https://fsm.name/*
// @match        https://dajiao.cyou/*
// @match        https://hudbt.hust.edu.cn/*
// @match        https://dicmusic.com/*
// @match        https://open.cd/*
// @match        https://www.open.cd/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.prod.js
// @grant        GM_addStyle
// @grant        GM_cookie
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const e=document.createElement("style");e.textContent=t,document.head.append(e)})(' #app{padding:2rem;text-align:center;position:fixed;top:0;z-index:9999;width:100px;margin-right:0;margin-left:0;margin-top:240px;float:left;opacity:.8;font-size:12px;background-color:#fff}html,body{width:100%;height:100%}input::-ms-clear,input::-ms-reveal{display:none}*,*:before,*:after{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:rgba(0,0,0,0)}@-ms-viewport{width:device-width}body{margin:0}[tabindex="-1"]:focus{outline:none}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5em;font-weight:500}p{margin-top:0;margin-bottom:1em}abbr[title],abbr[data-original-title]{-webkit-text-decoration:underline dotted;text-decoration:underline;text-decoration:underline dotted;border-bottom:0;cursor:help}address{margin-bottom:1em;font-style:normal;line-height:inherit}input[type=text],input[type=password],input[type=number],textarea{-webkit-appearance:none}ol,ul,dl{margin-top:0;margin-bottom:1em}ol ol,ul ul,ol ul,ul ol{margin-bottom:0}dt{font-weight:500}dd{margin-bottom:.5em;margin-left:0}blockquote{margin:0 0 1em}dfn{font-style:italic}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}pre,code,kbd,samp{font-size:1em;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace}pre{margin-top:0;margin-bottom:1em;overflow:auto}figure{margin:0 0 1em}img{vertical-align:middle;border-style:none}a,area,button,[role=button],input:not([type=range]),label,select,summary,textarea{touch-action:manipulation}table{border-collapse:collapse}caption{padding-top:.75em;padding-bottom:.3em;text-align:left;caption-side:bottom}input,button,select,optgroup,textarea{margin:0;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}button,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{padding:0;border-style:none}input[type=radio],input[type=checkbox]{box-sizing:border-box;padding:0}input[type=date],input[type=time],input[type=datetime-local],input[type=month]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;margin:0;padding:0;border:0}legend{display:block;width:100%;max-width:100%;margin-bottom:.5em;padding:0;color:inherit;font-size:1.5em;line-height:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item}template{display:none}[hidden]{display:none!important}mark{padding:.2em;background-color:#feffe6}.wrap[data-v-423688fb]{position:fixed;top:0;z-index:99999;width:110px;margin-right:0;margin-left:0;margin-top:240px;float:left;opacity:.8;font-size:12px;background-color:#fff}.wrap[data-v-423688fb]:hover{opacity:1}.wrap>img[data-v-423688fb],.image[data-v-423688fb]{border-radius:2px;width:100%} ');

(function (vue) {
  'use strict';

  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var require_main_001 = __commonJS({
    "main-dfa65faf.js"(exports, module) {
      function _typeof$1(o2) {
        "@babel/helpers - typeof";
        return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
          return typeof o3;
        } : function(o3) {
          return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
        }, _typeof$1(o2);
      }
      function _toPrimitive(input, hint) {
        if (_typeof$1(input) !== "object" || input === null)
          return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== void 0) {
          var res = prim.call(input, hint || "default");
          if (_typeof$1(res) !== "object")
            return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key2 = _toPrimitive(arg, "string");
        return _typeof$1(key2) === "symbol" ? key2 : String(key2);
      }
      function _defineProperty$q(obj, key2, value) {
        key2 = _toPropertyKey(key2);
        if (key2 in obj) {
          Object.defineProperty(obj, key2, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      function ownKeys$1(e2, r2) {
        var t2 = Object.keys(e2);
        if (Object.getOwnPropertySymbols) {
          var o2 = Object.getOwnPropertySymbols(e2);
          r2 && (o2 = o2.filter(function(r3) {
            return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
          })), t2.push.apply(t2, o2);
        }
        return t2;
      }
      function _objectSpread2$1(e2) {
        for (var r2 = 1; r2 < arguments.length; r2++) {
          var t2 = null != arguments[r2] ? arguments[r2] : {};
          r2 % 2 ? ownKeys$1(Object(t2), true).forEach(function(r3) {
            _defineProperty$q(e2, r3, t2[r3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$1(Object(t2)).forEach(function(r3) {
            Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
          });
        }
        return e2;
      }
      function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function(target) {
          for (var i2 = 1; i2 < arguments.length; i2++) {
            var source = arguments[i2];
            for (var key2 in source) {
              if (Object.prototype.hasOwnProperty.call(source, key2)) {
                target[key2] = source[key2];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      const isFunction$1 = (val) => typeof val === "function";
      const isArray$2 = Array.isArray;
      const isString = (val) => typeof val === "string";
      const isObject$1 = (val) => val !== null && typeof val === "object";
      const onRE = /^on[^a-z]/;
      const isOn = (key2) => onRE.test(key2);
      const cacheStringFunction = (fn) => {
        const cache = /* @__PURE__ */ Object.create(null);
        return (str) => {
          const hit = cache[str];
          return hit || (cache[str] = fn(str));
        };
      };
      const camelizeRE = /-(\w)/g;
      const camelize = cacheStringFunction((str) => {
        return str.replace(camelizeRE, (_2, c2) => c2 ? c2.toUpperCase() : "");
      });
      const hyphenateRE = /\B([A-Z])/g;
      const hyphenate = cacheStringFunction((str) => {
        return str.replace(hyphenateRE, "-$1").toLowerCase();
      });
      const hasOwnProperty$a = Object.prototype.hasOwnProperty;
      const hasOwn = (val, key2) => hasOwnProperty$a.call(val, key2);
      function resolvePropValue(options, props, key2, value) {
        const opt = options[key2];
        if (opt != null) {
          const hasDefault = hasOwn(opt, "default");
          if (hasDefault && value === void 0) {
            const defaultValue = opt.default;
            value = opt.type !== Function && isFunction$1(defaultValue) ? defaultValue() : defaultValue;
          }
          if (opt.type === Boolean) {
            if (!hasOwn(props, key2) && !hasDefault) {
              value = false;
            } else if (value === "") {
              value = true;
            }
          }
        }
        return value;
      }
      function getDataAndAriaProps(props) {
        return Object.keys(props).reduce((memo, key2) => {
          if (key2.startsWith("data-") || key2.startsWith("aria-")) {
            memo[key2] = props[key2];
          }
          return memo;
        }, {});
      }
      function renderHelper(v2) {
        let props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        let defaultV = arguments.length > 2 ? arguments[2] : void 0;
        if (typeof v2 === "function") {
          return v2(props);
        }
        return v2 !== null && v2 !== void 0 ? v2 : defaultV;
      }
      function wrapPromiseFn(openFn) {
        let closeFn;
        const closePromise = new Promise((resolve) => {
          closeFn = openFn(() => {
            resolve(true);
          });
        });
        const result = () => {
          closeFn === null || closeFn === void 0 ? void 0 : closeFn();
        };
        result.then = (filled, rejected) => closePromise.then(filled, rejected);
        result.promise = closePromise;
        return result;
      }
      function classNames() {
        const classes = [];
        for (let i2 = 0; i2 < arguments.length; i2++) {
          const value = i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2];
          if (!value)
            continue;
          if (isString(value)) {
            classes.push(value);
          } else if (isArray$2(value)) {
            for (let i3 = 0; i3 < value.length; i3++) {
              const inner = classNames(value[i3]);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (isObject$1(value)) {
            for (const name in value) {
              if (value[name]) {
                classes.push(name);
              }
            }
          }
        }
        return classes.join(" ");
      }
      var MapShim = function() {
        if (typeof Map !== "undefined") {
          return Map;
        }
        function getIndex(arr, key2) {
          var result = -1;
          arr.some(function(entry, index2) {
            if (entry[0] === key2) {
              result = index2;
              return true;
            }
            return false;
          });
          return result;
        }
        return (
          /** @class */
          function() {
            function class_1() {
              this.__entries__ = [];
            }
            Object.defineProperty(class_1.prototype, "size", {
              /**
               * @returns {boolean}
               */
              get: function() {
                return this.__entries__.length;
              },
              enumerable: true,
              configurable: true
            });
            class_1.prototype.get = function(key2) {
              var index2 = getIndex(this.__entries__, key2);
              var entry = this.__entries__[index2];
              return entry && entry[1];
            };
            class_1.prototype.set = function(key2, value) {
              var index2 = getIndex(this.__entries__, key2);
              if (~index2) {
                this.__entries__[index2][1] = value;
              } else {
                this.__entries__.push([key2, value]);
              }
            };
            class_1.prototype.delete = function(key2) {
              var entries = this.__entries__;
              var index2 = getIndex(entries, key2);
              if (~index2) {
                entries.splice(index2, 1);
              }
            };
            class_1.prototype.has = function(key2) {
              return !!~getIndex(this.__entries__, key2);
            };
            class_1.prototype.clear = function() {
              this.__entries__.splice(0);
            };
            class_1.prototype.forEach = function(callback, ctx) {
              if (ctx === void 0) {
                ctx = null;
              }
              for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
              }
            };
            return class_1;
          }()
        );
      }();
      var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
      var global$1 = function() {
        if (typeof global !== "undefined" && global.Math === Math) {
          return global;
        }
        if (typeof self !== "undefined" && self.Math === Math) {
          return self;
        }
        if (typeof window !== "undefined" && window.Math === Math) {
          return window;
        }
        return Function("return this")();
      }();
      var requestAnimationFrame$1 = function() {
        if (typeof requestAnimationFrame === "function") {
          return requestAnimationFrame.bind(global$1);
        }
        return function(callback) {
          return setTimeout(function() {
            return callback(Date.now());
          }, 1e3 / 60);
        };
      }();
      var trailingTimeout = 2;
      function throttle(callback, delay) {
        var leadingCall = false, trailingCall = false, lastCallTime = 0;
        function resolvePending() {
          if (leadingCall) {
            leadingCall = false;
            callback();
          }
          if (trailingCall) {
            proxy();
          }
        }
        function timeoutCallback() {
          requestAnimationFrame$1(resolvePending);
        }
        function proxy() {
          var timeStamp = Date.now();
          if (leadingCall) {
            if (timeStamp - lastCallTime < trailingTimeout) {
              return;
            }
            trailingCall = true;
          } else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
          }
          lastCallTime = timeStamp;
        }
        return proxy;
      }
      var REFRESH_DELAY = 20;
      var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
      var mutationObserverSupported = typeof MutationObserver !== "undefined";
      var ResizeObserverController = (
        /** @class */
        function() {
          function ResizeObserverController2() {
            this.connected_ = false;
            this.mutationEventsAdded_ = false;
            this.mutationsObserver_ = null;
            this.observers_ = [];
            this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
            this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
          }
          ResizeObserverController2.prototype.addObserver = function(observer) {
            if (!~this.observers_.indexOf(observer)) {
              this.observers_.push(observer);
            }
            if (!this.connected_) {
              this.connect_();
            }
          };
          ResizeObserverController2.prototype.removeObserver = function(observer) {
            var observers2 = this.observers_;
            var index2 = observers2.indexOf(observer);
            if (~index2) {
              observers2.splice(index2, 1);
            }
            if (!observers2.length && this.connected_) {
              this.disconnect_();
            }
          };
          ResizeObserverController2.prototype.refresh = function() {
            var changesDetected = this.updateObservers_();
            if (changesDetected) {
              this.refresh();
            }
          };
          ResizeObserverController2.prototype.updateObservers_ = function() {
            var activeObservers = this.observers_.filter(function(observer) {
              return observer.gatherActive(), observer.hasActive();
            });
            activeObservers.forEach(function(observer) {
              return observer.broadcastActive();
            });
            return activeObservers.length > 0;
          };
          ResizeObserverController2.prototype.connect_ = function() {
            if (!isBrowser || this.connected_) {
              return;
            }
            document.addEventListener("transitionend", this.onTransitionEnd_);
            window.addEventListener("resize", this.refresh);
            if (mutationObserverSupported) {
              this.mutationsObserver_ = new MutationObserver(this.refresh);
              this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
              });
            } else {
              document.addEventListener("DOMSubtreeModified", this.refresh);
              this.mutationEventsAdded_ = true;
            }
            this.connected_ = true;
          };
          ResizeObserverController2.prototype.disconnect_ = function() {
            if (!isBrowser || !this.connected_) {
              return;
            }
            document.removeEventListener("transitionend", this.onTransitionEnd_);
            window.removeEventListener("resize", this.refresh);
            if (this.mutationsObserver_) {
              this.mutationsObserver_.disconnect();
            }
            if (this.mutationEventsAdded_) {
              document.removeEventListener("DOMSubtreeModified", this.refresh);
            }
            this.mutationsObserver_ = null;
            this.mutationEventsAdded_ = false;
            this.connected_ = false;
          };
          ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
            var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
            var isReflowProperty = transitionKeys.some(function(key2) {
              return !!~propertyName.indexOf(key2);
            });
            if (isReflowProperty) {
              this.refresh();
            }
          };
          ResizeObserverController2.getInstance = function() {
            if (!this.instance_) {
              this.instance_ = new ResizeObserverController2();
            }
            return this.instance_;
          };
          ResizeObserverController2.instance_ = null;
          return ResizeObserverController2;
        }()
      );
      var defineConfigurable = function(target, props) {
        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
          var key2 = _a[_i];
          Object.defineProperty(target, key2, {
            value: props[key2],
            enumerable: false,
            writable: false,
            configurable: true
          });
        }
        return target;
      };
      var getWindowOf = function(target) {
        var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
        return ownerGlobal || global$1;
      };
      var emptyRect = createRectInit(0, 0, 0, 0);
      function toFloat(value) {
        return parseFloat(value) || 0;
      }
      function getBordersSize(styles) {
        var positions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          positions[_i - 1] = arguments[_i];
        }
        return positions.reduce(function(size, position2) {
          var value = styles["border-" + position2 + "-width"];
          return size + toFloat(value);
        }, 0);
      }
      function getPaddings(styles) {
        var positions = ["top", "right", "bottom", "left"];
        var paddings = {};
        for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
          var position2 = positions_1[_i];
          var value = styles["padding-" + position2];
          paddings[position2] = toFloat(value);
        }
        return paddings;
      }
      function getSVGContentRect(target) {
        var bbox = target.getBBox();
        return createRectInit(0, 0, bbox.width, bbox.height);
      }
      function getHTMLElementContentRect(target) {
        var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
        if (!clientWidth && !clientHeight) {
          return emptyRect;
        }
        var styles = getWindowOf(target).getComputedStyle(target);
        var paddings = getPaddings(styles);
        var horizPad = paddings.left + paddings.right;
        var vertPad = paddings.top + paddings.bottom;
        var width = toFloat(styles.width), height = toFloat(styles.height);
        if (styles.boxSizing === "border-box") {
          if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, "left", "right") + horizPad;
          }
          if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, "top", "bottom") + vertPad;
          }
        }
        if (!isDocumentElement(target)) {
          var vertScrollbar = Math.round(width + horizPad) - clientWidth;
          var horizScrollbar = Math.round(height + vertPad) - clientHeight;
          if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
          }
          if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
          }
        }
        return createRectInit(paddings.left, paddings.top, width, height);
      }
      var isSVGGraphicsElement = function() {
        if (typeof SVGGraphicsElement !== "undefined") {
          return function(target) {
            return target instanceof getWindowOf(target).SVGGraphicsElement;
          };
        }
        return function(target) {
          return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
        };
      }();
      function isDocumentElement(target) {
        return target === getWindowOf(target).document.documentElement;
      }
      function getContentRect(target) {
        if (!isBrowser) {
          return emptyRect;
        }
        if (isSVGGraphicsElement(target)) {
          return getSVGContentRect(target);
        }
        return getHTMLElementContentRect(target);
      }
      function createReadOnlyRect(_a) {
        var x2 = _a.x, y2 = _a.y, width = _a.width, height = _a.height;
        var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
        var rect = Object.create(Constr.prototype);
        defineConfigurable(rect, {
          x: x2,
          y: y2,
          width,
          height,
          top: y2,
          right: x2 + width,
          bottom: height + y2,
          left: x2
        });
        return rect;
      }
      function createRectInit(x2, y2, width, height) {
        return { x: x2, y: y2, width, height };
      }
      var ResizeObservation = (
        /** @class */
        function() {
          function ResizeObservation2(target) {
            this.broadcastWidth = 0;
            this.broadcastHeight = 0;
            this.contentRect_ = createRectInit(0, 0, 0, 0);
            this.target = target;
          }
          ResizeObservation2.prototype.isActive = function() {
            var rect = getContentRect(this.target);
            this.contentRect_ = rect;
            return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
          };
          ResizeObservation2.prototype.broadcastRect = function() {
            var rect = this.contentRect_;
            this.broadcastWidth = rect.width;
            this.broadcastHeight = rect.height;
            return rect;
          };
          return ResizeObservation2;
        }()
      );
      var ResizeObserverEntry = (
        /** @class */
        function() {
          function ResizeObserverEntry2(target, rectInit) {
            var contentRect = createReadOnlyRect(rectInit);
            defineConfigurable(this, { target, contentRect });
          }
          return ResizeObserverEntry2;
        }()
      );
      var ResizeObserverSPI = (
        /** @class */
        function() {
          function ResizeObserverSPI2(callback, controller, callbackCtx) {
            this.activeObservations_ = [];
            this.observations_ = new MapShim();
            if (typeof callback !== "function") {
              throw new TypeError("The callback provided as parameter 1 is not a function.");
            }
            this.callback_ = callback;
            this.controller_ = controller;
            this.callbackCtx_ = callbackCtx;
          }
          ResizeObserverSPI2.prototype.observe = function(target) {
            if (!arguments.length) {
              throw new TypeError("1 argument required, but only 0 present.");
            }
            if (typeof Element === "undefined" || !(Element instanceof Object)) {
              return;
            }
            if (!(target instanceof getWindowOf(target).Element)) {
              throw new TypeError('parameter 1 is not of type "Element".');
            }
            var observations = this.observations_;
            if (observations.has(target)) {
              return;
            }
            observations.set(target, new ResizeObservation(target));
            this.controller_.addObserver(this);
            this.controller_.refresh();
          };
          ResizeObserverSPI2.prototype.unobserve = function(target) {
            if (!arguments.length) {
              throw new TypeError("1 argument required, but only 0 present.");
            }
            if (typeof Element === "undefined" || !(Element instanceof Object)) {
              return;
            }
            if (!(target instanceof getWindowOf(target).Element)) {
              throw new TypeError('parameter 1 is not of type "Element".');
            }
            var observations = this.observations_;
            if (!observations.has(target)) {
              return;
            }
            observations.delete(target);
            if (!observations.size) {
              this.controller_.removeObserver(this);
            }
          };
          ResizeObserverSPI2.prototype.disconnect = function() {
            this.clearActive();
            this.observations_.clear();
            this.controller_.removeObserver(this);
          };
          ResizeObserverSPI2.prototype.gatherActive = function() {
            var _this = this;
            this.clearActive();
            this.observations_.forEach(function(observation) {
              if (observation.isActive()) {
                _this.activeObservations_.push(observation);
              }
            });
          };
          ResizeObserverSPI2.prototype.broadcastActive = function() {
            if (!this.hasActive()) {
              return;
            }
            var ctx = this.callbackCtx_;
            var entries = this.activeObservations_.map(function(observation) {
              return new ResizeObserverEntry(observation.target, observation.broadcastRect());
            });
            this.callback_.call(ctx, entries, ctx);
            this.clearActive();
          };
          ResizeObserverSPI2.prototype.clearActive = function() {
            this.activeObservations_.splice(0);
          };
          ResizeObserverSPI2.prototype.hasActive = function() {
            return this.activeObservations_.length > 0;
          };
          return ResizeObserverSPI2;
        }()
      );
      var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
      var ResizeObserver$2 = (
        /** @class */
        function() {
          function ResizeObserver2(callback) {
            if (!(this instanceof ResizeObserver2)) {
              throw new TypeError("Cannot call a class as a function.");
            }
            if (!arguments.length) {
              throw new TypeError("1 argument required, but only 0 present.");
            }
            var controller = ResizeObserverController.getInstance();
            var observer = new ResizeObserverSPI(callback, controller, this);
            observers.set(this, observer);
          }
          return ResizeObserver2;
        }()
      );
      [
        "observe",
        "unobserve",
        "disconnect"
      ].forEach(function(method) {
        ResizeObserver$2.prototype[method] = function() {
          var _a;
          return (_a = observers.get(this))[method].apply(_a, arguments);
        };
      });
      var index = function() {
        if (typeof global$1.ResizeObserver !== "undefined") {
          return global$1.ResizeObserver;
        }
        return ResizeObserver$2;
      }();
      const isValid = (value) => {
        return value !== void 0 && value !== null && value !== "";
      };
      const isValid$1 = isValid;
      const initDefaultProps = (types, defaultProps) => {
        const propTypes = _extends({}, types);
        Object.keys(defaultProps).forEach((k2) => {
          const prop = propTypes[k2];
          if (prop) {
            if (prop.type || prop.default) {
              prop.default = defaultProps[k2];
            } else if (prop.def) {
              prop.def(defaultProps[k2]);
            } else {
              propTypes[k2] = {
                type: prop,
                default: defaultProps[k2]
              };
            }
          } else {
            throw new Error(`not have ${k2} prop`);
          }
        });
        return propTypes;
      };
      const initDefaultProps$1 = initDefaultProps;
      const splitAttrs = (attrs) => {
        const allAttrs = Object.keys(attrs);
        const eventAttrs = {};
        const onEvents = {};
        const extraAttrs = {};
        for (let i2 = 0, l2 = allAttrs.length; i2 < l2; i2++) {
          const key2 = allAttrs[i2];
          if (isOn(key2)) {
            eventAttrs[key2[2].toLowerCase() + key2.slice(3)] = attrs[key2];
            onEvents[key2] = attrs[key2];
          } else {
            extraAttrs[key2] = attrs[key2];
          }
        }
        return {
          onEvents,
          events: eventAttrs,
          extraAttrs
        };
      };
      const parseStyleText = function() {
        let cssText = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        let camel = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        const res = {};
        const listDelimiter = /;(?![^(]*\))/g;
        const propertyDelimiter = /:(.+)/;
        if (typeof cssText === "object")
          return cssText;
        cssText.split(listDelimiter).forEach(function(item) {
          if (item) {
            const tmp = item.split(propertyDelimiter);
            if (tmp.length > 1) {
              const k2 = camel ? camelize(tmp[0].trim()) : tmp[0].trim();
              res[k2] = tmp[1].trim();
            }
          }
        });
        return res;
      };
      const hasProp = (instance, prop) => {
        return instance[prop] !== void 0;
      };
      const skipFlattenKey = Symbol("skipFlatten");
      const flattenChildren = function() {
        let children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        let filterEmpty2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        const temp = Array.isArray(children) ? children : [children];
        const res = [];
        temp.forEach((child) => {
          if (Array.isArray(child)) {
            res.push(...flattenChildren(child, filterEmpty2));
          } else if (child && child.type === vue.Fragment) {
            if (child.key === skipFlattenKey) {
              res.push(child);
            } else {
              res.push(...flattenChildren(child.children, filterEmpty2));
            }
          } else if (child && vue.isVNode(child)) {
            if (filterEmpty2 && !isEmptyElement(child)) {
              res.push(child);
            } else if (!filterEmpty2) {
              res.push(child);
            }
          } else if (isValid$1(child)) {
            res.push(child);
          }
        });
        return res;
      };
      const getSlot = function(self2) {
        let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
        let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (vue.isVNode(self2)) {
          if (self2.type === vue.Fragment) {
            return name === "default" ? flattenChildren(self2.children) : [];
          } else if (self2.children && self2.children[name]) {
            return flattenChildren(self2.children[name](options));
          } else {
            return [];
          }
        } else {
          const res = self2.$slots[name] && self2.$slots[name](options);
          return flattenChildren(res);
        }
      };
      const findDOMNode = (instance) => {
        var _a;
        let node2 = ((_a = instance === null || instance === void 0 ? void 0 : instance.vnode) === null || _a === void 0 ? void 0 : _a.el) || instance && (instance.$el || instance);
        while (node2 && !node2.tagName) {
          node2 = node2.nextSibling;
        }
        return node2;
      };
      const getOptionProps = (instance) => {
        const res = {};
        if (instance.$ && instance.$.vnode) {
          const props = instance.$.vnode.props || {};
          Object.keys(instance.$props).forEach((k2) => {
            const v2 = instance.$props[k2];
            const hyphenateKey = hyphenate(k2);
            if (v2 !== void 0 || hyphenateKey in props) {
              res[k2] = v2;
            }
          });
        } else if (vue.isVNode(instance) && typeof instance.type === "object") {
          const originProps = instance.props || {};
          const props = {};
          Object.keys(originProps).forEach((key2) => {
            props[camelize(key2)] = originProps[key2];
          });
          const options = instance.type.props || {};
          Object.keys(options).forEach((k2) => {
            const v2 = resolvePropValue(options, props, k2, props[k2]);
            if (v2 !== void 0 || k2 in props) {
              res[k2] = v2;
            }
          });
        }
        return res;
      };
      const getComponent = function(instance) {
        let prop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
        let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : instance;
        let execute = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
        let com = void 0;
        if (instance.$) {
          const temp = instance[prop];
          if (temp !== void 0) {
            return typeof temp === "function" && execute ? temp(options) : temp;
          } else {
            com = instance.$slots[prop];
            com = execute && com ? com(options) : com;
          }
        } else if (vue.isVNode(instance)) {
          const temp = instance.props && instance.props[prop];
          if (temp !== void 0 && instance.props !== null) {
            return typeof temp === "function" && execute ? temp(options) : temp;
          } else if (instance.type === vue.Fragment) {
            com = instance.children;
          } else if (instance.children && instance.children[prop]) {
            com = instance.children[prop];
            com = execute && com ? com(options) : com;
          }
        }
        if (Array.isArray(com)) {
          com = flattenChildren(com);
          com = com.length === 1 ? com[0] : com;
          com = com.length === 0 ? void 0 : com;
        }
        return com;
      };
      function getEvents() {
        let ele = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        let on = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        let props = {};
        if (ele.$) {
          props = _extends(_extends({}, props), ele.$attrs);
        } else {
          props = _extends(_extends({}, props), ele.props);
        }
        return splitAttrs(props)[on ? "onEvents" : "events"];
      }
      function getStyle$1(ele, camel) {
        const props = (vue.isVNode(ele) ? ele.props : ele.$attrs) || {};
        let style2 = props.style || {};
        if (typeof style2 === "string") {
          style2 = parseStyleText(style2, camel);
        } else if (camel && style2) {
          const res = {};
          Object.keys(style2).forEach((k2) => res[camelize(k2)] = style2[k2]);
          return res;
        }
        return style2;
      }
      function isFragment(c2) {
        return c2.length === 1 && c2[0].type === vue.Fragment;
      }
      function isEmptyElement(c2) {
        return c2 && (c2.type === vue.Comment || c2.type === vue.Fragment && c2.children.length === 0 || c2.type === vue.Text && c2.children.trim() === "");
      }
      function filterEmpty() {
        let children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        const res = [];
        children.forEach((child) => {
          if (Array.isArray(child)) {
            res.push(...child);
          } else if ((child === null || child === void 0 ? void 0 : child.type) === vue.Fragment) {
            res.push(...filterEmpty(child.children));
          } else {
            res.push(child);
          }
        });
        return res.filter((c2) => !isEmptyElement(c2));
      }
      function isValidElement(element) {
        if (Array.isArray(element) && element.length === 1) {
          element = element[0];
        }
        return element && element.__v_isVNode && typeof element.type !== "symbol";
      }
      function getPropsSlot(slots, props) {
        let prop = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
        var _a, _b;
        return (_a = props[prop]) !== null && _a !== void 0 ? _a : (_b = slots[prop]) === null || _b === void 0 ? void 0 : _b.call(slots);
      }
      const ResizeObserver$1 = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "ResizeObserver",
        props: {
          disabled: Boolean,
          onResize: Function
        },
        emits: ["resize"],
        setup(props, _ref) {
          let {
            slots
          } = _ref;
          const state = vue.reactive({
            width: 0,
            height: 0,
            offsetHeight: 0,
            offsetWidth: 0
          });
          let currentElement = null;
          let resizeObserver = null;
          const destroyObserver = () => {
            if (resizeObserver) {
              resizeObserver.disconnect();
              resizeObserver = null;
            }
          };
          const onResize = (entries) => {
            const {
              onResize: onResize2
            } = props;
            const target = entries[0].target;
            const {
              width,
              height
            } = target.getBoundingClientRect();
            const {
              offsetWidth,
              offsetHeight
            } = target;
            const fixedWidth = Math.floor(width);
            const fixedHeight = Math.floor(height);
            if (state.width !== fixedWidth || state.height !== fixedHeight || state.offsetWidth !== offsetWidth || state.offsetHeight !== offsetHeight) {
              const size = {
                width: fixedWidth,
                height: fixedHeight,
                offsetWidth,
                offsetHeight
              };
              _extends(state, size);
              if (onResize2) {
                Promise.resolve().then(() => {
                  onResize2(_extends(_extends({}, size), {
                    offsetWidth,
                    offsetHeight
                  }), target);
                });
              }
            }
          };
          const instance = vue.getCurrentInstance();
          const registerObserver = () => {
            const {
              disabled
            } = props;
            if (disabled) {
              destroyObserver();
              return;
            }
            const element = findDOMNode(instance);
            const elementChanged = element !== currentElement;
            if (elementChanged) {
              destroyObserver();
              currentElement = element;
            }
            if (!resizeObserver && element) {
              resizeObserver = new index(onResize);
              resizeObserver.observe(element);
            }
          };
          vue.onMounted(() => {
            registerObserver();
          });
          vue.onUpdated(() => {
            registerObserver();
          });
          vue.onUnmounted(() => {
            destroyObserver();
          });
          vue.watch(() => props.disabled, () => {
            registerObserver();
          }, {
            flush: "post"
          });
          return () => {
            var _a;
            return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)[0];
          };
        }
      });
      let raf = (callback) => setTimeout(callback, 16);
      let caf = (num) => clearTimeout(num);
      if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
        raf = (callback) => window.requestAnimationFrame(callback);
        caf = (handle) => window.cancelAnimationFrame(handle);
      }
      let rafUUID = 0;
      const rafIds = /* @__PURE__ */ new Map();
      function cleanup(id) {
        rafIds.delete(id);
      }
      function wrapperRaf(callback) {
        let times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        rafUUID += 1;
        const id = rafUUID;
        function callRef(leftTimes) {
          if (leftTimes === 0) {
            cleanup(id);
            callback();
          } else {
            const realId = raf(() => {
              callRef(leftTimes - 1);
            });
            rafIds.set(id, realId);
          }
        }
        callRef(times);
        return id;
      }
      wrapperRaf.cancel = (id) => {
        const realId = rafIds.get(id);
        cleanup(realId);
        return caf(realId);
      };
      const tuple = function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return args;
      };
      const withInstall = (comp) => {
        const c2 = comp;
        c2.install = function(app) {
          app.component(c2.displayName || c2.name, comp);
        };
        return comp;
      };
      function eventType() {
        return {
          type: [Function, Array]
        };
      }
      function objectType(defaultVal) {
        return {
          type: Object,
          default: defaultVal
        };
      }
      function booleanType(defaultVal) {
        return {
          type: Boolean,
          default: defaultVal
        };
      }
      function functionType(defaultVal) {
        return {
          type: Function,
          default: defaultVal
        };
      }
      function anyType(defaultVal, required) {
        const type = {
          validator: () => true,
          default: defaultVal
        };
        return required ? type : type;
      }
      function arrayType(defaultVal) {
        return {
          type: Array,
          default: defaultVal
        };
      }
      function stringType(defaultVal) {
        return {
          type: String,
          default: defaultVal
        };
      }
      function someType(types, defaultVal) {
        return types ? {
          type: types,
          default: defaultVal
        } : anyType(defaultVal);
      }
      let supportsPassive = false;
      try {
        const opts = Object.defineProperty({}, "passive", {
          get() {
            supportsPassive = true;
          }
        });
        window.addEventListener("testPassive", null, opts);
        window.removeEventListener("testPassive", null, opts);
      } catch (e2) {
      }
      const supportsPassive$1 = supportsPassive;
      function addEventListenerWrap(target, eventType2, cb, option) {
        if (target && target.addEventListener) {
          let opt = option;
          if (opt === void 0 && supportsPassive$1 && (eventType2 === "touchstart" || eventType2 === "touchmove" || eventType2 === "wheel")) {
            opt = {
              passive: false
            };
          }
          target.addEventListener(eventType2, cb, opt);
        }
        return {
          remove: () => {
            if (target && target.removeEventListener) {
              target.removeEventListener(eventType2, cb);
            }
          }
        };
      }
      const defaultIconPrefixCls = "anticon";
      const GlobalFormContextKey = Symbol("GlobalFormContextKey");
      const useProvideGlobalForm = (state) => {
        vue.provide(GlobalFormContextKey, state);
      };
      const configProviderProps = () => ({
        iconPrefixCls: String,
        getTargetContainer: {
          type: Function
        },
        getPopupContainer: {
          type: Function
        },
        prefixCls: String,
        getPrefixCls: {
          type: Function
        },
        renderEmpty: {
          type: Function
        },
        transformCellText: {
          type: Function
        },
        csp: objectType(),
        input: objectType(),
        autoInsertSpaceInButton: {
          type: Boolean,
          default: void 0
        },
        locale: objectType(),
        pageHeader: objectType(),
        componentSize: {
          type: String
        },
        componentDisabled: {
          type: Boolean,
          default: void 0
        },
        direction: {
          type: String,
          default: "ltr"
        },
        space: objectType(),
        virtual: {
          type: Boolean,
          default: void 0
        },
        dropdownMatchSelectWidth: {
          type: [Number, Boolean],
          default: true
        },
        form: objectType(),
        pagination: objectType(),
        theme: objectType(),
        select: objectType()
      });
      const configProviderKey = Symbol("configProvider");
      const defaultConfigProvider = {
        getPrefixCls: (suffixCls, customizePrefixCls) => {
          if (customizePrefixCls)
            return customizePrefixCls;
          return suffixCls ? `ant-${suffixCls}` : "ant";
        },
        iconPrefixCls: vue.computed(() => defaultIconPrefixCls),
        getPopupContainer: vue.computed(() => () => document.body),
        direction: vue.computed(() => "ltr")
      };
      const useConfigContextInject = () => {
        return vue.inject(configProviderKey, defaultConfigProvider);
      };
      const useConfigContextProvider = (props) => {
        return vue.provide(configProviderKey, props);
      };
      const DisabledContextKey = Symbol("DisabledContextKey");
      const useInjectDisabled = () => {
        return vue.inject(DisabledContextKey, vue.ref(void 0));
      };
      const useProviderDisabled = (disabled) => {
        const parentDisabled = useInjectDisabled();
        vue.provide(DisabledContextKey, vue.computed(() => {
          var _a;
          return (_a = disabled.value) !== null && _a !== void 0 ? _a : parentDisabled.value;
        }));
        return disabled;
      };
      const enUS$1 = {
        // Options.jsx
        items_per_page: "/ page",
        jump_to: "Go to",
        jump_to_confirm: "confirm",
        page: "",
        // Pagination.jsx
        prev_page: "Previous Page",
        next_page: "Next Page",
        prev_5: "Previous 5 Pages",
        next_5: "Next 5 Pages",
        prev_3: "Previous 3 Pages",
        next_3: "Next 3 Pages"
      };
      const locale$3 = {
        locale: "en_US",
        today: "Today",
        now: "Now",
        backToToday: "Back to today",
        ok: "Ok",
        clear: "Clear",
        month: "Month",
        year: "Year",
        timeSelect: "select time",
        dateSelect: "select date",
        weekSelect: "Choose a week",
        monthSelect: "Choose a month",
        yearSelect: "Choose a year",
        decadeSelect: "Choose a decade",
        yearFormat: "YYYY",
        dateFormat: "M/D/YYYY",
        dayFormat: "D",
        dateTimeFormat: "M/D/YYYY HH:mm:ss",
        monthBeforeYear: true,
        previousMonth: "Previous month (PageUp)",
        nextMonth: "Next month (PageDown)",
        previousYear: "Last year (Control + left)",
        nextYear: "Next year (Control + right)",
        previousDecade: "Last decade",
        nextDecade: "Next decade",
        previousCentury: "Last century",
        nextCentury: "Next century"
      };
      const CalendarLocale = locale$3;
      const locale$2 = {
        placeholder: "Select time",
        rangePlaceholder: ["Start time", "End time"]
      };
      const TimePicker = locale$2;
      const locale$1 = {
        lang: _extends({
          placeholder: "Select date",
          yearPlaceholder: "Select year",
          quarterPlaceholder: "Select quarter",
          monthPlaceholder: "Select month",
          weekPlaceholder: "Select week",
          rangePlaceholder: ["Start date", "End date"],
          rangeYearPlaceholder: ["Start year", "End year"],
          rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
          rangeMonthPlaceholder: ["Start month", "End month"],
          rangeWeekPlaceholder: ["Start week", "End week"]
        }, CalendarLocale),
        timePickerLocale: _extends({}, TimePicker)
      };
      const enUS = locale$1;
      const typeTemplate = "${label} is not a valid ${type}";
      const localeValues = {
        locale: "en",
        Pagination: enUS$1,
        DatePicker: enUS,
        TimePicker,
        Calendar: enUS,
        global: {
          placeholder: "Please select"
        },
        Table: {
          filterTitle: "Filter menu",
          filterConfirm: "OK",
          filterReset: "Reset",
          filterEmptyText: "No filters",
          filterCheckall: "Select all items",
          filterSearchPlaceholder: "Search in filters",
          emptyText: "No data",
          selectAll: "Select current page",
          selectInvert: "Invert current page",
          selectNone: "Clear all data",
          selectionAll: "Select all data",
          sortTitle: "Sort",
          expand: "Expand row",
          collapse: "Collapse row",
          triggerDesc: "Click to sort descending",
          triggerAsc: "Click to sort ascending",
          cancelSort: "Click to cancel sorting"
        },
        Tour: {
          Next: "Next",
          Previous: "Previous",
          Finish: "Finish"
        },
        Modal: {
          okText: "OK",
          cancelText: "Cancel",
          justOkText: "OK"
        },
        Popconfirm: {
          okText: "OK",
          cancelText: "Cancel"
        },
        Transfer: {
          titles: ["", ""],
          searchPlaceholder: "Search here",
          itemUnit: "item",
          itemsUnit: "items",
          remove: "Remove",
          selectCurrent: "Select current page",
          removeCurrent: "Remove current page",
          selectAll: "Select all data",
          removeAll: "Remove all data",
          selectInvert: "Invert current page"
        },
        Upload: {
          uploading: "Uploading...",
          removeFile: "Remove file",
          uploadError: "Upload error",
          previewFile: "Preview file",
          downloadFile: "Download file"
        },
        Empty: {
          description: "No data"
        },
        Icon: {
          icon: "icon"
        },
        Text: {
          edit: "Edit",
          copy: "Copy",
          copied: "Copied",
          expand: "Expand"
        },
        PageHeader: {
          back: "Back"
        },
        Form: {
          optional: "(optional)",
          defaultValidateMessages: {
            default: "Field validation error for ${label}",
            required: "Please enter ${label}",
            enum: "${label} must be one of [${enum}]",
            whitespace: "${label} cannot be a blank character",
            date: {
              format: "${label} date format is invalid",
              parse: "${label} cannot be converted to a date",
              invalid: "${label} is an invalid date"
            },
            types: {
              string: typeTemplate,
              method: typeTemplate,
              array: typeTemplate,
              object: typeTemplate,
              number: typeTemplate,
              date: typeTemplate,
              boolean: typeTemplate,
              integer: typeTemplate,
              float: typeTemplate,
              regexp: typeTemplate,
              email: typeTemplate,
              url: typeTemplate,
              hex: typeTemplate
            },
            string: {
              len: "${label} must be ${len} characters",
              min: "${label} must be at least ${min} characters",
              max: "${label} must be up to ${max} characters",
              range: "${label} must be between ${min}-${max} characters"
            },
            number: {
              len: "${label} must be equal to ${len}",
              min: "${label} must be minimum ${min}",
              max: "${label} must be maximum ${max}",
              range: "${label} must be between ${min}-${max}"
            },
            array: {
              len: "Must be ${len} ${label}",
              min: "At least ${min} ${label}",
              max: "At most ${max} ${label}",
              range: "The amount of ${label} must be between ${min}-${max}"
            },
            pattern: {
              mismatch: "${label} does not match the pattern ${pattern}"
            }
          }
        },
        Image: {
          preview: "Preview"
        },
        QRCode: {
          expired: "QR code expired",
          refresh: "Refresh"
        }
      };
      const defaultLocale = localeValues;
      const LocaleReceiver = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "LocaleReceiver",
        props: {
          componentName: String,
          defaultLocale: {
            type: [Object, Function]
          },
          children: {
            type: Function
          }
        },
        setup(props, _ref) {
          let {
            slots
          } = _ref;
          const localeData = vue.inject("localeData", {});
          const locale2 = vue.computed(() => {
            const {
              componentName = "global",
              defaultLocale: defaultLocale$1
            } = props;
            const locale3 = defaultLocale$1 || defaultLocale[componentName || "global"];
            const {
              antLocale
            } = localeData;
            const localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
            return _extends(_extends({}, typeof locale3 === "function" ? locale3() : locale3), localeFromContext || {});
          });
          const localeCode = vue.computed(() => {
            const {
              antLocale
            } = localeData;
            const localeCode2 = antLocale && antLocale.locale;
            if (antLocale && antLocale.exist && !localeCode2) {
              return defaultLocale.locale;
            }
            return localeCode2;
          });
          return () => {
            const children = props.children || slots.default;
            const {
              antLocale
            } = localeData;
            return children === null || children === void 0 ? void 0 : children(locale2.value, localeCode.value, antLocale);
          };
        }
      });
      function useLocaleReceiver(componentName, defaultLocale$1, propsLocale) {
        const localeData = vue.inject("localeData", {});
        const componentLocale = vue.computed(() => {
          const {
            antLocale
          } = localeData;
          const locale2 = vue.unref(defaultLocale$1) || defaultLocale[componentName || "global"];
          const localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
          return _extends(_extends(_extends({}, typeof locale2 === "function" ? locale2() : locale2), localeFromContext || {}), vue.unref(propsLocale) || {});
        });
        return [componentLocale];
      }
      function murmur2(str) {
        var h2 = 0;
        var k2, i2 = 0, len = str.length;
        for (; len >= 4; ++i2, len -= 4) {
          k2 = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24;
          k2 = /* Math.imul(k, m): */
          (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
          k2 ^= /* k >>> r: */
          k2 >>> 24;
          h2 = /* Math.imul(k, m): */
          (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
          (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
        }
        switch (len) {
          case 3:
            h2 ^= (str.charCodeAt(i2 + 2) & 255) << 16;
          case 2:
            h2 ^= (str.charCodeAt(i2 + 1) & 255) << 8;
          case 1:
            h2 ^= str.charCodeAt(i2) & 255;
            h2 = /* Math.imul(h, m): */
            (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
        }
        h2 ^= h2 >>> 13;
        h2 = /* Math.imul(h, m): */
        (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
        return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
      }
      class Entity {
        constructor() {
          this.cache = /* @__PURE__ */ new Map();
        }
        get(keys2) {
          return this.cache.get(Array.isArray(keys2) ? keys2.join("%") : keys2) || null;
        }
        update(keys2, valueFn) {
          const path = Array.isArray(keys2) ? keys2.join("%") : keys2;
          const prevValue = this.cache.get(path);
          const nextValue = valueFn(prevValue);
          if (nextValue === null) {
            this.cache.delete(path);
          } else {
            this.cache.set(path, nextValue);
          }
        }
      }
      const CacheEntity = Entity;
      const ATTR_TOKEN = "data-token-hash";
      const ATTR_MARK = "data-css-hash";
      const CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
      const CSS_IN_JS_INSTANCE_ID = Math.random().toString(12).slice(2);
      function createCache() {
        if (typeof document !== "undefined" && document.head && document.body) {
          const styles = document.body.querySelectorAll(`style[${ATTR_MARK}]`) || [];
          const {
            firstChild
          } = document.head;
          Array.from(styles).forEach((style2) => {
            style2[CSS_IN_JS_INSTANCE] = style2[CSS_IN_JS_INSTANCE] || CSS_IN_JS_INSTANCE_ID;
            document.head.insertBefore(style2, firstChild);
          });
          const styleHash = {};
          Array.from(document.querySelectorAll(`style[${ATTR_MARK}]`)).forEach((style2) => {
            var _a;
            const hash = style2.getAttribute(ATTR_MARK);
            if (styleHash[hash]) {
              if (style2[CSS_IN_JS_INSTANCE] === CSS_IN_JS_INSTANCE_ID) {
                (_a = style2.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(style2);
              }
            } else {
              styleHash[hash] = true;
            }
          });
        }
        return new CacheEntity();
      }
      const StyleContextKey = Symbol("StyleContextKey");
      const defaultStyleContext = {
        cache: createCache(),
        defaultCache: true,
        hashPriority: "low"
      };
      const useStyleInject = () => {
        return vue.inject(StyleContextKey, vue.shallowRef(_extends({}, defaultStyleContext)));
      };
      const useStyleProvider = (props) => {
        const parentContext = useStyleInject();
        const context2 = vue.shallowRef(_extends({}, defaultStyleContext));
        vue.watch([() => vue.unref(props), parentContext], () => {
          const mergedContext = _extends({}, parentContext.value);
          const propsValue = vue.unref(props);
          Object.keys(propsValue).forEach((key2) => {
            const value = propsValue[key2];
            if (propsValue[key2] !== void 0) {
              mergedContext[key2] = value;
            }
          });
          const {
            cache
          } = propsValue;
          mergedContext.cache = mergedContext.cache || createCache();
          mergedContext.defaultCache = !cache && parentContext.value.defaultCache;
          context2.value = mergedContext;
        }, {
          immediate: true
        });
        vue.provide(StyleContextKey, context2);
        return context2;
      };
      const styleProviderProps = () => ({
        autoClear: booleanType(),
        /** @private Test only. Not work in production. */
        mock: stringType(),
        /**
         * Only set when you need ssr to extract style on you own.
         * If not provided, it will auto create <style /> on the end of Provider in server side.
         */
        cache: objectType(),
        /** Tell children that this context is default generated context */
        defaultCache: booleanType(),
        /** Use `:where` selector to reduce hashId css selector priority */
        hashPriority: stringType(),
        /** Tell cssinjs where to inject style in */
        container: someType(),
        /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
        ssrInline: booleanType(),
        /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
        transformers: arrayType(),
        /**
         * Linters to lint css before inject in document.
         * Styles will be linted after transforming.
         * Please note that `linters` do not support dynamic update.
         */
        linters: arrayType()
      });
      withInstall(vue.defineComponent({
        name: "AStyleProvider",
        inheritAttrs: false,
        props: initDefaultProps$1(styleProviderProps(), defaultStyleContext),
        setup(props, _ref) {
          let {
            slots
          } = _ref;
          useStyleProvider(props);
          return () => {
            var _a;
            return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
          };
        }
      }));
      function useClientCache(prefix, keyPath, cacheFn, onCacheRemove) {
        const styleContext = useStyleInject();
        const fullPathStr = vue.shallowRef("");
        const res = vue.shallowRef();
        vue.watchEffect(() => {
          fullPathStr.value = [prefix, ...keyPath.value].join("%");
        });
        const clearCache = (pathStr) => {
          styleContext.value.cache.update(pathStr, (prevCache) => {
            const [times = 0, cache] = prevCache || [];
            const nextCount = times - 1;
            if (nextCount === 0) {
              onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(cache, false);
              return null;
            }
            return [times - 1, cache];
          });
        };
        vue.watch(fullPathStr, (newStr, oldStr) => {
          if (oldStr)
            clearCache(oldStr);
          styleContext.value.cache.update(newStr, (prevCache) => {
            const [times = 0, cache] = prevCache || [];
            let tmpCache = cache;
            const mergedCache = tmpCache || cacheFn();
            return [times + 1, mergedCache];
          });
          res.value = styleContext.value.cache.get(fullPathStr.value)[1];
        }, {
          immediate: true
        });
        vue.onBeforeUnmount(() => {
          clearCache(fullPathStr.value);
        });
        return res;
      }
      function canUseDom() {
        return !!(typeof window !== "undefined" && window.document && window.document.createElement);
      }
      function contains(root2, n2) {
        if (!root2) {
          return false;
        }
        if (root2.contains) {
          return root2.contains(n2);
        }
        return false;
      }
      const APPEND_ORDER = "data-vc-order";
      const MARK_KEY = `vc-util-key`;
      const containerCache = /* @__PURE__ */ new Map();
      function getMark() {
        let {
          mark
        } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (mark) {
          return mark.startsWith("data-") ? mark : `data-${mark}`;
        }
        return MARK_KEY;
      }
      function getContainer$1(option) {
        if (option.attachTo) {
          return option.attachTo;
        }
        const head = document.querySelector("head");
        return head || document.body;
      }
      function getOrder(prepend) {
        if (prepend === "queue") {
          return "prependQueue";
        }
        return prepend ? "prepend" : "append";
      }
      function findStyles(container) {
        return Array.from((containerCache.get(container) || container).children).filter((node2) => node2.tagName === "STYLE");
      }
      function injectCSS(css2) {
        let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!canUseDom()) {
          return null;
        }
        const {
          csp,
          prepend
        } = option;
        const styleNode = document.createElement("style");
        styleNode.setAttribute(APPEND_ORDER, getOrder(prepend));
        if (csp === null || csp === void 0 ? void 0 : csp.nonce) {
          styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
        }
        styleNode.innerHTML = css2;
        const container = getContainer$1(option);
        const {
          firstChild
        } = container;
        if (prepend) {
          if (prepend === "queue") {
            const existStyle = findStyles(container).filter((node2) => ["prepend", "prependQueue"].includes(node2.getAttribute(APPEND_ORDER)));
            if (existStyle.length) {
              container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
              return styleNode;
            }
          }
          container.insertBefore(styleNode, firstChild);
        } else {
          container.appendChild(styleNode);
        }
        return styleNode;
      }
      function findExistNode(key2) {
        let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const container = getContainer$1(option);
        return findStyles(container).find((node2) => node2.getAttribute(getMark(option)) === key2);
      }
      function removeCSS(key2) {
        let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const existNode = findExistNode(key2, option);
        if (existNode) {
          const container = getContainer$1(option);
          container.removeChild(existNode);
        }
      }
      function syncRealContainer(container, option) {
        const cachedRealContainer = containerCache.get(container);
        if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
          const placeholderStyle = injectCSS("", option);
          const {
            parentNode
          } = placeholderStyle;
          containerCache.set(container, parentNode);
          container.removeChild(placeholderStyle);
        }
      }
      function updateCSS(css2, key2) {
        let option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var _a, _b, _c;
        const container = getContainer$1(option);
        syncRealContainer(container, option);
        const existNode = findExistNode(key2, option);
        if (existNode) {
          if (((_a = option.csp) === null || _a === void 0 ? void 0 : _a.nonce) && existNode.nonce !== ((_b = option.csp) === null || _b === void 0 ? void 0 : _b.nonce)) {
            existNode.nonce = (_c = option.csp) === null || _c === void 0 ? void 0 : _c.nonce;
          }
          if (existNode.innerHTML !== css2) {
            existNode.innerHTML = css2;
          }
          return existNode;
        }
        const newNode = injectCSS(css2, option);
        newNode.setAttribute(getMark(option), key2);
        return newNode;
      }
      function flattenToken(token2) {
        let str = "";
        Object.keys(token2).forEach((key2) => {
          const value = token2[key2];
          str += key2;
          if (value && typeof value === "object") {
            str += flattenToken(value);
          } else {
            str += value;
          }
        });
        return str;
      }
      function token2key(token2, salt) {
        return murmur2(`${salt}_${flattenToken(token2)}`);
      }
      const layerKey = `layer-${Date.now()}-${Math.random()}`.replace(/\./g, "");
      const layerWidth = "903px";
      function supportSelector(styleStr, handleElement) {
        var _a;
        if (canUseDom()) {
          updateCSS(styleStr, layerKey);
          const ele = document.createElement("div");
          ele.style.position = "fixed";
          ele.style.left = "0";
          ele.style.top = "0";
          handleElement === null || handleElement === void 0 ? void 0 : handleElement(ele);
          document.body.appendChild(ele);
          const support = getComputedStyle(ele).width === layerWidth;
          (_a = ele.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(ele);
          removeCSS(layerKey);
          return support;
        }
        return false;
      }
      let canLayer = void 0;
      function supportLayer() {
        if (canLayer === void 0) {
          canLayer = supportSelector(`@layer ${layerKey} { .${layerKey} { width: ${layerWidth}!important; } }`, (ele) => {
            ele.className = layerKey;
          });
        }
        return canLayer;
      }
      const EMPTY_OVERRIDE = {};
      const hashPrefix = "css";
      const tokenKeys = /* @__PURE__ */ new Map();
      function recordCleanToken(tokenKey) {
        tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
      }
      function removeStyleTags(key2) {
        if (typeof document !== "undefined") {
          const styles = document.querySelectorAll(`style[${ATTR_TOKEN}="${key2}"]`);
          styles.forEach((style2) => {
            var _a;
            if (style2[CSS_IN_JS_INSTANCE] === CSS_IN_JS_INSTANCE_ID) {
              (_a = style2.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(style2);
            }
          });
        }
      }
      function cleanTokenStyle(tokenKey) {
        tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
        const tokenKeyList = Array.from(tokenKeys.keys());
        const cleanableKeyList = tokenKeyList.filter((key2) => {
          const count = tokenKeys.get(key2) || 0;
          return count <= 0;
        });
        if (cleanableKeyList.length < tokenKeyList.length) {
          cleanableKeyList.forEach((key2) => {
            removeStyleTags(key2);
            tokenKeys.delete(key2);
          });
        }
      }
      function useCacheToken(theme, tokens) {
        let option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : vue.ref({});
        const mergedToken = vue.computed(() => _extends({}, ...tokens.value));
        const tokenStr = vue.computed(() => flattenToken(mergedToken.value));
        const overrideTokenStr = vue.computed(() => flattenToken(option.value.override || EMPTY_OVERRIDE));
        const cachedToken = useClientCache("token", vue.computed(() => [option.value.salt || "", theme.value.id, tokenStr.value, overrideTokenStr.value]), () => {
          const {
            salt = "",
            override = EMPTY_OVERRIDE,
            formatToken: formatToken2
          } = option.value;
          const derivativeToken = theme.value.getDerivativeToken(mergedToken.value);
          let mergedDerivativeToken = _extends(_extends({}, derivativeToken), override);
          if (formatToken2) {
            mergedDerivativeToken = formatToken2(mergedDerivativeToken);
          }
          const tokenKey = token2key(mergedDerivativeToken, salt);
          mergedDerivativeToken._tokenKey = tokenKey;
          recordCleanToken(tokenKey);
          const hashId = `${hashPrefix}-${murmur2(tokenKey)}`;
          mergedDerivativeToken._hashId = hashId;
          return [mergedDerivativeToken, hashId];
        }, (cache) => {
          cleanTokenStyle(cache[0]._tokenKey);
        });
        return cachedToken;
      }
      var unitlessKeys = {
        animationIterationCount: 1,
        aspectRatio: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        // SVG-related properties
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
      };
      var COMMENT = "comm";
      var RULESET = "rule";
      var DECLARATION = "decl";
      var IMPORT = "@import";
      var KEYFRAMES = "@keyframes";
      var LAYER = "@layer";
      var abs = Math.abs;
      var from = String.fromCharCode;
      function trim(value) {
        return value.trim();
      }
      function replace(value, pattern, replacement) {
        return value.replace(pattern, replacement);
      }
      function indexof(value, search) {
        return value.indexOf(search);
      }
      function charat(value, index2) {
        return value.charCodeAt(index2) | 0;
      }
      function substr(value, begin, end) {
        return value.slice(begin, end);
      }
      function strlen(value) {
        return value.length;
      }
      function sizeof(value) {
        return value.length;
      }
      function append(value, array) {
        return array.push(value), value;
      }
      var line = 1;
      var column = 1;
      var length = 0;
      var position = 0;
      var character = 0;
      var characters = "";
      function node(value, root2, parent, type, props, children, length2, siblings) {
        return { value, root: root2, parent, type, props, children, line, column, length: length2, return: "", siblings };
      }
      function char() {
        return character;
      }
      function prev() {
        character = position > 0 ? charat(characters, --position) : 0;
        if (column--, character === 10)
          column = 1, line--;
        return character;
      }
      function next() {
        character = position < length ? charat(characters, position++) : 0;
        if (column++, character === 10)
          column = 1, line++;
        return character;
      }
      function peek() {
        return charat(characters, position);
      }
      function caret() {
        return position;
      }
      function slice(begin, end) {
        return substr(characters, begin, end);
      }
      function token(type) {
        switch (type) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function alloc(value) {
        return line = column = 1, length = strlen(characters = value), position = 0, [];
      }
      function dealloc(value) {
        return characters = "", value;
      }
      function delimit(type) {
        return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
      }
      function whitespace(type) {
        while (character = peek())
          if (character < 33)
            next();
          else
            break;
        return token(type) > 2 || token(character) > 3 ? "" : " ";
      }
      function escaping(index2, count) {
        while (--count && next())
          if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
            break;
        return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
      }
      function delimiter(type) {
        while (next())
          switch (character) {
            case type:
              return position;
            case 34:
            case 39:
              if (type !== 34 && type !== 39)
                delimiter(character);
              break;
            case 40:
              if (type === 41)
                delimiter(type);
              break;
            case 92:
              next();
              break;
          }
        return position;
      }
      function commenter(type, index2) {
        while (next())
          if (type + character === 47 + 10)
            break;
          else if (type + character === 42 + 42 && peek() === 47)
            break;
        return "/*" + slice(index2, position - 1) + "*" + from(type === 47 ? type : next());
      }
      function identifier(index2) {
        while (!token(peek()))
          next();
        return slice(index2, position);
      }
      function compile(value) {
        return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
      }
      function parse(value, root2, parent, rule, rules, rulesets, pseudo, points, declarations) {
        var index2 = 0;
        var offset2 = 0;
        var length2 = pseudo;
        var atrule = 0;
        var property = 0;
        var previous = 0;
        var variable = 1;
        var scanning = 1;
        var ampersand = 1;
        var character2 = 0;
        var type = "";
        var props = rules;
        var children = rulesets;
        var reference = rule;
        var characters2 = type;
        while (scanning)
          switch (previous = character2, character2 = next()) {
            case 40:
              if (previous != 108 && charat(characters2, length2 - 1) == 58) {
                if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
                  ampersand = -1;
                break;
              }
            case 34:
            case 39:
            case 91:
              characters2 += delimit(character2);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              characters2 += whitespace(previous);
              break;
            case 92:
              characters2 += escaping(caret() - 1, 7);
              continue;
            case 47:
              switch (peek()) {
                case 42:
                case 47:
                  append(comment(commenter(next(), caret()), root2, parent, declarations), declarations);
                  break;
                default:
                  characters2 += "/";
              }
              break;
            case 123 * variable:
              points[index2++] = strlen(characters2) * ampersand;
            case 125 * variable:
            case 59:
            case 0:
              switch (character2) {
                case 0:
                case 125:
                  scanning = 0;
                case 59 + offset2:
                  if (ampersand == -1)
                    characters2 = replace(characters2, /\f/g, "");
                  if (property > 0 && strlen(characters2) - length2)
                    append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
                  break;
                case 59:
                  characters2 += ";";
                default:
                  append(reference = ruleset(characters2, root2, parent, index2, offset2, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
                  if (character2 === 123)
                    if (offset2 === 0)
                      parse(characters2, root2, reference, reference, props, rulesets, length2, points, children);
                    else
                      switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                          break;
                        default:
                          parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                      }
              }
              index2 = offset2 = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
              break;
            case 58:
              length2 = 1 + strlen(characters2), property = previous;
            default:
              if (variable < 1) {
                if (character2 == 123)
                  --variable;
                else if (character2 == 125 && variable++ == 0 && prev() == 125)
                  continue;
              }
              switch (characters2 += from(character2), character2 * variable) {
                case 38:
                  ampersand = offset2 > 0 ? 1 : (characters2 += "\f", -1);
                  break;
                case 44:
                  points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
                  break;
                case 64:
                  if (peek() === 45)
                    characters2 += delimit(next());
                  atrule = peek(), offset2 = length2 = strlen(type = characters2 += identifier(caret())), character2++;
                  break;
                case 45:
                  if (previous === 45 && strlen(characters2) == 2)
                    variable = 0;
              }
          }
        return rulesets;
      }
      function ruleset(value, root2, parent, index2, offset2, rules, points, type, props, children, length2, siblings) {
        var post = offset2 - 1;
        var rule = offset2 === 0 ? rules : [""];
        var size = sizeof(rule);
        for (var i2 = 0, j2 = 0, k2 = 0; i2 < index2; ++i2)
          for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
            if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
              props[k2++] = z2;
        return node(value, root2, parent, offset2 === 0 ? RULESET : type, props, children, length2, siblings);
      }
      function comment(value, root2, parent, siblings) {
        return node(value, root2, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
      }
      function declaration(value, root2, parent, length2, siblings) {
        return node(value, root2, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
      }
      function serialize(children, callback) {
        var output = "";
        for (var i2 = 0; i2 < children.length; i2++)
          output += callback(children[i2], i2, children, callback) || "";
        return output;
      }
      function stringify(element, index2, children, callback) {
        switch (element.type) {
          case LAYER:
            if (element.children.length)
              break;
          case IMPORT:
          case DECLARATION:
            return element.return = element.return || element.value;
          case COMMENT:
            return "";
          case KEYFRAMES:
            return element.return = element.value + "{" + serialize(element.children, callback) + "}";
          case RULESET:
            if (!strlen(element.value = element.props.join(",")))
              return "";
        }
        return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
      }
      let warned = {};
      function warning$3(valid, message2) {
      }
      function call(method, valid, message2) {
        if (!valid && !warned[message2]) {
          method(false, message2);
          warned[message2] = true;
        }
      }
      function warningOnce(valid, message2) {
        call(warning$3, valid, message2);
      }
      const isClientSide = canUseDom();
      const SKIP_CHECK = "_skip_check_";
      const MULTI_VALUE = "_multi_value_";
      function normalizeStyle(styleStr) {
        const serialized = serialize(compile(styleStr), stringify);
        return serialized.replace(/\{%%%\:[^;];}/g, ";");
      }
      function isCompoundCSSProperty(value) {
        return typeof value === "object" && value && (SKIP_CHECK in value || MULTI_VALUE in value);
      }
      function injectSelectorHash(key2, hashId, hashPriority) {
        if (!hashId) {
          return key2;
        }
        const hashClassName = `.${hashId}`;
        const hashSelector = hashPriority === "low" ? `:where(${hashClassName})` : hashClassName;
        const keys2 = key2.split(",").map((k2) => {
          var _a;
          const fullPath = k2.trim().split(/\s+/);
          let firstPath = fullPath[0] || "";
          const htmlElement = ((_a = firstPath.match(/^\w+/)) === null || _a === void 0 ? void 0 : _a[0]) || "";
          firstPath = `${htmlElement}${hashSelector}${firstPath.slice(htmlElement.length)}`;
          return [firstPath, ...fullPath.slice(1)].join(" ");
        });
        return keys2.join(",");
      }
      const globalEffectStyleKeys = /* @__PURE__ */ new Set();
      const parseStyle = function(interpolation) {
        let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        let {
          root: root2,
          injectHash,
          parentSelectors
        } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
          root: true,
          parentSelectors: []
        };
        const {
          hashId,
          layer,
          path,
          hashPriority,
          transformers = [],
          linters = []
        } = config;
        let styleStr = "";
        let effectStyle = {};
        function parseKeyframes(keyframes) {
          const animationName = keyframes.getName(hashId);
          if (!effectStyle[animationName]) {
            const [parsedStr] = parseStyle(keyframes.style, config, {
              root: false,
              parentSelectors
            });
            effectStyle[animationName] = `@keyframes ${keyframes.getName(hashId)}${parsedStr}`;
          }
        }
        function flattenList(list) {
          let fullList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
          list.forEach((item) => {
            if (Array.isArray(item)) {
              flattenList(item, fullList);
            } else if (item) {
              fullList.push(item);
            }
          });
          return fullList;
        }
        const flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
        flattenStyleList.forEach((originStyle) => {
          const style2 = typeof originStyle === "string" && !root2 ? {} : originStyle;
          if (typeof style2 === "string") {
            styleStr += `${style2}
`;
          } else if (style2._keyframe) {
            parseKeyframes(style2);
          } else {
            const mergedStyle = transformers.reduce((prev2, trans) => {
              var _a;
              return ((_a = trans === null || trans === void 0 ? void 0 : trans.visit) === null || _a === void 0 ? void 0 : _a.call(trans, prev2)) || prev2;
            }, style2);
            Object.keys(mergedStyle).forEach((key2) => {
              var _a;
              const value = mergedStyle[key2];
              if (typeof value === "object" && value && (key2 !== "animationName" || !value._keyframe) && !isCompoundCSSProperty(value)) {
                let subInjectHash = false;
                let mergedKey = key2.trim();
                let nextRoot = false;
                if ((root2 || injectHash) && hashId) {
                  if (mergedKey.startsWith("@")) {
                    subInjectHash = true;
                  } else {
                    mergedKey = injectSelectorHash(key2, hashId, hashPriority);
                  }
                } else if (root2 && !hashId && (mergedKey === "&" || mergedKey === "")) {
                  mergedKey = "";
                  nextRoot = true;
                }
                const [parsedStr, childEffectStyle] = parseStyle(value, config, {
                  root: nextRoot,
                  injectHash: subInjectHash,
                  parentSelectors: [...parentSelectors, mergedKey]
                });
                effectStyle = _extends(_extends({}, effectStyle), childEffectStyle);
                styleStr += `${mergedKey}${parsedStr}`;
              } else {
                let appendStyle = function(cssKey, cssValue) {
                  const styleName = cssKey.replace(/[A-Z]/g, (match2) => `-${match2.toLowerCase()}`);
                  let formatValue = cssValue;
                  if (!unitlessKeys[cssKey] && typeof formatValue === "number" && formatValue !== 0) {
                    formatValue = `${formatValue}px`;
                  }
                  if (cssKey === "animationName" && (cssValue === null || cssValue === void 0 ? void 0 : cssValue._keyframe)) {
                    parseKeyframes(cssValue);
                    formatValue = cssValue.getName(hashId);
                  }
                  styleStr += `${styleName}:${formatValue};`;
                };
                const actualValue = (_a = value === null || value === void 0 ? void 0 : value.value) !== null && _a !== void 0 ? _a : value;
                if (typeof value === "object" && (value === null || value === void 0 ? void 0 : value[MULTI_VALUE]) && Array.isArray(actualValue)) {
                  actualValue.forEach((item) => {
                    appendStyle(key2, item);
                  });
                } else {
                  appendStyle(key2, actualValue);
                }
              }
            });
          }
        });
        if (!root2) {
          styleStr = `{${styleStr}}`;
        } else if (layer && supportLayer()) {
          const layerCells = layer.split(",");
          const layerName = layerCells[layerCells.length - 1].trim();
          styleStr = `@layer ${layerName} {${styleStr}}`;
          if (layerCells.length > 1) {
            styleStr = `@layer ${layer}{%%%:%}${styleStr}`;
          }
        }
        return [styleStr, effectStyle];
      };
      function uniqueHash(path, styleStr) {
        return murmur2(`${path.join("%")}${styleStr}`);
      }
      function useStyleRegister(info, styleFn) {
        const styleContext = useStyleInject();
        const tokenKey = vue.computed(() => info.value.token._tokenKey);
        const fullPath = vue.computed(() => [tokenKey.value, ...info.value.path]);
        let isMergedClientSide = isClientSide;
        useClientCache(
          "style",
          fullPath,
          // Create cache if needed
          () => {
            const styleObj = styleFn();
            const {
              hashPriority,
              container,
              transformers,
              linters
            } = styleContext.value;
            const {
              path,
              hashId,
              layer
            } = info.value;
            const [parsedStyle, effectStyle] = parseStyle(styleObj, {
              hashId,
              hashPriority,
              layer,
              path: path.join("-"),
              transformers,
              linters
            });
            const styleStr = normalizeStyle(parsedStyle);
            const styleId = uniqueHash(fullPath.value, styleStr);
            if (isMergedClientSide) {
              const style2 = updateCSS(styleStr, styleId, {
                mark: ATTR_MARK,
                prepend: "queue",
                attachTo: container
              });
              style2[CSS_IN_JS_INSTANCE] = CSS_IN_JS_INSTANCE_ID;
              style2.setAttribute(ATTR_TOKEN, tokenKey.value);
              Object.keys(effectStyle).forEach((effectKey) => {
                if (!globalEffectStyleKeys.has(effectKey)) {
                  globalEffectStyleKeys.add(effectKey);
                  updateCSS(normalizeStyle(effectStyle[effectKey]), `_effect-${effectKey}`, {
                    mark: ATTR_MARK,
                    prepend: "queue",
                    attachTo: container
                  });
                }
              });
            }
            return [styleStr, tokenKey.value, styleId];
          },
          // Remove cache if no need
          (_ref, fromHMR) => {
            let [, , styleId] = _ref;
            if ((fromHMR || styleContext.value.autoClear) && isClientSide) {
              removeCSS(styleId, {
                mark: ATTR_MARK
              });
            }
          }
        );
        return (node2) => {
          return node2;
        };
      }
      class Keyframe {
        constructor(name, style2) {
          this._keyframe = true;
          this.name = name;
          this.style = style2;
        }
        getName() {
          let hashId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          return hashId ? `${hashId}-${this.name}` : this.name;
        }
      }
      const Keyframes = Keyframe;
      function sameDerivativeOption(left, right) {
        if (left.length !== right.length) {
          return false;
        }
        for (let i2 = 0; i2 < left.length; i2++) {
          if (left[i2] !== right[i2]) {
            return false;
          }
        }
        return true;
      }
      class ThemeCache {
        constructor() {
          this.cache = /* @__PURE__ */ new Map();
          this.keys = [];
          this.cacheCallTimes = 0;
        }
        size() {
          return this.keys.length;
        }
        internalGet(derivativeOption) {
          let updateCallTimes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          let cache = {
            map: this.cache
          };
          derivativeOption.forEach((derivative2) => {
            var _a;
            if (!cache) {
              cache = void 0;
            } else {
              cache = (_a = cache === null || cache === void 0 ? void 0 : cache.map) === null || _a === void 0 ? void 0 : _a.get(derivative2);
            }
          });
          if ((cache === null || cache === void 0 ? void 0 : cache.value) && updateCallTimes) {
            cache.value[1] = this.cacheCallTimes++;
          }
          return cache === null || cache === void 0 ? void 0 : cache.value;
        }
        get(derivativeOption) {
          var _a;
          return (_a = this.internalGet(derivativeOption, true)) === null || _a === void 0 ? void 0 : _a[0];
        }
        has(derivativeOption) {
          return !!this.internalGet(derivativeOption);
        }
        set(derivativeOption, value) {
          if (!this.has(derivativeOption)) {
            if (this.size() + 1 > ThemeCache.MAX_CACHE_SIZE + ThemeCache.MAX_CACHE_OFFSET) {
              const [targetKey] = this.keys.reduce((result, key2) => {
                const [, callTimes] = result;
                if (this.internalGet(key2)[1] < callTimes) {
                  return [key2, this.internalGet(key2)[1]];
                }
                return result;
              }, [this.keys[0], this.cacheCallTimes]);
              this.delete(targetKey);
            }
            this.keys.push(derivativeOption);
          }
          let cache = this.cache;
          derivativeOption.forEach((derivative2, index2) => {
            if (index2 === derivativeOption.length - 1) {
              cache.set(derivative2, {
                value: [value, this.cacheCallTimes++]
              });
            } else {
              const cacheValue = cache.get(derivative2);
              if (!cacheValue) {
                cache.set(derivative2, {
                  map: /* @__PURE__ */ new Map()
                });
              } else if (!cacheValue.map) {
                cacheValue.map = /* @__PURE__ */ new Map();
              }
              cache = cache.get(derivative2).map;
            }
          });
        }
        deleteByPath(currentCache, derivatives) {
          var _a;
          const cache = currentCache.get(derivatives[0]);
          if (derivatives.length === 1) {
            if (!cache.map) {
              currentCache.delete(derivatives[0]);
            } else {
              currentCache.set(derivatives[0], {
                map: cache.map
              });
            }
            return (_a = cache.value) === null || _a === void 0 ? void 0 : _a[0];
          }
          const result = this.deleteByPath(cache.map, derivatives.slice(1));
          if ((!cache.map || cache.map.size === 0) && !cache.value) {
            currentCache.delete(derivatives[0]);
          }
          return result;
        }
        delete(derivativeOption) {
          if (this.has(derivativeOption)) {
            this.keys = this.keys.filter((item) => !sameDerivativeOption(item, derivativeOption));
            return this.deleteByPath(this.cache, derivativeOption);
          }
          return void 0;
        }
      }
      ThemeCache.MAX_CACHE_SIZE = 20;
      ThemeCache.MAX_CACHE_OFFSET = 5;
      function noop$3() {
      }
      let warning$1 = noop$3;
      const warning$2 = warning$1;
      let uuid$4 = 0;
      class Theme {
        constructor(derivatives) {
          this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
          this.id = uuid$4;
          if (derivatives.length === 0) {
            warning$2(derivatives.length > 0);
          }
          uuid$4 += 1;
        }
        getDerivativeToken(token2) {
          return this.derivatives.reduce((result, derivative2) => derivative2(token2, result), void 0);
        }
      }
      const cacheThemes = new ThemeCache();
      function createTheme(derivatives) {
        const derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
        if (!cacheThemes.has(derivativeArr)) {
          cacheThemes.set(derivativeArr, new Theme(derivativeArr));
        }
        return cacheThemes.get(derivativeArr);
      }
      const version = "4.0.2";
      const PresetColors = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
      function bound01(n2, max) {
        if (isOnePointZero(n2)) {
          n2 = "100%";
        }
        var isPercent = isPercentage(n2);
        n2 = max === 360 ? n2 : Math.min(max, Math.max(0, parseFloat(n2)));
        if (isPercent) {
          n2 = parseInt(String(n2 * max), 10) / 100;
        }
        if (Math.abs(n2 - max) < 1e-6) {
          return 1;
        }
        if (max === 360) {
          n2 = (n2 < 0 ? n2 % max + max : n2 % max) / parseFloat(String(max));
        } else {
          n2 = n2 % max / parseFloat(String(max));
        }
        return n2;
      }
      function clamp01(val) {
        return Math.min(1, Math.max(0, val));
      }
      function isOnePointZero(n2) {
        return typeof n2 === "string" && n2.indexOf(".") !== -1 && parseFloat(n2) === 1;
      }
      function isPercentage(n2) {
        return typeof n2 === "string" && n2.indexOf("%") !== -1;
      }
      function boundAlpha(a2) {
        a2 = parseFloat(a2);
        if (isNaN(a2) || a2 < 0 || a2 > 1) {
          a2 = 1;
        }
        return a2;
      }
      function convertToPercentage(n2) {
        if (n2 <= 1) {
          return "".concat(Number(n2) * 100, "%");
        }
        return n2;
      }
      function pad2(c2) {
        return c2.length === 1 ? "0" + c2 : String(c2);
      }
      function rgbToRgb(r2, g2, b2) {
        return {
          r: bound01(r2, 255) * 255,
          g: bound01(g2, 255) * 255,
          b: bound01(b2, 255) * 255
        };
      }
      function rgbToHsl(r2, g2, b2) {
        r2 = bound01(r2, 255);
        g2 = bound01(g2, 255);
        b2 = bound01(b2, 255);
        var max = Math.max(r2, g2, b2);
        var min = Math.min(r2, g2, b2);
        var h2 = 0;
        var s2 = 0;
        var l2 = (max + min) / 2;
        if (max === min) {
          s2 = 0;
          h2 = 0;
        } else {
          var d2 = max - min;
          s2 = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
          switch (max) {
            case r2:
              h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
              break;
            case g2:
              h2 = (b2 - r2) / d2 + 2;
              break;
            case b2:
              h2 = (r2 - g2) / d2 + 4;
              break;
          }
          h2 /= 6;
        }
        return { h: h2, s: s2, l: l2 };
      }
      function hue2rgb(p, q2, t2) {
        if (t2 < 0) {
          t2 += 1;
        }
        if (t2 > 1) {
          t2 -= 1;
        }
        if (t2 < 1 / 6) {
          return p + (q2 - p) * (6 * t2);
        }
        if (t2 < 1 / 2) {
          return q2;
        }
        if (t2 < 2 / 3) {
          return p + (q2 - p) * (2 / 3 - t2) * 6;
        }
        return p;
      }
      function hslToRgb(h2, s2, l2) {
        var r2;
        var g2;
        var b2;
        h2 = bound01(h2, 360);
        s2 = bound01(s2, 100);
        l2 = bound01(l2, 100);
        if (s2 === 0) {
          g2 = l2;
          b2 = l2;
          r2 = l2;
        } else {
          var q2 = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
          var p = 2 * l2 - q2;
          r2 = hue2rgb(p, q2, h2 + 1 / 3);
          g2 = hue2rgb(p, q2, h2);
          b2 = hue2rgb(p, q2, h2 - 1 / 3);
        }
        return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
      }
      function rgbToHsv(r2, g2, b2) {
        r2 = bound01(r2, 255);
        g2 = bound01(g2, 255);
        b2 = bound01(b2, 255);
        var max = Math.max(r2, g2, b2);
        var min = Math.min(r2, g2, b2);
        var h2 = 0;
        var v2 = max;
        var d2 = max - min;
        var s2 = max === 0 ? 0 : d2 / max;
        if (max === min) {
          h2 = 0;
        } else {
          switch (max) {
            case r2:
              h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
              break;
            case g2:
              h2 = (b2 - r2) / d2 + 2;
              break;
            case b2:
              h2 = (r2 - g2) / d2 + 4;
              break;
          }
          h2 /= 6;
        }
        return { h: h2, s: s2, v: v2 };
      }
      function hsvToRgb(h2, s2, v2) {
        h2 = bound01(h2, 360) * 6;
        s2 = bound01(s2, 100);
        v2 = bound01(v2, 100);
        var i2 = Math.floor(h2);
        var f2 = h2 - i2;
        var p = v2 * (1 - s2);
        var q2 = v2 * (1 - f2 * s2);
        var t2 = v2 * (1 - (1 - f2) * s2);
        var mod = i2 % 6;
        var r2 = [v2, q2, p, p, t2, v2][mod];
        var g2 = [t2, v2, v2, q2, p, p][mod];
        var b2 = [p, p, t2, v2, v2, q2][mod];
        return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
      }
      function rgbToHex(r2, g2, b2, allow3Char) {
        var hex = [
          pad2(Math.round(r2).toString(16)),
          pad2(Math.round(g2).toString(16)),
          pad2(Math.round(b2).toString(16))
        ];
        if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
          return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
        }
        return hex.join("");
      }
      function rgbaToHex(r2, g2, b2, a2, allow4Char) {
        var hex = [
          pad2(Math.round(r2).toString(16)),
          pad2(Math.round(g2).toString(16)),
          pad2(Math.round(b2).toString(16)),
          pad2(convertDecimalToHex(a2))
        ];
        if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
          return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
        }
        return hex.join("");
      }
      function convertDecimalToHex(d2) {
        return Math.round(parseFloat(d2) * 255).toString(16);
      }
      function convertHexToDecimal(h2) {
        return parseIntFromHex(h2) / 255;
      }
      function parseIntFromHex(val) {
        return parseInt(val, 16);
      }
      function numberInputToObject(color) {
        return {
          r: color >> 16,
          g: (color & 65280) >> 8,
          b: color & 255
        };
      }
      var names = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        goldenrod: "#daa520",
        gold: "#ffd700",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavenderblush: "#fff0f5",
        lavender: "#e6e6fa",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
      };
      function inputToRGB(color) {
        var rgb = { r: 0, g: 0, b: 0 };
        var a2 = 1;
        var s2 = null;
        var v2 = null;
        var l2 = null;
        var ok = false;
        var format = false;
        if (typeof color === "string") {
          color = stringInputToObject(color);
        }
        if (typeof color === "object") {
          if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
          } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s2 = convertToPercentage(color.s);
            v2 = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s2, v2);
            ok = true;
            format = "hsv";
          } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s2 = convertToPercentage(color.s);
            l2 = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s2, l2);
            ok = true;
            format = "hsl";
          }
          if (Object.prototype.hasOwnProperty.call(color, "a")) {
            a2 = color.a;
          }
        }
        a2 = boundAlpha(a2);
        return {
          ok,
          format: color.format || format,
          r: Math.min(255, Math.max(rgb.r, 0)),
          g: Math.min(255, Math.max(rgb.g, 0)),
          b: Math.min(255, Math.max(rgb.b, 0)),
          a: a2
        };
      }
      var CSS_INTEGER = "[-\\+]?\\d+%?";
      var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
      var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
      var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
      var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
      var matchers = {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      };
      function stringInputToObject(color) {
        color = color.trim().toLowerCase();
        if (color.length === 0) {
          return false;
        }
        var named = false;
        if (names[color]) {
          color = names[color];
          named = true;
        } else if (color === "transparent") {
          return { r: 0, g: 0, b: 0, a: 0, format: "name" };
        }
        var match2 = matchers.rgb.exec(color);
        if (match2) {
          return { r: match2[1], g: match2[2], b: match2[3] };
        }
        match2 = matchers.rgba.exec(color);
        if (match2) {
          return { r: match2[1], g: match2[2], b: match2[3], a: match2[4] };
        }
        match2 = matchers.hsl.exec(color);
        if (match2) {
          return { h: match2[1], s: match2[2], l: match2[3] };
        }
        match2 = matchers.hsla.exec(color);
        if (match2) {
          return { h: match2[1], s: match2[2], l: match2[3], a: match2[4] };
        }
        match2 = matchers.hsv.exec(color);
        if (match2) {
          return { h: match2[1], s: match2[2], v: match2[3] };
        }
        match2 = matchers.hsva.exec(color);
        if (match2) {
          return { h: match2[1], s: match2[2], v: match2[3], a: match2[4] };
        }
        match2 = matchers.hex8.exec(color);
        if (match2) {
          return {
            r: parseIntFromHex(match2[1]),
            g: parseIntFromHex(match2[2]),
            b: parseIntFromHex(match2[3]),
            a: convertHexToDecimal(match2[4]),
            format: named ? "name" : "hex8"
          };
        }
        match2 = matchers.hex6.exec(color);
        if (match2) {
          return {
            r: parseIntFromHex(match2[1]),
            g: parseIntFromHex(match2[2]),
            b: parseIntFromHex(match2[3]),
            format: named ? "name" : "hex"
          };
        }
        match2 = matchers.hex4.exec(color);
        if (match2) {
          return {
            r: parseIntFromHex(match2[1] + match2[1]),
            g: parseIntFromHex(match2[2] + match2[2]),
            b: parseIntFromHex(match2[3] + match2[3]),
            a: convertHexToDecimal(match2[4] + match2[4]),
            format: named ? "name" : "hex8"
          };
        }
        match2 = matchers.hex3.exec(color);
        if (match2) {
          return {
            r: parseIntFromHex(match2[1] + match2[1]),
            g: parseIntFromHex(match2[2] + match2[2]),
            b: parseIntFromHex(match2[3] + match2[3]),
            format: named ? "name" : "hex"
          };
        }
        return false;
      }
      function isValidCSSUnit(color) {
        return Boolean(matchers.CSS_UNIT.exec(String(color)));
      }
      var TinyColor = (
        /** @class */
        function() {
          function TinyColor2(color, opts) {
            if (color === void 0) {
              color = "";
            }
            if (opts === void 0) {
              opts = {};
            }
            var _a;
            if (color instanceof TinyColor2) {
              return color;
            }
            if (typeof color === "number") {
              color = numberInputToObject(color);
            }
            this.originalInput = color;
            var rgb = inputToRGB(color);
            this.originalInput = color;
            this.r = rgb.r;
            this.g = rgb.g;
            this.b = rgb.b;
            this.a = rgb.a;
            this.roundA = Math.round(100 * this.a) / 100;
            this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
            this.gradientType = opts.gradientType;
            if (this.r < 1) {
              this.r = Math.round(this.r);
            }
            if (this.g < 1) {
              this.g = Math.round(this.g);
            }
            if (this.b < 1) {
              this.b = Math.round(this.b);
            }
            this.isValid = rgb.ok;
          }
          TinyColor2.prototype.isDark = function() {
            return this.getBrightness() < 128;
          };
          TinyColor2.prototype.isLight = function() {
            return !this.isDark();
          };
          TinyColor2.prototype.getBrightness = function() {
            var rgb = this.toRgb();
            return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
          };
          TinyColor2.prototype.getLuminance = function() {
            var rgb = this.toRgb();
            var R2;
            var G;
            var B2;
            var RsRGB = rgb.r / 255;
            var GsRGB = rgb.g / 255;
            var BsRGB = rgb.b / 255;
            if (RsRGB <= 0.03928) {
              R2 = RsRGB / 12.92;
            } else {
              R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
            }
            if (GsRGB <= 0.03928) {
              G = GsRGB / 12.92;
            } else {
              G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
            }
            if (BsRGB <= 0.03928) {
              B2 = BsRGB / 12.92;
            } else {
              B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
            }
            return 0.2126 * R2 + 0.7152 * G + 0.0722 * B2;
          };
          TinyColor2.prototype.getAlpha = function() {
            return this.a;
          };
          TinyColor2.prototype.setAlpha = function(alpha) {
            this.a = boundAlpha(alpha);
            this.roundA = Math.round(100 * this.a) / 100;
            return this;
          };
          TinyColor2.prototype.isMonochrome = function() {
            var s2 = this.toHsl().s;
            return s2 === 0;
          };
          TinyColor2.prototype.toHsv = function() {
            var hsv = rgbToHsv(this.r, this.g, this.b);
            return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
          };
          TinyColor2.prototype.toHsvString = function() {
            var hsv = rgbToHsv(this.r, this.g, this.b);
            var h2 = Math.round(hsv.h * 360);
            var s2 = Math.round(hsv.s * 100);
            var v2 = Math.round(hsv.v * 100);
            return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s2, "%, ").concat(v2, "%)") : "hsva(".concat(h2, ", ").concat(s2, "%, ").concat(v2, "%, ").concat(this.roundA, ")");
          };
          TinyColor2.prototype.toHsl = function() {
            var hsl = rgbToHsl(this.r, this.g, this.b);
            return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
          };
          TinyColor2.prototype.toHslString = function() {
            var hsl = rgbToHsl(this.r, this.g, this.b);
            var h2 = Math.round(hsl.h * 360);
            var s2 = Math.round(hsl.s * 100);
            var l2 = Math.round(hsl.l * 100);
            return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s2, "%, ").concat(l2, "%)") : "hsla(".concat(h2, ", ").concat(s2, "%, ").concat(l2, "%, ").concat(this.roundA, ")");
          };
          TinyColor2.prototype.toHex = function(allow3Char) {
            if (allow3Char === void 0) {
              allow3Char = false;
            }
            return rgbToHex(this.r, this.g, this.b, allow3Char);
          };
          TinyColor2.prototype.toHexString = function(allow3Char) {
            if (allow3Char === void 0) {
              allow3Char = false;
            }
            return "#" + this.toHex(allow3Char);
          };
          TinyColor2.prototype.toHex8 = function(allow4Char) {
            if (allow4Char === void 0) {
              allow4Char = false;
            }
            return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
          };
          TinyColor2.prototype.toHex8String = function(allow4Char) {
            if (allow4Char === void 0) {
              allow4Char = false;
            }
            return "#" + this.toHex8(allow4Char);
          };
          TinyColor2.prototype.toHexShortString = function(allowShortChar) {
            if (allowShortChar === void 0) {
              allowShortChar = false;
            }
            return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
          };
          TinyColor2.prototype.toRgb = function() {
            return {
              r: Math.round(this.r),
              g: Math.round(this.g),
              b: Math.round(this.b),
              a: this.a
            };
          };
          TinyColor2.prototype.toRgbString = function() {
            var r2 = Math.round(this.r);
            var g2 = Math.round(this.g);
            var b2 = Math.round(this.b);
            return this.a === 1 ? "rgb(".concat(r2, ", ").concat(g2, ", ").concat(b2, ")") : "rgba(".concat(r2, ", ").concat(g2, ", ").concat(b2, ", ").concat(this.roundA, ")");
          };
          TinyColor2.prototype.toPercentageRgb = function() {
            var fmt = function(x2) {
              return "".concat(Math.round(bound01(x2, 255) * 100), "%");
            };
            return {
              r: fmt(this.r),
              g: fmt(this.g),
              b: fmt(this.b),
              a: this.a
            };
          };
          TinyColor2.prototype.toPercentageRgbString = function() {
            var rnd = function(x2) {
              return Math.round(bound01(x2, 255) * 100);
            };
            return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
          };
          TinyColor2.prototype.toName = function() {
            if (this.a === 0) {
              return "transparent";
            }
            if (this.a < 1) {
              return false;
            }
            var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
            for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
              var _b = _a[_i], key2 = _b[0], value = _b[1];
              if (hex === value) {
                return key2;
              }
            }
            return false;
          };
          TinyColor2.prototype.toString = function(format) {
            var formatSet = Boolean(format);
            format = format !== null && format !== void 0 ? format : this.format;
            var formattedString = false;
            var hasAlpha = this.a < 1 && this.a >= 0;
            var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
            if (needsAlphaFormat) {
              if (format === "name" && this.a === 0) {
                return this.toName();
              }
              return this.toRgbString();
            }
            if (format === "rgb") {
              formattedString = this.toRgbString();
            }
            if (format === "prgb") {
              formattedString = this.toPercentageRgbString();
            }
            if (format === "hex" || format === "hex6") {
              formattedString = this.toHexString();
            }
            if (format === "hex3") {
              formattedString = this.toHexString(true);
            }
            if (format === "hex4") {
              formattedString = this.toHex8String(true);
            }
            if (format === "hex8") {
              formattedString = this.toHex8String();
            }
            if (format === "name") {
              formattedString = this.toName();
            }
            if (format === "hsl") {
              formattedString = this.toHslString();
            }
            if (format === "hsv") {
              formattedString = this.toHsvString();
            }
            return formattedString || this.toHexString();
          };
          TinyColor2.prototype.toNumber = function() {
            return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
          };
          TinyColor2.prototype.clone = function() {
            return new TinyColor2(this.toString());
          };
          TinyColor2.prototype.lighten = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var hsl = this.toHsl();
            hsl.l += amount / 100;
            hsl.l = clamp01(hsl.l);
            return new TinyColor2(hsl);
          };
          TinyColor2.prototype.brighten = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var rgb = this.toRgb();
            rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
            rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
            rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
            return new TinyColor2(rgb);
          };
          TinyColor2.prototype.darken = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var hsl = this.toHsl();
            hsl.l -= amount / 100;
            hsl.l = clamp01(hsl.l);
            return new TinyColor2(hsl);
          };
          TinyColor2.prototype.tint = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            return this.mix("white", amount);
          };
          TinyColor2.prototype.shade = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            return this.mix("black", amount);
          };
          TinyColor2.prototype.desaturate = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var hsl = this.toHsl();
            hsl.s -= amount / 100;
            hsl.s = clamp01(hsl.s);
            return new TinyColor2(hsl);
          };
          TinyColor2.prototype.saturate = function(amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var hsl = this.toHsl();
            hsl.s += amount / 100;
            hsl.s = clamp01(hsl.s);
            return new TinyColor2(hsl);
          };
          TinyColor2.prototype.greyscale = function() {
            return this.desaturate(100);
          };
          TinyColor2.prototype.spin = function(amount) {
            var hsl = this.toHsl();
            var hue = (hsl.h + amount) % 360;
            hsl.h = hue < 0 ? 360 + hue : hue;
            return new TinyColor2(hsl);
          };
          TinyColor2.prototype.mix = function(color, amount) {
            if (amount === void 0) {
              amount = 50;
            }
            var rgb1 = this.toRgb();
            var rgb2 = new TinyColor2(color).toRgb();
            var p = amount / 100;
            var rgba = {
              r: (rgb2.r - rgb1.r) * p + rgb1.r,
              g: (rgb2.g - rgb1.g) * p + rgb1.g,
              b: (rgb2.b - rgb1.b) * p + rgb1.b,
              a: (rgb2.a - rgb1.a) * p + rgb1.a
            };
            return new TinyColor2(rgba);
          };
          TinyColor2.prototype.analogous = function(results, slices) {
            if (results === void 0) {
              results = 6;
            }
            if (slices === void 0) {
              slices = 30;
            }
            var hsl = this.toHsl();
            var part = 360 / slices;
            var ret = [this];
            for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
              hsl.h = (hsl.h + part) % 360;
              ret.push(new TinyColor2(hsl));
            }
            return ret;
          };
          TinyColor2.prototype.complement = function() {
            var hsl = this.toHsl();
            hsl.h = (hsl.h + 180) % 360;
            return new TinyColor2(hsl);
          };
          TinyColor2.prototype.monochromatic = function(results) {
            if (results === void 0) {
              results = 6;
            }
            var hsv = this.toHsv();
            var h2 = hsv.h;
            var s2 = hsv.s;
            var v2 = hsv.v;
            var res = [];
            var modification = 1 / results;
            while (results--) {
              res.push(new TinyColor2({ h: h2, s: s2, v: v2 }));
              v2 = (v2 + modification) % 1;
            }
            return res;
          };
          TinyColor2.prototype.splitcomplement = function() {
            var hsl = this.toHsl();
            var h2 = hsl.h;
            return [
              this,
              new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
              new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
            ];
          };
          TinyColor2.prototype.onBackground = function(background) {
            var fg = this.toRgb();
            var bg = new TinyColor2(background).toRgb();
            var alpha = fg.a + bg.a * (1 - fg.a);
            return new TinyColor2({
              r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
              g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
              b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
              a: alpha
            });
          };
          TinyColor2.prototype.triad = function() {
            return this.polyad(3);
          };
          TinyColor2.prototype.tetrad = function() {
            return this.polyad(4);
          };
          TinyColor2.prototype.polyad = function(n2) {
            var hsl = this.toHsl();
            var h2 = hsl.h;
            var result = [this];
            var increment = 360 / n2;
            for (var i2 = 1; i2 < n2; i2++) {
              result.push(new TinyColor2({ h: (h2 + i2 * increment) % 360, s: hsl.s, l: hsl.l }));
            }
            return result;
          };
          TinyColor2.prototype.equals = function(color) {
            return this.toRgbString() === new TinyColor2(color).toRgbString();
          };
          return TinyColor2;
        }()
      );
      var hueStep = 2;
      var saturationStep = 0.16;
      var saturationStep2 = 0.05;
      var brightnessStep1 = 0.05;
      var brightnessStep2 = 0.15;
      var lightColorCount = 5;
      var darkColorCount = 4;
      var darkColorMap = [{
        index: 7,
        opacity: 0.15
      }, {
        index: 6,
        opacity: 0.25
      }, {
        index: 5,
        opacity: 0.3
      }, {
        index: 5,
        opacity: 0.45
      }, {
        index: 5,
        opacity: 0.65
      }, {
        index: 5,
        opacity: 0.85
      }, {
        index: 4,
        opacity: 0.9
      }, {
        index: 3,
        opacity: 0.95
      }, {
        index: 2,
        opacity: 0.97
      }, {
        index: 1,
        opacity: 0.98
      }];
      function toHsv(_ref) {
        var r2 = _ref.r, g2 = _ref.g, b2 = _ref.b;
        var hsv = rgbToHsv(r2, g2, b2);
        return {
          h: hsv.h * 360,
          s: hsv.s,
          v: hsv.v
        };
      }
      function toHex(_ref2) {
        var r2 = _ref2.r, g2 = _ref2.g, b2 = _ref2.b;
        return "#".concat(rgbToHex(r2, g2, b2, false));
      }
      function mix$1(rgb1, rgb2, amount) {
        var p = amount / 100;
        var rgb = {
          r: (rgb2.r - rgb1.r) * p + rgb1.r,
          g: (rgb2.g - rgb1.g) * p + rgb1.g,
          b: (rgb2.b - rgb1.b) * p + rgb1.b
        };
        return rgb;
      }
      function getHue(hsv, i2, light) {
        var hue;
        if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
          hue = light ? Math.round(hsv.h) - hueStep * i2 : Math.round(hsv.h) + hueStep * i2;
        } else {
          hue = light ? Math.round(hsv.h) + hueStep * i2 : Math.round(hsv.h) - hueStep * i2;
        }
        if (hue < 0) {
          hue += 360;
        } else if (hue >= 360) {
          hue -= 360;
        }
        return hue;
      }
      function getSaturation(hsv, i2, light) {
        if (hsv.h === 0 && hsv.s === 0) {
          return hsv.s;
        }
        var saturation;
        if (light) {
          saturation = hsv.s - saturationStep * i2;
        } else if (i2 === darkColorCount) {
          saturation = hsv.s + saturationStep;
        } else {
          saturation = hsv.s + saturationStep2 * i2;
        }
        if (saturation > 1) {
          saturation = 1;
        }
        if (light && i2 === lightColorCount && saturation > 0.1) {
          saturation = 0.1;
        }
        if (saturation < 0.06) {
          saturation = 0.06;
        }
        return Number(saturation.toFixed(2));
      }
      function getValue$1(hsv, i2, light) {
        var value;
        if (light) {
          value = hsv.v + brightnessStep1 * i2;
        } else {
          value = hsv.v - brightnessStep2 * i2;
        }
        if (value > 1) {
          value = 1;
        }
        return Number(value.toFixed(2));
      }
      function generate$1(color) {
        var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var patterns = [];
        var pColor = inputToRGB(color);
        for (var i2 = lightColorCount; i2 > 0; i2 -= 1) {
          var hsv = toHsv(pColor);
          var colorString = toHex(inputToRGB({
            h: getHue(hsv, i2, true),
            s: getSaturation(hsv, i2, true),
            v: getValue$1(hsv, i2, true)
          }));
          patterns.push(colorString);
        }
        patterns.push(toHex(pColor));
        for (var _i = 1; _i <= darkColorCount; _i += 1) {
          var _hsv = toHsv(pColor);
          var _colorString = toHex(inputToRGB({
            h: getHue(_hsv, _i),
            s: getSaturation(_hsv, _i),
            v: getValue$1(_hsv, _i)
          }));
          patterns.push(_colorString);
        }
        if (opts.theme === "dark") {
          return darkColorMap.map(function(_ref3) {
            var index2 = _ref3.index, opacity = _ref3.opacity;
            var darkColorString = toHex(mix$1(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index2]), opacity * 100));
            return darkColorString;
          });
        }
        return patterns;
      }
      var presetPrimaryColors = {
        red: "#F5222D",
        volcano: "#FA541C",
        orange: "#FA8C16",
        gold: "#FAAD14",
        yellow: "#FADB14",
        lime: "#A0D911",
        green: "#52C41A",
        cyan: "#13C2C2",
        blue: "#1890FF",
        geekblue: "#2F54EB",
        purple: "#722ED1",
        magenta: "#EB2F96",
        grey: "#666666"
      };
      var presetPalettes = {};
      var presetDarkPalettes = {};
      Object.keys(presetPrimaryColors).forEach(function(key2) {
        presetPalettes[key2] = generate$1(presetPrimaryColors[key2]);
        presetPalettes[key2].primary = presetPalettes[key2][5];
        presetDarkPalettes[key2] = generate$1(presetPrimaryColors[key2], {
          theme: "dark",
          backgroundColor: "#141414"
        });
        presetDarkPalettes[key2].primary = presetDarkPalettes[key2][5];
      });
      const genControlHeight = (token2) => {
        const {
          controlHeight
        } = token2;
        return {
          controlHeightSM: controlHeight * 0.75,
          controlHeightXS: controlHeight * 0.5,
          controlHeightLG: controlHeight * 1.25
        };
      };
      const genControlHeight$1 = genControlHeight;
      function genSizeMapToken(token2) {
        const {
          sizeUnit,
          sizeStep
        } = token2;
        return {
          sizeXXL: sizeUnit * (sizeStep + 8),
          sizeXL: sizeUnit * (sizeStep + 4),
          sizeLG: sizeUnit * (sizeStep + 2),
          sizeMD: sizeUnit * (sizeStep + 1),
          sizeMS: sizeUnit * sizeStep,
          size: sizeUnit * sizeStep,
          sizeSM: sizeUnit * (sizeStep - 1),
          sizeXS: sizeUnit * (sizeStep - 2),
          sizeXXS: sizeUnit * (sizeStep - 3)
          // 4
        };
      }
      const defaultPresetColors = {
        blue: "#1677ff",
        purple: "#722ED1",
        cyan: "#13C2C2",
        green: "#52C41A",
        magenta: "#EB2F96",
        pink: "#eb2f96",
        red: "#F5222D",
        orange: "#FA8C16",
        yellow: "#FADB14",
        volcano: "#FA541C",
        geekblue: "#2F54EB",
        gold: "#FAAD14",
        lime: "#A0D911"
      };
      const seedToken = _extends(_extends({}, defaultPresetColors), {
        // Color
        colorPrimary: "#1677ff",
        colorSuccess: "#52c41a",
        colorWarning: "#faad14",
        colorError: "#ff4d4f",
        colorInfo: "#1677ff",
        colorTextBase: "",
        colorBgBase: "",
        // Font
        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
        fontSize: 14,
        // Line
        lineWidth: 1,
        lineType: "solid",
        // Motion
        motionUnit: 0.1,
        motionBase: 0,
        motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
        motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
        motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
        motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
        motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
        motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
        motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
        // Radius
        borderRadius: 6,
        // Size
        sizeUnit: 4,
        sizeStep: 4,
        sizePopupArrow: 16,
        // Control Base
        controlHeight: 32,
        // zIndex
        zIndexBase: 0,
        zIndexPopupBase: 1e3,
        // Image
        opacityImage: 1,
        // Wireframe
        wireframe: false
      });
      const defaultSeedToken = seedToken;
      function genColorMapToken(seed2, _ref) {
        let {
          generateColorPalettes: generateColorPalettes2,
          generateNeutralColorPalettes: generateNeutralColorPalettes2
        } = _ref;
        const {
          colorSuccess: colorSuccessBase,
          colorWarning: colorWarningBase,
          colorError: colorErrorBase,
          colorInfo: colorInfoBase,
          colorPrimary: colorPrimaryBase,
          colorBgBase,
          colorTextBase
        } = seed2;
        const primaryColors = generateColorPalettes2(colorPrimaryBase);
        const successColors = generateColorPalettes2(colorSuccessBase);
        const warningColors = generateColorPalettes2(colorWarningBase);
        const errorColors = generateColorPalettes2(colorErrorBase);
        const infoColors = generateColorPalettes2(colorInfoBase);
        const neutralColors = generateNeutralColorPalettes2(colorBgBase, colorTextBase);
        return _extends(_extends({}, neutralColors), {
          colorPrimaryBg: primaryColors[1],
          colorPrimaryBgHover: primaryColors[2],
          colorPrimaryBorder: primaryColors[3],
          colorPrimaryBorderHover: primaryColors[4],
          colorPrimaryHover: primaryColors[5],
          colorPrimary: primaryColors[6],
          colorPrimaryActive: primaryColors[7],
          colorPrimaryTextHover: primaryColors[8],
          colorPrimaryText: primaryColors[9],
          colorPrimaryTextActive: primaryColors[10],
          colorSuccessBg: successColors[1],
          colorSuccessBgHover: successColors[2],
          colorSuccessBorder: successColors[3],
          colorSuccessBorderHover: successColors[4],
          colorSuccessHover: successColors[4],
          colorSuccess: successColors[6],
          colorSuccessActive: successColors[7],
          colorSuccessTextHover: successColors[8],
          colorSuccessText: successColors[9],
          colorSuccessTextActive: successColors[10],
          colorErrorBg: errorColors[1],
          colorErrorBgHover: errorColors[2],
          colorErrorBorder: errorColors[3],
          colorErrorBorderHover: errorColors[4],
          colorErrorHover: errorColors[5],
          colorError: errorColors[6],
          colorErrorActive: errorColors[7],
          colorErrorTextHover: errorColors[8],
          colorErrorText: errorColors[9],
          colorErrorTextActive: errorColors[10],
          colorWarningBg: warningColors[1],
          colorWarningBgHover: warningColors[2],
          colorWarningBorder: warningColors[3],
          colorWarningBorderHover: warningColors[4],
          colorWarningHover: warningColors[4],
          colorWarning: warningColors[6],
          colorWarningActive: warningColors[7],
          colorWarningTextHover: warningColors[8],
          colorWarningText: warningColors[9],
          colorWarningTextActive: warningColors[10],
          colorInfoBg: infoColors[1],
          colorInfoBgHover: infoColors[2],
          colorInfoBorder: infoColors[3],
          colorInfoBorderHover: infoColors[4],
          colorInfoHover: infoColors[4],
          colorInfo: infoColors[6],
          colorInfoActive: infoColors[7],
          colorInfoTextHover: infoColors[8],
          colorInfoText: infoColors[9],
          colorInfoTextActive: infoColors[10],
          colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
          colorWhite: "#fff"
        });
      }
      const genRadius = (radiusBase) => {
        let radiusLG = radiusBase;
        let radiusSM = radiusBase;
        let radiusXS = radiusBase;
        let radiusOuter = radiusBase;
        if (radiusBase < 6 && radiusBase >= 5) {
          radiusLG = radiusBase + 1;
        } else if (radiusBase < 16 && radiusBase >= 6) {
          radiusLG = radiusBase + 2;
        } else if (radiusBase >= 16) {
          radiusLG = 16;
        }
        if (radiusBase < 7 && radiusBase >= 5) {
          radiusSM = 4;
        } else if (radiusBase < 8 && radiusBase >= 7) {
          radiusSM = 5;
        } else if (radiusBase < 14 && radiusBase >= 8) {
          radiusSM = 6;
        } else if (radiusBase < 16 && radiusBase >= 14) {
          radiusSM = 7;
        } else if (radiusBase >= 16) {
          radiusSM = 8;
        }
        if (radiusBase < 6 && radiusBase >= 2) {
          radiusXS = 1;
        } else if (radiusBase >= 6) {
          radiusXS = 2;
        }
        if (radiusBase > 4 && radiusBase < 8) {
          radiusOuter = 4;
        } else if (radiusBase >= 8) {
          radiusOuter = 6;
        }
        return {
          borderRadius: radiusBase > 16 ? 16 : radiusBase,
          borderRadiusXS: radiusXS,
          borderRadiusSM: radiusSM,
          borderRadiusLG: radiusLG,
          borderRadiusOuter: radiusOuter
        };
      };
      const genRadius$1 = genRadius;
      function genCommonMapToken(token2) {
        const {
          motionUnit,
          motionBase,
          borderRadius,
          lineWidth
        } = token2;
        return _extends({
          // motion
          motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
          motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
          motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
          // line
          lineWidthBold: lineWidth + 1
        }, genRadius$1(borderRadius));
      }
      const getAlphaColor$1 = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
      const getSolidColor = (baseColor, brightness) => {
        const instance = new TinyColor(baseColor);
        return instance.darken(brightness).toHexString();
      };
      const generateColorPalettes = (baseColor) => {
        const colors = generate$1(baseColor);
        return {
          1: colors[0],
          2: colors[1],
          3: colors[2],
          4: colors[3],
          5: colors[4],
          6: colors[5],
          7: colors[6],
          8: colors[4],
          9: colors[5],
          10: colors[6]
          // 8: colors[7],
          // 9: colors[8],
          // 10: colors[9],
        };
      };
      const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
        const colorBgBase = bgBaseColor || "#fff";
        const colorTextBase = textBaseColor || "#000";
        return {
          colorBgBase,
          colorTextBase,
          colorText: getAlphaColor$1(colorTextBase, 0.88),
          colorTextSecondary: getAlphaColor$1(colorTextBase, 0.65),
          colorTextTertiary: getAlphaColor$1(colorTextBase, 0.45),
          colorTextQuaternary: getAlphaColor$1(colorTextBase, 0.25),
          colorFill: getAlphaColor$1(colorTextBase, 0.15),
          colorFillSecondary: getAlphaColor$1(colorTextBase, 0.06),
          colorFillTertiary: getAlphaColor$1(colorTextBase, 0.04),
          colorFillQuaternary: getAlphaColor$1(colorTextBase, 0.02),
          colorBgLayout: getSolidColor(colorBgBase, 4),
          colorBgContainer: getSolidColor(colorBgBase, 0),
          colorBgElevated: getSolidColor(colorBgBase, 0),
          colorBgSpotlight: getAlphaColor$1(colorTextBase, 0.85),
          colorBorder: getSolidColor(colorBgBase, 15),
          colorBorderSecondary: getSolidColor(colorBgBase, 6)
        };
      };
      function getFontSizes(base) {
        const fontSizes = new Array(10).fill(null).map((_2, index2) => {
          const i2 = index2 - 1;
          const baseSize = base * Math.pow(2.71828, i2 / 5);
          const intSize = index2 > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
          return Math.floor(intSize / 2) * 2;
        });
        fontSizes[1] = base;
        return fontSizes.map((size) => {
          const height = size + 8;
          return {
            size,
            lineHeight: height / size
          };
        });
      }
      const genFontMapToken = (fontSize) => {
        const fontSizePairs = getFontSizes(fontSize);
        const fontSizes = fontSizePairs.map((pair) => pair.size);
        const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
        return {
          fontSizeSM: fontSizes[0],
          fontSize: fontSizes[1],
          fontSizeLG: fontSizes[2],
          fontSizeXL: fontSizes[3],
          fontSizeHeading1: fontSizes[6],
          fontSizeHeading2: fontSizes[5],
          fontSizeHeading3: fontSizes[4],
          fontSizeHeading4: fontSizes[3],
          fontSizeHeading5: fontSizes[2],
          lineHeight: lineHeights[1],
          lineHeightLG: lineHeights[2],
          lineHeightSM: lineHeights[0],
          lineHeightHeading1: lineHeights[6],
          lineHeightHeading2: lineHeights[5],
          lineHeightHeading3: lineHeights[4],
          lineHeightHeading4: lineHeights[3],
          lineHeightHeading5: lineHeights[2]
        };
      };
      const genFontMapToken$1 = genFontMapToken;
      function derivative(token2) {
        const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
          const colors = generate$1(token2[colorKey]);
          return new Array(10).fill(1).reduce((prev2, _2, i2) => {
            prev2[`${colorKey}-${i2 + 1}`] = colors[i2];
            return prev2;
          }, {});
        }).reduce((prev2, cur) => {
          prev2 = _extends(_extends({}, prev2), cur);
          return prev2;
        }, {});
        return _extends(_extends(_extends(_extends(_extends(_extends(_extends({}, token2), colorPalettes), genColorMapToken(token2, {
          generateColorPalettes,
          generateNeutralColorPalettes
        })), genFontMapToken$1(token2.fontSize)), genSizeMapToken(token2)), genControlHeight$1(token2)), genCommonMapToken(token2));
      }
      function isStableColor(color) {
        return color >= 0 && color <= 255;
      }
      function getAlphaColor(frontColor, backgroundColor) {
        const {
          r: fR,
          g: fG,
          b: fB,
          a: originAlpha
        } = new TinyColor(frontColor).toRgb();
        if (originAlpha < 1) {
          return frontColor;
        }
        const {
          r: bR,
          g: bG,
          b: bB
        } = new TinyColor(backgroundColor).toRgb();
        for (let fA = 0.01; fA <= 1; fA += 0.01) {
          const r2 = Math.round((fR - bR * (1 - fA)) / fA);
          const g2 = Math.round((fG - bG * (1 - fA)) / fA);
          const b2 = Math.round((fB - bB * (1 - fA)) / fA);
          if (isStableColor(r2) && isStableColor(g2) && isStableColor(b2)) {
            return new TinyColor({
              r: r2,
              g: g2,
              b: b2,
              a: Math.round(fA * 100) / 100
            }).toRgbString();
          }
        }
        return new TinyColor({
          r: fR,
          g: fG,
          b: fB,
          a: 1
        }).toRgbString();
      }
      var __rest$a = globalThis && globalThis.__rest || function(s2, e2) {
        var t2 = {};
        for (var p in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
            t2[p] = s2[p];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
            if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
              t2[p[i2]] = s2[p[i2]];
          }
        return t2;
      };
      function formatToken(derivativeToken) {
        const {
          override
        } = derivativeToken, restToken = __rest$a(derivativeToken, ["override"]);
        const overrideTokens = _extends({}, override);
        Object.keys(defaultSeedToken).forEach((token2) => {
          delete overrideTokens[token2];
        });
        const mergedToken = _extends(_extends({}, restToken), overrideTokens);
        const screenXS = 480;
        const screenSM = 576;
        const screenMD = 768;
        const screenLG = 992;
        const screenXL = 1200;
        const screenXXL = 1600;
        const screenXXXL = 2e3;
        const aliasToken = _extends(_extends(_extends({}, mergedToken), {
          colorLink: mergedToken.colorInfoText,
          colorLinkHover: mergedToken.colorInfoHover,
          colorLinkActive: mergedToken.colorInfoActive,
          // ============== Background ============== //
          colorFillContent: mergedToken.colorFillSecondary,
          colorFillContentHover: mergedToken.colorFill,
          colorFillAlter: mergedToken.colorFillQuaternary,
          colorBgContainerDisabled: mergedToken.colorFillTertiary,
          // ============== Split ============== //
          colorBorderBg: mergedToken.colorBgContainer,
          colorSplit: getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
          // ============== Text ============== //
          colorTextPlaceholder: mergedToken.colorTextQuaternary,
          colorTextDisabled: mergedToken.colorTextQuaternary,
          colorTextHeading: mergedToken.colorText,
          colorTextLabel: mergedToken.colorTextSecondary,
          colorTextDescription: mergedToken.colorTextTertiary,
          colorTextLightSolid: mergedToken.colorWhite,
          colorHighlight: mergedToken.colorError,
          colorBgTextHover: mergedToken.colorFillSecondary,
          colorBgTextActive: mergedToken.colorFill,
          colorIcon: mergedToken.colorTextTertiary,
          colorIconHover: mergedToken.colorText,
          colorErrorOutline: getAlphaColor(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
          colorWarningOutline: getAlphaColor(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
          // Font
          fontSizeIcon: mergedToken.fontSizeSM,
          // Control
          lineWidth: mergedToken.lineWidth,
          controlOutlineWidth: mergedToken.lineWidth * 2,
          // Checkbox size and expand icon size
          controlInteractiveSize: mergedToken.controlHeight / 2,
          controlItemBgHover: mergedToken.colorFillTertiary,
          controlItemBgActive: mergedToken.colorPrimaryBg,
          controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
          controlItemBgActiveDisabled: mergedToken.colorFill,
          controlTmpOutline: mergedToken.colorFillQuaternary,
          controlOutline: getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
          lineType: mergedToken.lineType,
          borderRadius: mergedToken.borderRadius,
          borderRadiusXS: mergedToken.borderRadiusXS,
          borderRadiusSM: mergedToken.borderRadiusSM,
          borderRadiusLG: mergedToken.borderRadiusLG,
          fontWeightStrong: 600,
          opacityLoading: 0.65,
          linkDecoration: "none",
          linkHoverDecoration: "none",
          linkFocusDecoration: "none",
          controlPaddingHorizontal: 12,
          controlPaddingHorizontalSM: 8,
          paddingXXS: mergedToken.sizeXXS,
          paddingXS: mergedToken.sizeXS,
          paddingSM: mergedToken.sizeSM,
          padding: mergedToken.size,
          paddingMD: mergedToken.sizeMD,
          paddingLG: mergedToken.sizeLG,
          paddingXL: mergedToken.sizeXL,
          paddingContentHorizontalLG: mergedToken.sizeLG,
          paddingContentVerticalLG: mergedToken.sizeMS,
          paddingContentHorizontal: mergedToken.sizeMS,
          paddingContentVertical: mergedToken.sizeSM,
          paddingContentHorizontalSM: mergedToken.size,
          paddingContentVerticalSM: mergedToken.sizeXS,
          marginXXS: mergedToken.sizeXXS,
          marginXS: mergedToken.sizeXS,
          marginSM: mergedToken.sizeSM,
          margin: mergedToken.size,
          marginMD: mergedToken.sizeMD,
          marginLG: mergedToken.sizeLG,
          marginXL: mergedToken.sizeXL,
          marginXXL: mergedToken.sizeXXL,
          boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
          boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
          boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
          screenXS,
          screenXSMin: screenXS,
          screenXSMax: screenSM - 1,
          screenSM,
          screenSMMin: screenSM,
          screenSMMax: screenMD - 1,
          screenMD,
          screenMDMin: screenMD,
          screenMDMax: screenLG - 1,
          screenLG,
          screenLGMin: screenLG,
          screenLGMax: screenXL - 1,
          screenXL,
          screenXLMin: screenXL,
          screenXLMax: screenXXL - 1,
          screenXXL,
          screenXXLMin: screenXXL,
          screenXXLMax: screenXXXL - 1,
          screenXXXL,
          screenXXXLMin: screenXXXL,
          // FIXME: component box-shadow, should be removed
          boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
          boxShadowCard: `
      0 1px 2px -2px ${new TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
          boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
          boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
          boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
          boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
          boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
          boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
          boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
          boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
        }), overrideTokens);
        return aliasToken;
      }
      const roundedArrow = (width, innerRadius, outerRadius, bgColor, boxShadow) => {
        const unitWidth = width / 2;
        const ax = 0;
        const ay = unitWidth;
        const bx = outerRadius * 1 / Math.sqrt(2);
        const by = unitWidth - outerRadius * (1 - 1 / Math.sqrt(2));
        const cx = unitWidth - innerRadius * (1 / Math.sqrt(2));
        const cy = outerRadius * (Math.sqrt(2) - 1) + innerRadius * (1 / Math.sqrt(2));
        const dx = 2 * unitWidth - cx;
        const dy = cy;
        const ex = 2 * unitWidth - bx;
        const ey = by;
        const fx = 2 * unitWidth - ax;
        const fy = ay;
        const shadowWidth = unitWidth * Math.sqrt(2) + outerRadius * (Math.sqrt(2) - 2);
        const polygonOffset = outerRadius * (Math.sqrt(2) - 1);
        return {
          pointerEvents: "none",
          width,
          height: width,
          overflow: "hidden",
          "&::after": {
            content: '""',
            position: "absolute",
            width: shadowWidth,
            height: shadowWidth,
            bottom: 0,
            insetInline: 0,
            margin: "auto",
            borderRadius: {
              _skip_check_: true,
              value: `0 0 ${innerRadius}px 0`
            },
            transform: "translateY(50%) rotate(-135deg)",
            boxShadow,
            zIndex: 0,
            background: "transparent"
          },
          "&::before": {
            position: "absolute",
            bottom: 0,
            insetInlineStart: 0,
            width,
            height: width / 2,
            background: bgColor,
            clipPath: {
              _multi_value_: true,
              value: [`polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`, `path('M ${ax} ${ay} A ${outerRadius} ${outerRadius} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${innerRadius} ${innerRadius} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${outerRadius} ${outerRadius} 0 0 0 ${fx} ${fy} Z')`]
            },
            content: '""'
          }
        };
      };
      function genPresetColor(token2, genCss) {
        return PresetColors.reduce((prev2, colorKey) => {
          const lightColor = token2[`${colorKey}-1`];
          const lightBorderColor = token2[`${colorKey}-3`];
          const darkColor = token2[`${colorKey}-6`];
          const textColor = token2[`${colorKey}-7`];
          return _extends(_extends({}, prev2), genCss(colorKey, {
            lightColor,
            lightBorderColor,
            darkColor,
            textColor
          }));
        }, {});
      }
      const textEllipsis = {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
      };
      const resetComponent = (token2) => ({
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        color: token2.colorText,
        fontSize: token2.fontSize,
        // font-variant: @font-variant-base;
        lineHeight: token2.lineHeight,
        listStyle: "none",
        // font-feature-settings: @font-feature-settings-base;
        fontFamily: token2.fontFamily
      });
      const resetIcon = () => ({
        display: "inline-flex",
        alignItems: "center",
        color: "inherit",
        fontStyle: "normal",
        lineHeight: 0,
        textAlign: "center",
        textTransform: "none",
        // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
        verticalAlign: "-0.125em",
        textRendering: "optimizeLegibility",
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        "> *": {
          lineHeight: 1
        },
        svg: {
          display: "inline-block"
        }
      });
      const clearFix = () => ({
        // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
        "&::before": {
          display: "table",
          content: '""'
        },
        "&::after": {
          // https://github.com/ant-design/ant-design/issues/21864
          display: "table",
          clear: "both",
          content: '""'
        }
      });
      const genLinkStyle = (token2) => ({
        a: {
          color: token2.colorLink,
          textDecoration: token2.linkDecoration,
          backgroundColor: "transparent",
          outline: "none",
          cursor: "pointer",
          transition: `color ${token2.motionDurationSlow}`,
          "-webkit-text-decoration-skip": "objects",
          "&:hover": {
            color: token2.colorLinkHover
          },
          "&:active": {
            color: token2.colorLinkActive
          },
          [`&:active,
  &:hover`]: {
            textDecoration: token2.linkHoverDecoration,
            outline: 0
          },
          // https://github.com/ant-design/ant-design/issues/22503
          "&:focus": {
            textDecoration: token2.linkFocusDecoration,
            outline: 0
          },
          "&[disabled]": {
            color: token2.colorTextDisabled,
            cursor: "not-allowed"
          }
        }
      });
      const genCommonStyle = (token2, componentPrefixCls) => {
        const {
          fontFamily,
          fontSize
        } = token2;
        const rootPrefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
        return {
          [rootPrefixSelector]: {
            fontFamily,
            fontSize,
            boxSizing: "border-box",
            "&::before, &::after": {
              boxSizing: "border-box"
            },
            [rootPrefixSelector]: {
              boxSizing: "border-box",
              "&::before, &::after": {
                boxSizing: "border-box"
              }
            }
          }
        };
      };
      const genFocusOutline = (token2) => ({
        outline: `${token2.lineWidthBold}px solid ${token2.colorPrimaryBorder}`,
        outlineOffset: 1,
        transition: "outline-offset 0s, outline 0s"
      });
      const genFocusStyle = (token2) => ({
        "&:focus-visible": _extends({}, genFocusOutline(token2))
      });
      function genComponentStyleHook(component, styleFn, getDefaultToken) {
        return (_prefixCls) => {
          const prefixCls = vue.computed(() => _prefixCls === null || _prefixCls === void 0 ? void 0 : _prefixCls.value);
          const [theme, token2, hashId] = useToken();
          const {
            getPrefixCls,
            iconPrefixCls
          } = useConfigContextInject();
          const rootPrefixCls = vue.computed(() => getPrefixCls());
          const sharedInfo = vue.computed(() => {
            return {
              theme: theme.value,
              token: token2.value,
              hashId: hashId.value,
              path: ["Shared", rootPrefixCls.value]
            };
          });
          useStyleRegister(sharedInfo, () => [{
            // Link
            "&": genLinkStyle(token2.value)
          }]);
          const componentInfo = vue.computed(() => {
            return {
              theme: theme.value,
              token: token2.value,
              hashId: hashId.value,
              path: [component, prefixCls.value, iconPrefixCls.value]
            };
          });
          return [useStyleRegister(componentInfo, () => {
            const {
              token: proxyToken,
              flush
            } = statisticToken(token2.value);
            const defaultComponentToken = typeof getDefaultToken === "function" ? getDefaultToken(proxyToken) : getDefaultToken;
            const mergedComponentToken = _extends(_extends({}, defaultComponentToken), token2.value[component]);
            const componentCls = `.${prefixCls.value}`;
            const mergedToken = merge(proxyToken, {
              componentCls,
              prefixCls: prefixCls.value,
              iconCls: `.${iconPrefixCls.value}`,
              antCls: `.${rootPrefixCls.value}`
            }, mergedComponentToken);
            const styleInterpolation = styleFn(mergedToken, {
              hashId: hashId.value,
              prefixCls: prefixCls.value,
              rootPrefixCls: rootPrefixCls.value,
              iconPrefixCls: iconPrefixCls.value,
              overrideComponentToken: token2.value[component]
            });
            flush(component, mergedComponentToken);
            return [genCommonStyle(token2.value, prefixCls.value), styleInterpolation];
          }), hashId];
        };
      }
      const enableStatistic = typeof CSSINJS_STATISTIC !== "undefined";
      let recording = true;
      function merge() {
        for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
          objs[_key] = arguments[_key];
        }
        if (!enableStatistic) {
          return _extends({}, ...objs);
        }
        recording = false;
        const ret = {};
        objs.forEach((obj) => {
          const keys2 = Object.keys(obj);
          keys2.forEach((key2) => {
            Object.defineProperty(ret, key2, {
              configurable: true,
              enumerable: true,
              get: () => obj[key2]
            });
          });
        });
        recording = true;
        return ret;
      }
      function noop$2() {
      }
      function statisticToken(token2) {
        let tokenKeys2;
        let proxy = token2;
        let flush = noop$2;
        if (enableStatistic) {
          tokenKeys2 = /* @__PURE__ */ new Set();
          proxy = new Proxy(token2, {
            get(obj, prop) {
              if (recording) {
                tokenKeys2.add(prop);
              }
              return obj[prop];
            }
          });
          flush = (componentName, componentToken) => {
            ({
              global: Array.from(tokenKeys2),
              component: componentToken
            });
          };
        }
        return {
          token: proxy,
          keys: tokenKeys2,
          flush
        };
      }
      function toReactive(objectRef) {
        if (!vue.isRef(objectRef))
          return vue.reactive(objectRef);
        const proxy = new Proxy({}, {
          get(_2, p, receiver) {
            return Reflect.get(objectRef.value, p, receiver);
          },
          set(_2, p, value) {
            objectRef.value[p] = value;
            return true;
          },
          deleteProperty(_2, p) {
            return Reflect.deleteProperty(objectRef.value, p);
          },
          has(_2, p) {
            return Reflect.has(objectRef.value, p);
          },
          ownKeys() {
            return Object.keys(objectRef.value);
          },
          getOwnPropertyDescriptor() {
            return {
              enumerable: true,
              configurable: true
            };
          }
        });
        return vue.reactive(proxy);
      }
      const defaultTheme = createTheme(derivative);
      const defaultConfig = {
        token: defaultSeedToken,
        hashed: true
      };
      const DesignTokenContextKey = Symbol("DesignTokenContext");
      const globalDesignTokenApi = vue.ref();
      const useDesignTokenProvider = (value) => {
        vue.provide(DesignTokenContextKey, value);
        vue.watchEffect(() => {
          globalDesignTokenApi.value = value;
        });
      };
      const DesignTokenProvider = vue.defineComponent({
        props: {
          value: objectType()
        },
        setup(props, _ref) {
          let {
            slots
          } = _ref;
          useDesignTokenProvider(toReactive(vue.computed(() => props.value)));
          return () => {
            var _a;
            return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
          };
        }
      });
      function useToken() {
        const designTokenContext = vue.inject(DesignTokenContextKey, globalDesignTokenApi.value || defaultConfig);
        const salt = vue.computed(() => `${version}-${designTokenContext.hashed || ""}`);
        const mergedTheme = vue.computed(() => designTokenContext.theme || defaultTheme);
        const cacheToken = useCacheToken(mergedTheme, vue.computed(() => [defaultSeedToken, designTokenContext.token]), vue.computed(() => ({
          salt: salt.value,
          override: _extends({
            override: designTokenContext.token
          }, designTokenContext.components),
          formatToken
        })));
        return [mergedTheme, vue.computed(() => cacheToken.value[0]), vue.computed(() => designTokenContext.hashed ? cacheToken.value[1] : "")];
      }
      const Empty$2 = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        setup() {
          const [, token2] = useToken();
          const themeStyle = vue.computed(() => {
            const bgColor = new TinyColor(token2.value.colorBgBase);
            if (bgColor.toHsl().l < 0.5) {
              return {
                opacity: 0.65
              };
            }
            return {};
          });
          return () => vue.createVNode("svg", {
            "style": themeStyle.value,
            "width": "184",
            "height": "152",
            "viewBox": "0 0 184 152",
            "xmlns": "http://www.w3.org/2000/svg"
          }, [vue.createVNode("g", {
            "fill": "none",
            "fill-rule": "evenodd"
          }, [vue.createVNode("g", {
            "transform": "translate(24 31.67)"
          }, [vue.createVNode("ellipse", {
            "fill-opacity": ".8",
            "fill": "#F5F5F7",
            "cx": "67.797",
            "cy": "106.89",
            "rx": "67.797",
            "ry": "12.668"
          }, null), vue.createVNode("path", {
            "d": "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
            "fill": "#AEB8C2"
          }, null), vue.createVNode("path", {
            "d": "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
            "fill": "url(#linearGradient-1)",
            "transform": "translate(13.56)"
          }, null), vue.createVNode("path", {
            "d": "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
            "fill": "#F5F5F7"
          }, null), vue.createVNode("path", {
            "d": "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
            "fill": "#DCE0E6"
          }, null)]), vue.createVNode("path", {
            "d": "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
            "fill": "#DCE0E6"
          }, null), vue.createVNode("g", {
            "transform": "translate(149.65 15.383)",
            "fill": "#FFF"
          }, [vue.createVNode("ellipse", {
            "cx": "20.654",
            "cy": "3.167",
            "rx": "2.849",
            "ry": "2.815"
          }, null), vue.createVNode("path", {
            "d": "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
          }, null)])])]);
        }
      });
      Empty$2.PRESENTED_IMAGE_DEFAULT = true;
      const DefaultEmptyImg = Empty$2;
      const Simple = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        setup() {
          const [, token2] = useToken();
          const color = vue.computed(() => {
            const {
              colorFill,
              colorFillTertiary,
              colorFillQuaternary,
              colorBgContainer
            } = token2.value;
            return {
              borderColor: new TinyColor(colorFill).onBackground(colorBgContainer).toHexString(),
              shadowColor: new TinyColor(colorFillTertiary).onBackground(colorBgContainer).toHexString(),
              contentColor: new TinyColor(colorFillQuaternary).onBackground(colorBgContainer).toHexString()
            };
          });
          return () => vue.createVNode("svg", {
            "width": "64",
            "height": "41",
            "viewBox": "0 0 64 41",
            "xmlns": "http://www.w3.org/2000/svg"
          }, [vue.createVNode("g", {
            "transform": "translate(0 1)",
            "fill": "none",
            "fill-rule": "evenodd"
          }, [vue.createVNode("ellipse", {
            "fill": color.value.shadowColor,
            "cx": "32",
            "cy": "33",
            "rx": "32",
            "ry": "7"
          }, null), vue.createVNode("g", {
            "fill-rule": "nonzero",
            "stroke": color.value.borderColor
          }, [vue.createVNode("path", {
            "d": "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
          }, null), vue.createVNode("path", {
            "d": "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
            "fill": color.value.contentColor
          }, null)])])]);
        }
      });
      Simple.PRESENTED_IMAGE_SIMPLE = true;
      const SimpleEmptyImg = Simple;
      const genSharedEmptyStyle = (token2) => {
        const {
          componentCls,
          margin,
          marginXS,
          marginXL,
          fontSize,
          lineHeight
        } = token2;
        return {
          [componentCls]: {
            marginInline: marginXS,
            fontSize,
            lineHeight,
            textAlign: "center",
            // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
            [`${componentCls}-image`]: {
              height: token2.emptyImgHeight,
              marginBottom: marginXS,
              opacity: token2.opacityImage,
              img: {
                height: "100%"
              },
              svg: {
                height: "100%",
                margin: "auto"
              }
            },
            // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
            [`${componentCls}-footer`]: {
              marginTop: margin
            },
            "&-normal": {
              marginBlock: marginXL,
              color: token2.colorTextDisabled,
              [`${componentCls}-image`]: {
                height: token2.emptyImgHeightMD
              }
            },
            "&-small": {
              marginBlock: marginXS,
              color: token2.colorTextDisabled,
              [`${componentCls}-image`]: {
                height: token2.emptyImgHeightSM
              }
            }
          }
        };
      };
      const useStyle$d = genComponentStyleHook("Empty", (token2) => {
        const {
          componentCls,
          controlHeightLG
        } = token2;
        const emptyToken = merge(token2, {
          emptyImgCls: `${componentCls}-img`,
          emptyImgHeight: controlHeightLG * 2.5,
          emptyImgHeightMD: controlHeightLG,
          emptyImgHeightSM: controlHeightLG * 0.875
        });
        return [genSharedEmptyStyle(emptyToken)];
      });
      var __rest$9 = globalThis && globalThis.__rest || function(s2, e2) {
        var t2 = {};
        for (var p in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
            t2[p] = s2[p];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
            if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
              t2[p[i2]] = s2[p[i2]];
          }
        return t2;
      };
      const defaultEmptyImg = vue.createVNode(DefaultEmptyImg, null, null);
      const simpleEmptyImg = vue.createVNode(SimpleEmptyImg, null, null);
      const emptyProps = () => ({
        prefixCls: String,
        imageStyle: objectType(),
        image: anyType(),
        description: anyType()
      });
      const Empty = vue.defineComponent({
        name: "AEmpty",
        compatConfig: {
          MODE: 3
        },
        inheritAttrs: false,
        props: emptyProps(),
        setup(props, _ref) {
          let {
            slots = {},
            attrs
          } = _ref;
          const {
            direction,
            prefixCls: prefixClsRef
          } = useConfigInject("empty", props);
          const [wrapSSR, hashId] = useStyle$d(prefixClsRef);
          return () => {
            var _a, _b;
            const prefixCls = prefixClsRef.value;
            const _c = _extends(_extends({}, props), attrs), {
              image = ((_a = slots.image) === null || _a === void 0 ? void 0 : _a.call(slots)) || defaultEmptyImg,
              description = ((_b = slots.description) === null || _b === void 0 ? void 0 : _b.call(slots)) || void 0,
              imageStyle,
              class: className = ""
            } = _c, restProps = __rest$9(_c, ["image", "description", "imageStyle", "class"]);
            return wrapSSR(vue.createVNode(LocaleReceiver, {
              "componentName": "Empty",
              "children": (locale2) => {
                const des = typeof description !== "undefined" ? description : locale2.description;
                const alt = typeof des === "string" ? des : "empty";
                let imageNode = null;
                if (typeof image === "string") {
                  imageNode = vue.createVNode("img", {
                    "alt": alt,
                    "src": image
                  }, null);
                } else {
                  imageNode = image;
                }
                return vue.createVNode("div", _objectSpread2$1({
                  "class": classNames(prefixCls, className, hashId.value, {
                    [`${prefixCls}-normal`]: image === simpleEmptyImg,
                    [`${prefixCls}-rtl`]: direction.value === "rtl"
                  })
                }, restProps), [vue.createVNode("div", {
                  "class": `${prefixCls}-image`,
                  "style": imageStyle
                }, [imageNode]), des && vue.createVNode("p", {
                  "class": `${prefixCls}-description`
                }, [des]), slots.default && vue.createVNode("div", {
                  "class": `${prefixCls}-footer`
                }, [filterEmpty(slots.default())])]);
              }
            }, null));
          };
        }
      });
      Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
      Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
      const Empty$1 = withInstall(Empty);
      const DefaultRenderEmpty = (props) => {
        const {
          prefixCls
        } = useConfigInject("empty", props);
        const renderHtml = (componentName) => {
          switch (componentName) {
            case "Table":
            case "List":
              return vue.createVNode(Empty$1, {
                "image": Empty$1.PRESENTED_IMAGE_SIMPLE
              }, null);
            case "Select":
            case "TreeSelect":
            case "Cascader":
            case "Transfer":
            case "Mentions":
              return vue.createVNode(Empty$1, {
                "image": Empty$1.PRESENTED_IMAGE_SIMPLE,
                "class": `${prefixCls.value}-small`
              }, null);
            default:
              return vue.createVNode(Empty$1, null, null);
          }
        };
        return renderHtml(props.componentName);
      };
      function renderEmpty(componentName) {
        return vue.createVNode(DefaultRenderEmpty, {
          "componentName": componentName
        }, null);
      }
      const SizeContextKey = Symbol("SizeContextKey");
      const useInjectSize = () => {
        return vue.inject(SizeContextKey, vue.ref(void 0));
      };
      const useProviderSize = (size) => {
        const parentSize = useInjectSize();
        vue.provide(SizeContextKey, vue.computed(() => size.value || parentSize.value));
        return size;
      };
      const useConfigInject = (name, props) => {
        const sizeContext = useInjectSize();
        const disabledContext = useInjectDisabled();
        const configProvider = vue.inject(configProviderKey, _extends(_extends({}, defaultConfigProvider), {
          renderEmpty: (name2) => vue.h(DefaultRenderEmpty, {
            componentName: name2
          })
        }));
        const prefixCls = vue.computed(() => configProvider.getPrefixCls(name, props.prefixCls));
        const direction = vue.computed(() => {
          var _a, _b;
          return (_a = props.direction) !== null && _a !== void 0 ? _a : (_b = configProvider.direction) === null || _b === void 0 ? void 0 : _b.value;
        });
        const iconPrefixCls = vue.computed(() => {
          var _a;
          return (_a = props.iconPrefixCls) !== null && _a !== void 0 ? _a : configProvider.iconPrefixCls.value;
        });
        const rootPrefixCls = vue.computed(() => configProvider.getPrefixCls());
        const autoInsertSpaceInButton = vue.computed(() => {
          var _a;
          return (_a = configProvider.autoInsertSpaceInButton) === null || _a === void 0 ? void 0 : _a.value;
        });
        const renderEmpty2 = configProvider.renderEmpty;
        const space = configProvider.space;
        const pageHeader = configProvider.pageHeader;
        const form = configProvider.form;
        const getTargetContainer = vue.computed(() => {
          var _a, _b;
          return (_a = props.getTargetContainer) !== null && _a !== void 0 ? _a : (_b = configProvider.getTargetContainer) === null || _b === void 0 ? void 0 : _b.value;
        });
        const getPopupContainer = vue.computed(() => {
          var _a, _b;
          return (_a = props.getPopupContainer) !== null && _a !== void 0 ? _a : (_b = configProvider.getPopupContainer) === null || _b === void 0 ? void 0 : _b.value;
        });
        const dropdownMatchSelectWidth = vue.computed(() => {
          var _a, _b;
          return (_a = props.dropdownMatchSelectWidth) !== null && _a !== void 0 ? _a : (_b = configProvider.dropdownMatchSelectWidth) === null || _b === void 0 ? void 0 : _b.value;
        });
        const virtual = vue.computed(() => {
          var _a;
          return (props.virtual === void 0 ? ((_a = configProvider.virtual) === null || _a === void 0 ? void 0 : _a.value) !== false : props.virtual !== false) && dropdownMatchSelectWidth.value !== false;
        });
        const size = vue.computed(() => props.size || sizeContext.value);
        const autocomplete = vue.computed(() => {
          var _a, _b, _c;
          return (_a = props.autocomplete) !== null && _a !== void 0 ? _a : (_c = (_b = configProvider.input) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.autocomplete;
        });
        const disabled = vue.computed(() => {
          var _a;
          return (_a = props.disabled) !== null && _a !== void 0 ? _a : disabledContext.value;
        });
        const csp = vue.computed(() => {
          var _a;
          return (_a = props.csp) !== null && _a !== void 0 ? _a : configProvider.csp;
        });
        return {
          configProvider,
          prefixCls,
          direction,
          size,
          getTargetContainer,
          getPopupContainer,
          space,
          pageHeader,
          form,
          autoInsertSpaceInButton,
          renderEmpty: renderEmpty2,
          virtual,
          dropdownMatchSelectWidth,
          rootPrefixCls,
          getPrefixCls: configProvider.getPrefixCls,
          autocomplete,
          csp,
          iconPrefixCls,
          disabled,
          select: configProvider.select
        };
      };
      function omit(obj, fields) {
        const shallowCopy = _extends({}, obj);
        for (let i2 = 0; i2 < fields.length; i2 += 1) {
          const key2 = fields[i2];
          delete shallowCopy[key2];
        }
        return shallowCopy;
      }
      function e(e2, t2) {
        for (var n2 = 0; n2 < t2.length; n2++) {
          var r2 = t2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
        }
      }
      function t(t2, n2, r2) {
        return n2 && e(t2.prototype, n2), r2 && e(t2, r2), t2;
      }
      function n() {
        return (n = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var r2 in n2)
              Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
          }
          return e2;
        }).apply(this, arguments);
      }
      function r(e2, t2) {
        e2.prototype = Object.create(t2.prototype), e2.prototype.constructor = e2, e2.__proto__ = t2;
      }
      function i(e2, t2) {
        if (null == e2)
          return {};
        var n2, r2, i2 = {}, o2 = Object.keys(e2);
        for (r2 = 0; r2 < o2.length; r2++)
          t2.indexOf(n2 = o2[r2]) >= 0 || (i2[n2] = e2[n2]);
        return i2;
      }
      function o(e2) {
        return 1 == (null != (t2 = e2) && "object" == typeof t2 && false === Array.isArray(t2)) && "[object Object]" === Object.prototype.toString.call(e2);
        var t2;
      }
      var u = Object.prototype, a = u.toString, f = u.hasOwnProperty, c = /^\s*function (\w+)/;
      function l(e2) {
        var t2, n2 = null !== (t2 = null == e2 ? void 0 : e2.type) && void 0 !== t2 ? t2 : e2;
        if (n2) {
          var r2 = n2.toString().match(c);
          return r2 ? r2[1] : "";
        }
        return "";
      }
      var s = function(e2) {
        var t2, n2;
        return false !== o(e2) && "function" == typeof (t2 = e2.constructor) && false !== o(n2 = t2.prototype) && false !== n2.hasOwnProperty("isPrototypeOf");
      }, v = function(e2) {
        return e2;
      }, y = v;
      var d = function(e2, t2) {
        return f.call(e2, t2);
      }, h = Number.isInteger || function(e2) {
        return "number" == typeof e2 && isFinite(e2) && Math.floor(e2) === e2;
      }, b = Array.isArray || function(e2) {
        return "[object Array]" === a.call(e2);
      }, O = function(e2) {
        return "[object Function]" === a.call(e2);
      }, g = function(e2) {
        return s(e2) && d(e2, "_vueTypes_name");
      }, m = function(e2) {
        return s(e2) && (d(e2, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t2) {
          return d(e2, t2);
        }));
      };
      function j(e2, t2) {
        return Object.defineProperty(e2.bind(t2), "__original", { value: e2 });
      }
      function _(e2, t2, n2) {
        var r2;
        void 0 === n2 && (n2 = false);
        var i2 = true, o2 = "";
        r2 = s(e2) ? e2 : { type: e2 };
        var u2 = g(r2) ? r2._vueTypes_name + " - " : "";
        if (m(r2) && null !== r2.type) {
          if (void 0 === r2.type || true === r2.type)
            return i2;
          if (!r2.required && void 0 === t2)
            return i2;
          b(r2.type) ? (i2 = r2.type.some(function(e3) {
            return true === _(e3, t2, true);
          }), o2 = r2.type.map(function(e3) {
            return l(e3);
          }).join(" or ")) : i2 = "Array" === (o2 = l(r2)) ? b(t2) : "Object" === o2 ? s(t2) : "String" === o2 || "Number" === o2 || "Boolean" === o2 || "Function" === o2 ? function(e3) {
            if (null == e3)
              return "";
            var t3 = e3.constructor.toString().match(c);
            return t3 ? t3[1] : "";
          }(t2) === o2 : t2 instanceof r2.type;
        }
        if (!i2) {
          var a2 = u2 + 'value "' + t2 + '" should be of type "' + o2 + '"';
          return false === n2 ? (y(a2), false) : a2;
        }
        if (d(r2, "validator") && O(r2.validator)) {
          var f2 = y, v2 = [];
          if (y = function(e3) {
            v2.push(e3);
          }, i2 = r2.validator(t2), y = f2, !i2) {
            var p = (v2.length > 1 ? "* " : "") + v2.join("\n* ");
            return v2.length = 0, false === n2 ? (y(p), i2) : p;
          }
        }
        return i2;
      }
      function T(e2, t2) {
        var n2 = Object.defineProperties(t2, { _vueTypes_name: { value: e2, writable: true }, isRequired: { get: function() {
          return this.required = true, this;
        } }, def: { value: function(e3) {
          return void 0 !== e3 || this.default ? O(e3) || true === _(this, e3, true) ? (this.default = b(e3) ? function() {
            return [].concat(e3);
          } : s(e3) ? function() {
            return Object.assign({}, e3);
          } : e3, this) : (y(this._vueTypes_name + ' - invalid default value: "' + e3 + '"'), this) : this;
        } } }), r2 = n2.validator;
        return O(r2) && (n2.validator = j(r2, n2)), n2;
      }
      function w(e2, t2) {
        var n2 = T(e2, t2);
        return Object.defineProperty(n2, "validate", { value: function(e3) {
          return O(this.validator) && y(this._vueTypes_name + " - calling .validate() will overwrite the current custom validator function. Validator info:\n" + JSON.stringify(this)), this.validator = j(e3, this), this;
        } });
      }
      function k(e2, t2, n2) {
        var r2, o2, u2 = (r2 = t2, o2 = {}, Object.getOwnPropertyNames(r2).forEach(function(e3) {
          o2[e3] = Object.getOwnPropertyDescriptor(r2, e3);
        }), Object.defineProperties({}, o2));
        if (u2._vueTypes_name = e2, !s(n2))
          return u2;
        var a2, f2, c2 = n2.validator, l2 = i(n2, ["validator"]);
        if (O(c2)) {
          var v2 = u2.validator;
          v2 && (v2 = null !== (f2 = (a2 = v2).__original) && void 0 !== f2 ? f2 : a2), u2.validator = j(v2 ? function(e3) {
            return v2.call(this, e3) && c2.call(this, e3);
          } : c2, u2);
        }
        return Object.assign(u2, l2);
      }
      function P(e2) {
        return e2.replace(/^(?!\s*$)/gm, "  ");
      }
      var x = function() {
        return w("any", {});
      }, A = function() {
        return w("function", { type: Function });
      }, E = function() {
        return w("boolean", { type: Boolean });
      }, N = function() {
        return w("string", { type: String });
      }, q = function() {
        return w("number", { type: Number });
      }, S = function() {
        return w("array", { type: Array });
      }, V = function() {
        return w("object", { type: Object });
      }, F = function() {
        return T("integer", { type: Number, validator: function(e2) {
          return h(e2);
        } });
      }, D = function() {
        return T("symbol", { validator: function(e2) {
          return "symbol" == typeof e2;
        } });
      };
      function L(e2, t2) {
        if (void 0 === t2 && (t2 = "custom validation failed"), "function" != typeof e2)
          throw new TypeError("[VueTypes error]: You must provide a function as argument");
        return T(e2.name || "<<anonymous function>>", { validator: function(n2) {
          var r2 = e2(n2);
          return r2 || y(this._vueTypes_name + " - " + t2), r2;
        } });
      }
      function Y(e2) {
        if (!b(e2))
          throw new TypeError("[VueTypes error]: You must provide an array as argument.");
        var t2 = 'oneOf - value should be one of "' + e2.join('", "') + '".', n2 = e2.reduce(function(e3, t3) {
          if (null != t3) {
            var n3 = t3.constructor;
            -1 === e3.indexOf(n3) && e3.push(n3);
          }
          return e3;
        }, []);
        return T("oneOf", { type: n2.length > 0 ? n2 : void 0, validator: function(n3) {
          var r2 = -1 !== e2.indexOf(n3);
          return r2 || y(t2), r2;
        } });
      }
      function B(e2) {
        if (!b(e2))
          throw new TypeError("[VueTypes error]: You must provide an array as argument");
        for (var t2 = false, n2 = [], r2 = 0; r2 < e2.length; r2 += 1) {
          var i2 = e2[r2];
          if (m(i2)) {
            if (g(i2) && "oneOf" === i2._vueTypes_name) {
              n2 = n2.concat(i2.type);
              continue;
            }
            if (O(i2.validator) && (t2 = true), true !== i2.type && i2.type) {
              n2 = n2.concat(i2.type);
              continue;
            }
          }
          n2.push(i2);
        }
        return n2 = n2.filter(function(e3, t3) {
          return n2.indexOf(e3) === t3;
        }), T("oneOfType", t2 ? { type: n2, validator: function(t3) {
          var n3 = [], r3 = e2.some(function(e3) {
            var r4 = _(g(e3) && "oneOf" === e3._vueTypes_name ? e3.type || null : e3, t3, true);
            return "string" == typeof r4 && n3.push(r4), true === r4;
          });
          return r3 || y("oneOfType - provided value does not match any of the " + n3.length + " passed-in validators:\n" + P(n3.join("\n"))), r3;
        } } : { type: n2 });
      }
      function I(e2) {
        return T("arrayOf", { type: Array, validator: function(t2) {
          var n2, r2 = t2.every(function(t3) {
            return true === (n2 = _(e2, t3, true));
          });
          return r2 || y("arrayOf - value validation error:\n" + P(n2)), r2;
        } });
      }
      function J(e2) {
        return T("instanceOf", { type: e2 });
      }
      function M(e2) {
        return T("objectOf", { type: Object, validator: function(t2) {
          var n2, r2 = Object.keys(t2).every(function(r3) {
            return true === (n2 = _(e2, t2[r3], true));
          });
          return r2 || y("objectOf - value validation error:\n" + P(n2)), r2;
        } });
      }
      function R(e2) {
        var t2 = Object.keys(e2), n2 = t2.filter(function(t3) {
          var n3;
          return !!(null === (n3 = e2[t3]) || void 0 === n3 ? void 0 : n3.required);
        }), r2 = T("shape", { type: Object, validator: function(r3) {
          var i2 = this;
          if (!s(r3))
            return false;
          var o2 = Object.keys(r3);
          if (n2.length > 0 && n2.some(function(e3) {
            return -1 === o2.indexOf(e3);
          })) {
            var u2 = n2.filter(function(e3) {
              return -1 === o2.indexOf(e3);
            });
            return y(1 === u2.length ? 'shape - required property "' + u2[0] + '" is not defined.' : 'shape - required properties "' + u2.join('", "') + '" are not defined.'), false;
          }
          return o2.every(function(n3) {
            if (-1 === t2.indexOf(n3))
              return true === i2._vueTypes_isLoose || (y('shape - shape definition does not include a "' + n3 + '" property. Allowed keys: "' + t2.join('", "') + '".'), false);
            var o3 = _(e2[n3], r3[n3], true);
            return "string" == typeof o3 && y('shape - "' + n3 + '" property validation error:\n ' + P(o3)), true === o3;
          });
        } });
        return Object.defineProperty(r2, "_vueTypes_isLoose", { writable: true, value: false }), Object.defineProperty(r2, "loose", { get: function() {
          return this._vueTypes_isLoose = true, this;
        } }), r2;
      }
      var $ = function() {
        function e2() {
        }
        return e2.extend = function(e3) {
          var t2 = this;
          if (b(e3))
            return e3.forEach(function(e4) {
              return t2.extend(e4);
            }), this;
          var n2 = e3.name, r2 = e3.validate, o2 = void 0 !== r2 && r2, u2 = e3.getter, a2 = void 0 !== u2 && u2, f2 = i(e3, ["name", "validate", "getter"]);
          if (d(this, n2))
            throw new TypeError('[VueTypes error]: Type "' + n2 + '" already defined');
          var c2, l2 = f2.type;
          return g(l2) ? (delete f2.type, Object.defineProperty(this, n2, a2 ? { get: function() {
            return k(n2, l2, f2);
          } } : { value: function() {
            var e4, t3 = k(n2, l2, f2);
            return t3.validator && (t3.validator = (e4 = t3.validator).bind.apply(e4, [t3].concat([].slice.call(arguments)))), t3;
          } })) : (c2 = a2 ? { get: function() {
            var e4 = Object.assign({}, f2);
            return o2 ? w(n2, e4) : T(n2, e4);
          }, enumerable: true } : { value: function() {
            var e4, t3, r3 = Object.assign({}, f2);
            return e4 = o2 ? w(n2, r3) : T(n2, r3), r3.validator && (e4.validator = (t3 = r3.validator).bind.apply(t3, [e4].concat([].slice.call(arguments)))), e4;
          }, enumerable: true }, Object.defineProperty(this, n2, c2));
        }, t(e2, null, [{ key: "any", get: function() {
          return x();
        } }, { key: "func", get: function() {
          return A().def(this.defaults.func);
        } }, { key: "bool", get: function() {
          return E().def(this.defaults.bool);
        } }, { key: "string", get: function() {
          return N().def(this.defaults.string);
        } }, { key: "number", get: function() {
          return q().def(this.defaults.number);
        } }, { key: "array", get: function() {
          return S().def(this.defaults.array);
        } }, { key: "object", get: function() {
          return V().def(this.defaults.object);
        } }, { key: "integer", get: function() {
          return F().def(this.defaults.integer);
        } }, { key: "symbol", get: function() {
          return D();
        } }]), e2;
      }();
      function z(e2) {
        var i2;
        return void 0 === e2 && (e2 = { func: function() {
        }, bool: true, string: "", number: 0, array: function() {
          return [];
        }, object: function() {
          return {};
        }, integer: 0 }), (i2 = function(i3) {
          function o2() {
            return i3.apply(this, arguments) || this;
          }
          return r(o2, i3), t(o2, null, [{ key: "sensibleDefaults", get: function() {
            return n({}, this.defaults);
          }, set: function(t2) {
            this.defaults = false !== t2 ? n({}, true !== t2 ? t2 : e2) : {};
          } }]), o2;
        }($)).defaults = n({}, e2), i2;
      }
      $.defaults = {}, $.custom = L, $.oneOf = Y, $.instanceOf = J, $.oneOfType = B, $.arrayOf = I, $.objectOf = M, $.shape = R, $.utils = { validate: function(e2, t2) {
        return true === _(t2, e2, true);
      }, toType: function(e2, t2, n2) {
        return void 0 === n2 && (n2 = false), n2 ? w(e2, t2) : T(e2, t2);
      } };
      (function(e2) {
        function t2() {
          return e2.apply(this, arguments) || this;
        }
        return r(t2, e2), t2;
      })(z());
      const PropTypes = z({
        func: void 0,
        bool: void 0,
        string: void 0,
        number: void 0,
        array: void 0,
        object: void 0,
        integer: void 0
      });
      PropTypes.extend([{
        name: "looseBool",
        getter: true,
        type: Boolean,
        default: void 0
      }, {
        name: "style",
        getter: true,
        type: [String, Object],
        default: void 0
      }, {
        name: "VueNode",
        getter: true,
        type: null
      }]);
      const PropTypes$1 = PropTypes;
      const devWarning = (valid, component, message2) => {
        warningOnce(valid, `[ant-design-vue: ${component}] ${message2}`);
      };
      function returnEmptyString() {
        return "";
      }
      function returnDocument(element) {
        if (element) {
          return element.ownerDocument;
        }
        return window.document;
      }
      function noop$1() {
      }
      const triggerProps = () => ({
        action: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.arrayOf(PropTypes$1.string)]).def([]),
        showAction: PropTypes$1.any.def([]),
        hideAction: PropTypes$1.any.def([]),
        getPopupClassNameFromAlign: PropTypes$1.any.def(returnEmptyString),
        onPopupVisibleChange: Function,
        afterPopupVisibleChange: PropTypes$1.func.def(noop$1),
        popup: PropTypes$1.any,
        popupStyle: {
          type: Object,
          default: void 0
        },
        prefixCls: PropTypes$1.string.def("rc-trigger-popup"),
        popupClassName: PropTypes$1.string.def(""),
        popupPlacement: String,
        builtinPlacements: PropTypes$1.object,
        popupTransitionName: String,
        popupAnimation: PropTypes$1.any,
        mouseEnterDelay: PropTypes$1.number.def(0),
        mouseLeaveDelay: PropTypes$1.number.def(0.1),
        zIndex: Number,
        focusDelay: PropTypes$1.number.def(0),
        blurDelay: PropTypes$1.number.def(0.15),
        getPopupContainer: Function,
        getDocument: PropTypes$1.func.def(returnDocument),
        forceRender: {
          type: Boolean,
          default: void 0
        },
        destroyPopupOnHide: {
          type: Boolean,
          default: false
        },
        mask: {
          type: Boolean,
          default: false
        },
        maskClosable: {
          type: Boolean,
          default: true
        },
        // onPopupAlign: PropTypes.func.def(noop),
        popupAlign: PropTypes$1.object.def(() => ({})),
        popupVisible: {
          type: Boolean,
          default: void 0
        },
        defaultPopupVisible: {
          type: Boolean,
          default: false
        },
        maskTransitionName: String,
        maskAnimation: String,
        stretch: String,
        alignPoint: {
          type: Boolean,
          default: void 0
        },
        autoDestroy: {
          type: Boolean,
          default: false
        },
        mobile: Object,
        getTriggerDOMNode: Function
      });
      const innerProps = {
        visible: Boolean,
        prefixCls: String,
        zIndex: Number,
        destroyPopupOnHide: Boolean,
        forceRender: Boolean,
        // Legacy Motion
        animation: [String, Object],
        transitionName: String,
        // Measure
        stretch: {
          type: String
        },
        // Align
        align: {
          type: Object
        },
        point: {
          type: Object
        },
        getRootDomNode: {
          type: Function
        },
        getClassNameFromAlign: {
          type: Function
        },
        onMouseenter: {
          type: Function
        },
        onMouseleave: {
          type: Function
        },
        onMousedown: {
          type: Function
        },
        onTouchstart: {
          type: Function
        }
      };
      const mobileProps = _extends(_extends({}, innerProps), {
        mobile: {
          type: Object
        }
      });
      const popupProps = _extends(_extends({}, innerProps), {
        mask: Boolean,
        mobile: {
          type: Object
        },
        maskAnimation: String,
        maskTransitionName: String
      });
      function getMotion$1(_ref) {
        let {
          prefixCls,
          animation,
          transitionName: transitionName2
        } = _ref;
        if (animation) {
          return {
            name: `${prefixCls}-${animation}`
          };
        }
        if (transitionName2) {
          return {
            name: transitionName2
          };
        }
        return {};
      }
      function Mask$1(props) {
        const {
          prefixCls,
          visible,
          zIndex,
          mask,
          maskAnimation,
          maskTransitionName
        } = props;
        if (!mask) {
          return null;
        }
        let motion = {};
        if (maskTransitionName || maskAnimation) {
          motion = getMotion$1({
            prefixCls,
            transitionName: maskTransitionName,
            animation: maskAnimation
          });
        }
        return vue.createVNode(vue.Transition, _objectSpread2$1({
          "appear": true
        }, motion), {
          default: () => [vue.withDirectives(vue.createVNode("div", {
            "style": {
              zIndex
            },
            "class": `${prefixCls}-mask`
          }, null), [[vue.resolveDirective("if"), visible]])]
        });
      }
      Mask$1.displayName = "Mask";
      const MobilePopupInner = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "MobilePopupInner",
        inheritAttrs: false,
        props: mobileProps,
        emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
        setup(props, _ref) {
          let {
            expose,
            slots
          } = _ref;
          const elementRef = vue.ref();
          expose({
            forceAlign: () => {
            },
            getElement: () => elementRef.value
          });
          return () => {
            var _a;
            const {
              zIndex,
              visible,
              prefixCls,
              mobile: {
                popupClassName,
                popupStyle,
                popupMotion = {},
                popupRender
              } = {}
            } = props;
            const mergedStyle = _extends({
              zIndex
            }, popupStyle);
            let childNode = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
            if (childNode.length > 1) {
              childNode = vue.createVNode("div", {
                "class": `${prefixCls}-content`
              }, [childNode]);
            }
            if (popupRender) {
              childNode = popupRender(childNode);
            }
            const mergedClassName = classNames(prefixCls, popupClassName);
            return vue.createVNode(vue.Transition, _objectSpread2$1({
              "ref": elementRef
            }, popupMotion), {
              default: () => [visible ? vue.createVNode("div", {
                "class": mergedClassName,
                "style": mergedStyle
              }, [childNode]) : null]
            });
          };
        }
      });
      var __awaiter = globalThis && globalThis.__awaiter || function(thisArg, _arguments, P2, generator) {
        function adopt(value) {
          return value instanceof P2 ? value : new P2(function(resolve) {
            resolve(value);
          });
        }
        return new (P2 || (P2 = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e2) {
              reject(e2);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e2) {
              reject(e2);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      const StatusQueue = ["measure", "align", null, "motion"];
      const useVisibleStatus = (visible, doMeasure) => {
        const status = vue.shallowRef(null);
        const rafRef = vue.shallowRef();
        const destroyRef = vue.shallowRef(false);
        function setStatus(nextStatus) {
          if (!destroyRef.value) {
            status.value = nextStatus;
          }
        }
        function cancelRaf() {
          wrapperRaf.cancel(rafRef.value);
        }
        function goNextStatus(callback) {
          cancelRaf();
          rafRef.value = wrapperRaf(() => {
            let newStatus = status.value;
            switch (status.value) {
              case "align":
                newStatus = "motion";
                break;
              case "motion":
                newStatus = "stable";
                break;
            }
            setStatus(newStatus);
            callback === null || callback === void 0 ? void 0 : callback();
          });
        }
        vue.watch(visible, () => {
          setStatus("measure");
        }, {
          immediate: true,
          flush: "post"
        });
        vue.onMounted(() => {
          vue.watch(status, () => {
            switch (status.value) {
              case "measure":
                doMeasure();
                break;
            }
            if (status.value) {
              rafRef.value = wrapperRaf(() => __awaiter(void 0, void 0, void 0, function* () {
                const index2 = StatusQueue.indexOf(status.value);
                const nextStatus = StatusQueue[index2 + 1];
                if (nextStatus && index2 !== -1) {
                  setStatus(nextStatus);
                }
              }));
            }
          }, {
            immediate: true,
            flush: "post"
          });
        });
        vue.onBeforeUnmount(() => {
          destroyRef.value = true;
          cancelRaf();
        });
        return [status, goNextStatus];
      };
      const useStretchStyle = (stretch) => {
        const targetSize = vue.shallowRef({
          width: 0,
          height: 0
        });
        function measureStretch(element) {
          targetSize.value = {
            width: element.offsetWidth,
            height: element.offsetHeight
          };
        }
        const style2 = vue.computed(() => {
          const sizeStyle = {};
          if (stretch.value) {
            const {
              width,
              height
            } = targetSize.value;
            if (stretch.value.indexOf("height") !== -1 && height) {
              sizeStyle.height = `${height}px`;
            } else if (stretch.value.indexOf("minHeight") !== -1 && height) {
              sizeStyle.minHeight = `${height}px`;
            }
            if (stretch.value.indexOf("width") !== -1 && width) {
              sizeStyle.width = `${width}px`;
            } else if (stretch.value.indexOf("minWidth") !== -1 && width) {
              sizeStyle.minWidth = `${width}px`;
            }
          }
          return sizeStyle;
        });
        return [style2, measureStretch];
      };
      function ownKeys(object, enumerableOnly) {
        var keys2 = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys2.push.apply(keys2, symbols);
        }
        return keys2;
      }
      function _objectSpread2(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = null != arguments[i2] ? arguments[i2] : {};
          i2 % 2 ? ownKeys(Object(source), true).forEach(function(key2) {
            _defineProperty$p(target, key2, source[key2]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key2) {
            Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
          });
        }
        return target;
      }
      function _typeof(obj) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
          return typeof obj2;
        } : function(obj2) {
          return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        }, _typeof(obj);
      }
      function _defineProperty$p(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var vendorPrefix;
      var jsCssMap = {
        Webkit: "-webkit-",
        Moz: "-moz-",
        // IE did it wrong again ...
        ms: "-ms-",
        O: "-o-"
      };
      function getVendorPrefix() {
        if (vendorPrefix !== void 0) {
          return vendorPrefix;
        }
        vendorPrefix = "";
        var style2 = document.createElement("p").style;
        var testProp = "Transform";
        for (var key2 in jsCssMap) {
          if (key2 + testProp in style2) {
            vendorPrefix = key2;
          }
        }
        return vendorPrefix;
      }
      function getTransitionName$1() {
        return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : "transitionProperty";
      }
      function getTransformName() {
        return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : "transform";
      }
      function setTransitionProperty(node2, value) {
        var name = getTransitionName$1();
        if (name) {
          node2.style[name] = value;
          if (name !== "transitionProperty") {
            node2.style.transitionProperty = value;
          }
        }
      }
      function setTransform(node2, value) {
        var name = getTransformName();
        if (name) {
          node2.style[name] = value;
          if (name !== "transform") {
            node2.style.transform = value;
          }
        }
      }
      function getTransitionProperty(node2) {
        return node2.style.transitionProperty || node2.style[getTransitionName$1()];
      }
      function getTransformXY(node2) {
        var style2 = window.getComputedStyle(node2, null);
        var transform = style2.getPropertyValue("transform") || style2.getPropertyValue(getTransformName());
        if (transform && transform !== "none") {
          var matrix = transform.replace(/[^0-9\-.,]/g, "").split(",");
          return {
            x: parseFloat(matrix[12] || matrix[4], 0),
            y: parseFloat(matrix[13] || matrix[5], 0)
          };
        }
        return {
          x: 0,
          y: 0
        };
      }
      var matrix2d = /matrix\((.*)\)/;
      var matrix3d = /matrix3d\((.*)\)/;
      function setTransformXY(node2, xy) {
        var style2 = window.getComputedStyle(node2, null);
        var transform = style2.getPropertyValue("transform") || style2.getPropertyValue(getTransformName());
        if (transform && transform !== "none") {
          var arr;
          var match2d = transform.match(matrix2d);
          if (match2d) {
            match2d = match2d[1];
            arr = match2d.split(",").map(function(item) {
              return parseFloat(item, 10);
            });
            arr[4] = xy.x;
            arr[5] = xy.y;
            setTransform(node2, "matrix(".concat(arr.join(","), ")"));
          } else {
            var match3d = transform.match(matrix3d)[1];
            arr = match3d.split(",").map(function(item) {
              return parseFloat(item, 10);
            });
            arr[12] = xy.x;
            arr[13] = xy.y;
            setTransform(node2, "matrix3d(".concat(arr.join(","), ")"));
          }
        } else {
          setTransform(node2, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
        }
      }
      var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
      var getComputedStyleX;
      function forceRelayout(elem) {
        var originalStyle = elem.style.display;
        elem.style.display = "none";
        elem.offsetHeight;
        elem.style.display = originalStyle;
      }
      function css(el, name, v2) {
        var value = v2;
        if (_typeof(name) === "object") {
          for (var i2 in name) {
            if (name.hasOwnProperty(i2)) {
              css(el, i2, name[i2]);
            }
          }
          return void 0;
        }
        if (typeof value !== "undefined") {
          if (typeof value === "number") {
            value = "".concat(value, "px");
          }
          el.style[name] = value;
          return void 0;
        }
        return getComputedStyleX(el, name);
      }
      function getClientPosition(elem) {
        var box2;
        var x2;
        var y2;
        var doc = elem.ownerDocument;
        var body = doc.body;
        var docElem = doc && doc.documentElement;
        box2 = elem.getBoundingClientRect();
        x2 = Math.floor(box2.left);
        y2 = Math.floor(box2.top);
        x2 -= docElem.clientLeft || body.clientLeft || 0;
        y2 -= docElem.clientTop || body.clientTop || 0;
        return {
          left: x2,
          top: y2
        };
      }
      function getScroll$1(w2, top) {
        var ret = w2["page".concat(top ? "Y" : "X", "Offset")];
        var method = "scroll".concat(top ? "Top" : "Left");
        if (typeof ret !== "number") {
          var d2 = w2.document;
          ret = d2.documentElement[method];
          if (typeof ret !== "number") {
            ret = d2.body[method];
          }
        }
        return ret;
      }
      function getScrollLeft(w2) {
        return getScroll$1(w2);
      }
      function getScrollTop(w2) {
        return getScroll$1(w2, true);
      }
      function getOffset$1(el) {
        var pos = getClientPosition(el);
        var doc = el.ownerDocument;
        var w2 = doc.defaultView || doc.parentWindow;
        pos.left += getScrollLeft(w2);
        pos.top += getScrollTop(w2);
        return pos;
      }
      function isWindow(obj) {
        return obj !== null && obj !== void 0 && obj == obj.window;
      }
      function getDocument(node2) {
        if (isWindow(node2)) {
          return node2.document;
        }
        if (node2.nodeType === 9) {
          return node2;
        }
        return node2.ownerDocument;
      }
      function _getComputedStyle(elem, name, cs) {
        var computedStyle = cs;
        var val = "";
        var d2 = getDocument(elem);
        computedStyle = computedStyle || d2.defaultView.getComputedStyle(elem, null);
        if (computedStyle) {
          val = computedStyle.getPropertyValue(name) || computedStyle[name];
        }
        return val;
      }
      var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), "i");
      var RE_POS = /^(top|right|bottom|left)$/;
      var CURRENT_STYLE = "currentStyle";
      var RUNTIME_STYLE = "runtimeStyle";
      var LEFT = "left";
      var PX = "px";
      function _getComputedStyleIE(elem, name) {
        var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
        if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
          var style2 = elem.style;
          var left = style2[LEFT];
          var rsLeft = elem[RUNTIME_STYLE][LEFT];
          elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
          style2[LEFT] = name === "fontSize" ? "1em" : ret || 0;
          ret = style2.pixelLeft + PX;
          style2[LEFT] = left;
          elem[RUNTIME_STYLE][LEFT] = rsLeft;
        }
        return ret === "" ? "auto" : ret;
      }
      if (typeof window !== "undefined") {
        getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
      }
      function getOffsetDirection(dir, option) {
        if (dir === "left") {
          return option.useCssRight ? "right" : dir;
        }
        return option.useCssBottom ? "bottom" : dir;
      }
      function oppositeOffsetDirection(dir) {
        if (dir === "left") {
          return "right";
        } else if (dir === "right") {
          return "left";
        } else if (dir === "top") {
          return "bottom";
        } else if (dir === "bottom") {
          return "top";
        }
      }
      function setLeftTop(elem, offset2, option) {
        if (css(elem, "position") === "static") {
          elem.style.position = "relative";
        }
        var presetH = -999;
        var presetV = -999;
        var horizontalProperty = getOffsetDirection("left", option);
        var verticalProperty = getOffsetDirection("top", option);
        var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
        var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
        if (horizontalProperty !== "left") {
          presetH = 999;
        }
        if (verticalProperty !== "top") {
          presetV = 999;
        }
        var originalTransition = "";
        var originalOffset = getOffset$1(elem);
        if ("left" in offset2 || "top" in offset2) {
          originalTransition = getTransitionProperty(elem) || "";
          setTransitionProperty(elem, "none");
        }
        if ("left" in offset2) {
          elem.style[oppositeHorizontalProperty] = "";
          elem.style[horizontalProperty] = "".concat(presetH, "px");
        }
        if ("top" in offset2) {
          elem.style[oppositeVerticalProperty] = "";
          elem.style[verticalProperty] = "".concat(presetV, "px");
        }
        forceRelayout(elem);
        var old = getOffset$1(elem);
        var originalStyle = {};
        for (var key2 in offset2) {
          if (offset2.hasOwnProperty(key2)) {
            var dir = getOffsetDirection(key2, option);
            var preset = key2 === "left" ? presetH : presetV;
            var off = originalOffset[key2] - old[key2];
            if (dir === key2) {
              originalStyle[dir] = preset + off;
            } else {
              originalStyle[dir] = preset - off;
            }
          }
        }
        css(elem, originalStyle);
        forceRelayout(elem);
        if ("left" in offset2 || "top" in offset2) {
          setTransitionProperty(elem, originalTransition);
        }
        var ret = {};
        for (var _key in offset2) {
          if (offset2.hasOwnProperty(_key)) {
            var _dir = getOffsetDirection(_key, option);
            var _off = offset2[_key] - originalOffset[_key];
            if (_key === _dir) {
              ret[_dir] = originalStyle[_dir] + _off;
            } else {
              ret[_dir] = originalStyle[_dir] - _off;
            }
          }
        }
        css(elem, ret);
      }
      function setTransform$1(elem, offset2) {
        var originalOffset = getOffset$1(elem);
        var originalXY = getTransformXY(elem);
        var resultXY = {
          x: originalXY.x,
          y: originalXY.y
        };
        if ("left" in offset2) {
          resultXY.x = originalXY.x + offset2.left - originalOffset.left;
        }
        if ("top" in offset2) {
          resultXY.y = originalXY.y + offset2.top - originalOffset.top;
        }
        setTransformXY(elem, resultXY);
      }
      function setOffset(elem, offset2, option) {
        if (option.ignoreShake) {
          var oriOffset = getOffset$1(elem);
          var oLeft = oriOffset.left.toFixed(0);
          var oTop = oriOffset.top.toFixed(0);
          var tLeft = offset2.left.toFixed(0);
          var tTop = offset2.top.toFixed(0);
          if (oLeft === tLeft && oTop === tTop) {
            return;
          }
        }
        if (option.useCssRight || option.useCssBottom) {
          setLeftTop(elem, offset2, option);
        } else if (option.useCssTransform && getTransformName() in document.body.style) {
          setTransform$1(elem, offset2);
        } else {
          setLeftTop(elem, offset2, option);
        }
      }
      function each(arr, fn) {
        for (var i2 = 0; i2 < arr.length; i2++) {
          fn(arr[i2]);
        }
      }
      function isBorderBoxFn(elem) {
        return getComputedStyleX(elem, "boxSizing") === "border-box";
      }
      var BOX_MODELS = ["margin", "border", "padding"];
      var CONTENT_INDEX = -1;
      var PADDING_INDEX = 2;
      var BORDER_INDEX = 1;
      var MARGIN_INDEX = 0;
      function swap(elem, options, callback) {
        var old = {};
        var style2 = elem.style;
        var name;
        for (name in options) {
          if (options.hasOwnProperty(name)) {
            old[name] = style2[name];
            style2[name] = options[name];
          }
        }
        callback.call(elem);
        for (name in options) {
          if (options.hasOwnProperty(name)) {
            style2[name] = old[name];
          }
        }
      }
      function getPBMWidth(elem, props, which) {
        var value = 0;
        var prop;
        var j2;
        var i2;
        for (j2 = 0; j2 < props.length; j2++) {
          prop = props[j2];
          if (prop) {
            for (i2 = 0; i2 < which.length; i2++) {
              var cssProp = void 0;
              if (prop === "border") {
                cssProp = "".concat(prop).concat(which[i2], "Width");
              } else {
                cssProp = prop + which[i2];
              }
              value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
            }
          }
        }
        return value;
      }
      var domUtils = {
        getParent: function getParent2(element) {
          var parent = element;
          do {
            if (parent.nodeType === 11 && parent.host) {
              parent = parent.host;
            } else {
              parent = parent.parentNode;
            }
          } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);
          return parent;
        }
      };
      each(["Width", "Height"], function(name) {
        domUtils["doc".concat(name)] = function(refWin) {
          var d2 = refWin.document;
          return Math.max(
            // firefox chrome documentElement.scrollHeight< body.scrollHeight
            // ie standard mode : documentElement.scrollHeight> body.scrollHeight
            d2.documentElement["scroll".concat(name)],
            // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
            d2.body["scroll".concat(name)],
            domUtils["viewport".concat(name)](d2)
          );
        };
        domUtils["viewport".concat(name)] = function(win) {
          var prop = "client".concat(name);
          var doc = win.document;
          var body = doc.body;
          var documentElement = doc.documentElement;
          var documentElementProp = documentElement[prop];
          return doc.compatMode === "CSS1Compat" && documentElementProp || body && body[prop] || documentElementProp;
        };
      });
      function getWH(elem, name, ex) {
        var extra = ex;
        if (isWindow(elem)) {
          return name === "width" ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
        } else if (elem.nodeType === 9) {
          return name === "width" ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
        }
        var which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
        var borderBoxValue = name === "width" ? Math.floor(elem.getBoundingClientRect().width) : Math.floor(elem.getBoundingClientRect().height);
        var isBorderBox = isBorderBoxFn(elem);
        var cssBoxValue = 0;
        if (borderBoxValue === null || borderBoxValue === void 0 || borderBoxValue <= 0) {
          borderBoxValue = void 0;
          cssBoxValue = getComputedStyleX(elem, name);
          if (cssBoxValue === null || cssBoxValue === void 0 || Number(cssBoxValue) < 0) {
            cssBoxValue = elem.style[name] || 0;
          }
          cssBoxValue = Math.floor(parseFloat(cssBoxValue)) || 0;
        }
        if (extra === void 0) {
          extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
        }
        var borderBoxValueOrIsBorderBox = borderBoxValue !== void 0 || isBorderBox;
        var val = borderBoxValue || cssBoxValue;
        if (extra === CONTENT_INDEX) {
          if (borderBoxValueOrIsBorderBox) {
            return val - getPBMWidth(elem, ["border", "padding"], which);
          }
          return cssBoxValue;
        } else if (borderBoxValueOrIsBorderBox) {
          if (extra === BORDER_INDEX) {
            return val;
          }
          return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ["border"], which) : getPBMWidth(elem, ["margin"], which));
        }
        return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
      }
      var cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      };
      function getWHIgnoreDisplay() {
        for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
          args[_key2] = arguments[_key2];
        }
        var val;
        var elem = args[0];
        if (elem.offsetWidth !== 0) {
          val = getWH.apply(void 0, args);
        } else {
          swap(elem, cssShow, function() {
            val = getWH.apply(void 0, args);
          });
        }
        return val;
      }
      each(["width", "height"], function(name) {
        var first = name.charAt(0).toUpperCase() + name.slice(1);
        domUtils["outer".concat(first)] = function(el, includeMargin) {
          return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
        };
        var which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
        domUtils[name] = function(elem, v2) {
          var val = v2;
          if (val !== void 0) {
            if (elem) {
              var isBorderBox = isBorderBoxFn(elem);
              if (isBorderBox) {
                val += getPBMWidth(elem, ["padding", "border"], which);
              }
              return css(elem, name, val);
            }
            return void 0;
          }
          return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
        };
      });
      function mix(to, from2) {
        for (var i2 in from2) {
          if (from2.hasOwnProperty(i2)) {
            to[i2] = from2[i2];
          }
        }
        return to;
      }
      var utils = {
        getWindow: function getWindow(node2) {
          if (node2 && node2.document && node2.setTimeout) {
            return node2;
          }
          var doc = node2.ownerDocument || node2;
          return doc.defaultView || doc.parentWindow;
        },
        getDocument,
        offset: function offset2(el, value, option) {
          if (typeof value !== "undefined") {
            setOffset(el, value, option || {});
          } else {
            return getOffset$1(el);
          }
        },
        isWindow,
        each,
        css,
        clone: function clone(obj) {
          var i2;
          var ret = {};
          for (i2 in obj) {
            if (obj.hasOwnProperty(i2)) {
              ret[i2] = obj[i2];
            }
          }
          var overflow = obj.overflow;
          if (overflow) {
            for (i2 in obj) {
              if (obj.hasOwnProperty(i2)) {
                ret.overflow[i2] = obj.overflow[i2];
              }
            }
          }
          return ret;
        },
        mix,
        getWindowScrollLeft: function getWindowScrollLeft(w2) {
          return getScrollLeft(w2);
        },
        getWindowScrollTop: function getWindowScrollTop(w2) {
          return getScrollTop(w2);
        },
        merge: function merge2() {
          var ret = {};
          for (var i2 = 0; i2 < arguments.length; i2++) {
            utils.mix(ret, i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2]);
          }
          return ret;
        },
        viewportWidth: 0,
        viewportHeight: 0
      };
      mix(utils, domUtils);
      var getParent$1 = utils.getParent;
      function getOffsetParent(element) {
        if (utils.isWindow(element) || element.nodeType === 9) {
          return null;
        }
        var doc = utils.getDocument(element);
        var body = doc.body;
        var parent;
        var positionStyle = utils.css(element, "position");
        var skipStatic = positionStyle === "fixed" || positionStyle === "absolute";
        if (!skipStatic) {
          return element.nodeName.toLowerCase() === "html" ? null : getParent$1(element);
        }
        for (parent = getParent$1(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent$1(parent)) {
          positionStyle = utils.css(parent, "position");
          if (positionStyle !== "static") {
            return parent;
          }
        }
        return null;
      }
      var getParent$1$1 = utils.getParent;
      function isAncestorFixed(element) {
        if (utils.isWindow(element) || element.nodeType === 9) {
          return false;
        }
        var doc = utils.getDocument(element);
        var body = doc.body;
        var parent = null;
        for (
          parent = getParent$1$1(element);
          // 修复元素位于 document.documentElement 下导致崩溃问题
          parent && parent !== body && parent !== doc;
          parent = getParent$1$1(parent)
        ) {
          var positionStyle = utils.css(parent, "position");
          if (positionStyle === "fixed") {
            return true;
          }
        }
        return false;
      }
      function getVisibleRectForElement(element, alwaysByViewport) {
        var visibleRect = {
          left: 0,
          right: Infinity,
          top: 0,
          bottom: Infinity
        };
        var el = getOffsetParent(element);
        var doc = utils.getDocument(element);
        var win = doc.defaultView || doc.parentWindow;
        var body = doc.body;
        var documentElement = doc.documentElement;
        while (el) {
          if ((navigator.userAgent.indexOf("MSIE") === -1 || el.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
          // viewport. In some browsers, el.offsetParent may be
          // document.documentElement, so check for that too.
          el !== body && el !== documentElement && utils.css(el, "overflow") !== "visible") {
            var pos = utils.offset(el);
            pos.left += el.clientLeft;
            pos.top += el.clientTop;
            visibleRect.top = Math.max(visibleRect.top, pos.top);
            visibleRect.right = Math.min(
              visibleRect.right,
              // consider area without scrollBar
              pos.left + el.clientWidth
            );
            visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
            visibleRect.left = Math.max(visibleRect.left, pos.left);
          } else if (el === body || el === documentElement) {
            break;
          }
          el = getOffsetParent(el);
        }
        var originalPosition = null;
        if (!utils.isWindow(element) && element.nodeType !== 9) {
          originalPosition = element.style.position;
          var position2 = utils.css(element, "position");
          if (position2 === "absolute") {
            element.style.position = "fixed";
          }
        }
        var scrollX = utils.getWindowScrollLeft(win);
        var scrollY = utils.getWindowScrollTop(win);
        var viewportWidth = utils.viewportWidth(win);
        var viewportHeight = utils.viewportHeight(win);
        var documentWidth = documentElement.scrollWidth;
        var documentHeight = documentElement.scrollHeight;
        var bodyStyle = window.getComputedStyle(body);
        if (bodyStyle.overflowX === "hidden") {
          documentWidth = win.innerWidth;
        }
        if (bodyStyle.overflowY === "hidden") {
          documentHeight = win.innerHeight;
        }
        if (element.style) {
          element.style.position = originalPosition;
        }
        if (alwaysByViewport || isAncestorFixed(element)) {
          visibleRect.left = Math.max(visibleRect.left, scrollX);
          visibleRect.top = Math.max(visibleRect.top, scrollY);
          visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
          visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
        } else {
          var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
          visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
          var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
          visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
        }
        return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
      }
      function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
        var pos = utils.clone(elFuturePos);
        var size = {
          width: elRegion.width,
          height: elRegion.height
        };
        if (overflow.adjustX && pos.left < visibleRect.left) {
          pos.left = visibleRect.left;
        }
        if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
          size.width -= pos.left + size.width - visibleRect.right;
        }
        if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
          pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
        }
        if (overflow.adjustY && pos.top < visibleRect.top) {
          pos.top = visibleRect.top;
        }
        if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
          size.height -= pos.top + size.height - visibleRect.bottom;
        }
        if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
          pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
        }
        return utils.mix(pos, size);
      }
      function getRegion(node2) {
        var offset2;
        var w2;
        var h2;
        if (!utils.isWindow(node2) && node2.nodeType !== 9) {
          offset2 = utils.offset(node2);
          w2 = utils.outerWidth(node2);
          h2 = utils.outerHeight(node2);
        } else {
          var win = utils.getWindow(node2);
          offset2 = {
            left: utils.getWindowScrollLeft(win),
            top: utils.getWindowScrollTop(win)
          };
          w2 = utils.viewportWidth(win);
          h2 = utils.viewportHeight(win);
        }
        offset2.width = w2;
        offset2.height = h2;
        return offset2;
      }
      function getAlignOffset(region, align) {
        var V2 = align.charAt(0);
        var H = align.charAt(1);
        var w2 = region.width;
        var h2 = region.height;
        var x2 = region.left;
        var y2 = region.top;
        if (V2 === "c") {
          y2 += h2 / 2;
        } else if (V2 === "b") {
          y2 += h2;
        }
        if (H === "c") {
          x2 += w2 / 2;
        } else if (H === "r") {
          x2 += w2;
        }
        return {
          left: x2,
          top: y2
        };
      }
      function getElFuturePos(elRegion, refNodeRegion, points, offset2, targetOffset2) {
        var p1 = getAlignOffset(refNodeRegion, points[1]);
        var p2 = getAlignOffset(elRegion, points[0]);
        var diff = [p2.left - p1.left, p2.top - p1.top];
        return {
          left: Math.round(elRegion.left - diff[0] + offset2[0] - targetOffset2[0]),
          top: Math.round(elRegion.top - diff[1] + offset2[1] - targetOffset2[1])
        };
      }
      function isFailX(elFuturePos, elRegion, visibleRect) {
        return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
      }
      function isFailY(elFuturePos, elRegion, visibleRect) {
        return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
      }
      function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
        return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
      }
      function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
        return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
      }
      function flip(points, reg, map) {
        var ret = [];
        utils.each(points, function(p) {
          ret.push(p.replace(reg, function(m2) {
            return map[m2];
          }));
        });
        return ret;
      }
      function flipOffset(offset2, index2) {
        offset2[index2] = -offset2[index2];
        return offset2;
      }
      function convertOffset(str, offsetLen) {
        var n2;
        if (/%$/.test(str)) {
          n2 = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
        } else {
          n2 = parseInt(str, 10);
        }
        return n2 || 0;
      }
      function normalizeOffset(offset2, el) {
        offset2[0] = convertOffset(offset2[0], el.width);
        offset2[1] = convertOffset(offset2[1], el.height);
      }
      function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
        var points = align.points;
        var offset2 = align.offset || [0, 0];
        var targetOffset2 = align.targetOffset || [0, 0];
        var overflow = align.overflow;
        var source = align.source || el;
        offset2 = [].concat(offset2);
        targetOffset2 = [].concat(targetOffset2);
        overflow = overflow || {};
        var newOverflowCfg = {};
        var fail = 0;
        var alwaysByViewport = !!(overflow && overflow.alwaysByViewport);
        var visibleRect = getVisibleRectForElement(source, alwaysByViewport);
        var elRegion = getRegion(source);
        normalizeOffset(offset2, elRegion);
        normalizeOffset(targetOffset2, tgtRegion);
        var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset2, targetOffset2);
        var newElRegion = utils.merge(elRegion, elFuturePos);
        if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
          if (overflow.adjustX) {
            if (isFailX(elFuturePos, elRegion, visibleRect)) {
              var newPoints = flip(points, /[lr]/gi, {
                l: "r",
                r: "l"
              });
              var newOffset = flipOffset(offset2, 0);
              var newTargetOffset = flipOffset(targetOffset2, 0);
              var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);
              if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
                fail = 1;
                points = newPoints;
                offset2 = newOffset;
                targetOffset2 = newTargetOffset;
              }
            }
          }
          if (overflow.adjustY) {
            if (isFailY(elFuturePos, elRegion, visibleRect)) {
              var _newPoints = flip(points, /[tb]/gi, {
                t: "b",
                b: "t"
              });
              var _newOffset = flipOffset(offset2, 1);
              var _newTargetOffset = flipOffset(targetOffset2, 1);
              var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);
              if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
                fail = 1;
                points = _newPoints;
                offset2 = _newOffset;
                targetOffset2 = _newTargetOffset;
              }
            }
          }
          if (fail) {
            elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset2, targetOffset2);
            utils.mix(newElRegion, elFuturePos);
          }
          var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
          var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
          if (isStillFailX || isStillFailY) {
            var _newPoints2 = points;
            if (isStillFailX) {
              _newPoints2 = flip(points, /[lr]/gi, {
                l: "r",
                r: "l"
              });
            }
            if (isStillFailY) {
              _newPoints2 = flip(points, /[tb]/gi, {
                t: "b",
                b: "t"
              });
            }
            points = _newPoints2;
            offset2 = align.offset || [0, 0];
            targetOffset2 = align.targetOffset || [0, 0];
          }
          newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
          newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;
          if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
            newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
          }
        }
        if (newElRegion.width !== elRegion.width) {
          utils.css(source, "width", utils.width(source) + newElRegion.width - elRegion.width);
        }
        if (newElRegion.height !== elRegion.height) {
          utils.css(source, "height", utils.height(source) + newElRegion.height - elRegion.height);
        }
        utils.offset(source, {
          left: newElRegion.left,
          top: newElRegion.top
        }, {
          useCssRight: align.useCssRight,
          useCssBottom: align.useCssBottom,
          useCssTransform: align.useCssTransform,
          ignoreShake: align.ignoreShake
        });
        return {
          points,
          offset: offset2,
          targetOffset: targetOffset2,
          overflow: newOverflowCfg
        };
      }
      function isOutOfVisibleRect(target, alwaysByViewport) {
        var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
        var targetRegion = getRegion(target);
        return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
      }
      function alignElement(el, refNode, align) {
        var target = align.target || refNode;
        var refNodeRegion = getRegion(target);
        var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
        return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
      }
      alignElement.__getOffsetParent = getOffsetParent;
      alignElement.__getVisibleRectForElement = getVisibleRectForElement;
      function alignPoint(el, tgtPoint, align) {
        var pageX;
        var pageY;
        var doc = utils.getDocument(el);
        var win = doc.defaultView || doc.parentWindow;
        var scrollX = utils.getWindowScrollLeft(win);
        var scrollY = utils.getWindowScrollTop(win);
        var viewportWidth = utils.viewportWidth(win);
        var viewportHeight = utils.viewportHeight(win);
        if ("pageX" in tgtPoint) {
          pageX = tgtPoint.pageX;
        } else {
          pageX = scrollX + tgtPoint.clientX;
        }
        if ("pageY" in tgtPoint) {
          pageY = tgtPoint.pageY;
        } else {
          pageY = scrollY + tgtPoint.clientY;
        }
        var tgtRegion = {
          left: pageX,
          top: pageY,
          width: 0,
          height: 0
        };
        var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;
        var points = [align.points[0], "cc"];
        return doAlign(el, tgtRegion, _objectSpread2(_objectSpread2({}, align), {}, {
          points
        }), pointInView);
      }
      function cloneElement(vnode) {
        let nodeProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        let override = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        let mergeRef = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        let ele = vnode;
        if (Array.isArray(vnode)) {
          ele = filterEmpty(vnode)[0];
        }
        if (!ele) {
          return null;
        }
        const node2 = vue.cloneVNode(ele, nodeProps, mergeRef);
        node2.props = override ? _extends(_extends({}, node2.props), nodeProps) : node2.props;
        warning$2(typeof node2.props.class !== "object");
        return node2;
      }
      const isVisible = (element) => {
        if (!element) {
          return false;
        }
        if (element.offsetParent) {
          return true;
        }
        if (element.getBBox) {
          const box2 = element.getBBox();
          if (box2.width || box2.height) {
            return true;
          }
        }
        if (element.getBoundingClientRect) {
          const box2 = element.getBoundingClientRect();
          if (box2.width || box2.height) {
            return true;
          }
        }
        return false;
      };
      function isSamePoint(prev2, next2) {
        if (prev2 === next2)
          return true;
        if (!prev2 || !next2)
          return false;
        if ("pageX" in next2 && "pageY" in next2) {
          return prev2.pageX === next2.pageX && prev2.pageY === next2.pageY;
        }
        if ("clientX" in next2 && "clientY" in next2) {
          return prev2.clientX === next2.clientX && prev2.clientY === next2.clientY;
        }
        return false;
      }
      function restoreFocus(activeElement, container) {
        if (activeElement !== document.activeElement && contains(container, activeElement) && typeof activeElement.focus === "function") {
          activeElement.focus();
        }
      }
      function monitorResize(element, callback) {
        let prevWidth = null;
        let prevHeight = null;
        function onResize(_ref) {
          let [{
            target
          }] = _ref;
          if (!document.documentElement.contains(target))
            return;
          const {
            width,
            height
          } = target.getBoundingClientRect();
          const fixedWidth = Math.floor(width);
          const fixedHeight = Math.floor(height);
          if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
            Promise.resolve().then(() => {
              callback({
                width: fixedWidth,
                height: fixedHeight
              });
            });
          }
          prevWidth = fixedWidth;
          prevHeight = fixedHeight;
        }
        const resizeObserver = new index(onResize);
        if (element) {
          resizeObserver.observe(element);
        }
        return () => {
          resizeObserver.disconnect();
        };
      }
      const useBuffer = (callback, buffer) => {
        let called = false;
        let timeout = null;
        function cancelTrigger() {
          clearTimeout(timeout);
        }
        function trigger(force) {
          if (!called || force === true) {
            if (callback() === false) {
              return;
            }
            called = true;
            cancelTrigger();
            timeout = setTimeout(() => {
              called = false;
            }, buffer.value);
          } else {
            cancelTrigger();
            timeout = setTimeout(() => {
              called = false;
              trigger();
            }, buffer.value);
          }
        }
        return [trigger, () => {
          called = false;
          cancelTrigger();
        }];
      };
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      function assocIndexOf(array, key2) {
        var length2 = array.length;
        while (length2--) {
          if (eq(array[length2][0], key2)) {
            return length2;
          }
        }
        return -1;
      }
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key2) {
        var data = this.__data__, index2 = assocIndexOf(data, key2);
        if (index2 < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index2 == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index2, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key2) {
        var data = this.__data__, index2 = assocIndexOf(data, key2);
        return index2 < 0 ? void 0 : data[index2][1];
      }
      function listCacheHas(key2) {
        return assocIndexOf(this.__data__, key2) > -1;
      }
      function listCacheSet(key2, value) {
        var data = this.__data__, index2 = assocIndexOf(data, key2);
        if (index2 < 0) {
          ++this.size;
          data.push([key2, value]);
        } else {
          data[index2][1] = value;
        }
        return this;
      }
      function ListCache(entries) {
        var index2 = -1, length2 = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length2) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key2) {
        var data = this.__data__, result = data["delete"](key2);
        this.size = data.size;
        return result;
      }
      function stackGet(key2) {
        return this.__data__.get(key2);
      }
      function stackHas(key2) {
        return this.__data__.has(key2);
      }
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      const freeGlobal$1 = freeGlobal;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal$1 || freeSelf || Function("return this")();
      const root$1 = root;
      var Symbol$1 = root$1.Symbol;
      const Symbol$2 = Symbol$1;
      var objectProto$c = Object.prototype;
      var hasOwnProperty$9 = objectProto$c.hasOwnProperty;
      var nativeObjectToString$1 = objectProto$c.toString;
      var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty$9.call(value, symToStringTag$1), tag = value[symToStringTag$1];
        try {
          value[symToStringTag$1] = void 0;
          var unmasked = true;
        } catch (e2) {
        }
        var result = nativeObjectToString$1.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag$1] = tag;
          } else {
            delete value[symToStringTag$1];
          }
        }
        return result;
      }
      var objectProto$b = Object.prototype;
      var nativeObjectToString = objectProto$b.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      var coreJsData = root$1["__core-js_shared__"];
      const coreJsData$1 = coreJsData;
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      var funcProto$1 = Function.prototype;
      var funcToString$1 = funcProto$1.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString$1.call(func);
          } catch (e2) {
          }
          try {
            return func + "";
          } catch (e2) {
          }
        }
        return "";
      }
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype, objectProto$a = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty$8).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function getValue(object, key2) {
        return object == null ? void 0 : object[key2];
      }
      function getNative(object, key2) {
        var value = getValue(object, key2);
        return baseIsNative(value) ? value : void 0;
      }
      var Map$1 = getNative(root$1, "Map");
      const Map$2 = Map$1;
      var nativeCreate = getNative(Object, "create");
      const nativeCreate$1 = nativeCreate;
      function hashClear() {
        this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
        this.size = 0;
      }
      function hashDelete(key2) {
        var result = this.has(key2) && delete this.__data__[key2];
        this.size -= result ? 1 : 0;
        return result;
      }
      var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
      var objectProto$9 = Object.prototype;
      var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
      function hashGet(key2) {
        var data = this.__data__;
        if (nativeCreate$1) {
          var result = data[key2];
          return result === HASH_UNDEFINED$2 ? void 0 : result;
        }
        return hasOwnProperty$7.call(data, key2) ? data[key2] : void 0;
      }
      var objectProto$8 = Object.prototype;
      var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
      function hashHas(key2) {
        var data = this.__data__;
        return nativeCreate$1 ? data[key2] !== void 0 : hasOwnProperty$6.call(data, key2);
      }
      var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
      function hashSet(key2, value) {
        var data = this.__data__;
        this.size += this.has(key2) ? 0 : 1;
        data[key2] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$1 : value;
        return this;
      }
      function Hash(entries) {
        var index2 = -1, length2 = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length2) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map$2 || ListCache)(),
          "string": new Hash()
        };
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function getMapData(map, key2) {
        var data = map.__data__;
        return isKeyable(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
      }
      function mapCacheDelete(key2) {
        var result = getMapData(this, key2)["delete"](key2);
        this.size -= result ? 1 : 0;
        return result;
      }
      function mapCacheGet(key2) {
        return getMapData(this, key2).get(key2);
      }
      function mapCacheHas(key2) {
        return getMapData(this, key2).has(key2);
      }
      function mapCacheSet(key2, value) {
        var data = getMapData(this, key2), size = data.size;
        data.set(key2, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      function MapCache(entries) {
        var index2 = -1, length2 = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length2) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key2, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key2, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key2, value);
        this.size = data.size;
        return this;
      }
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      function SetCache(values) {
        var index2 = -1, length2 = values == null ? 0 : values.length;
        this.__data__ = new MapCache();
        while (++index2 < length2) {
          this.add(values[index2]);
        }
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function arraySome(array, predicate) {
        var index2 = -1, length2 = array == null ? 0 : array.length;
        while (++index2 < length2) {
          if (predicate(array[index2], index2, array)) {
            return true;
          }
        }
        return false;
      }
      function cacheHas(cache, key2) {
        return cache.has(key2);
      }
      var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
        stack.set(array, other);
        stack.set(other, array);
        while (++index2 < arrLength) {
          var arrValue = array[index2], othValue = other[index2];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result;
      }
      var Uint8Array2 = root$1.Uint8Array;
      const Uint8Array$1 = Uint8Array2;
      function mapToArray(map) {
        var index2 = -1, result = Array(map.size);
        map.forEach(function(value, key2) {
          result[++index2] = [key2, value];
        });
        return result;
      }
      function setToArray(set) {
        var index2 = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index2] = value;
        });
        return result;
      }
      var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
      var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$1 = "[object String]", symbolTag = "[object Symbol]";
      var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]";
      var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag$2:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag$1:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
              return false;
            }
            return true;
          case boolTag$1:
          case dateTag$1:
          case numberTag$2:
            return eq(+object, +other);
          case errorTag$1:
            return object.name == other.name && object.message == other.message;
          case regexpTag$1:
          case stringTag$1:
            return object == other + "";
          case mapTag$3:
            var convert = mapToArray;
          case setTag$3:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      function arrayPush(array, values) {
        var index2 = -1, length2 = values.length, offset2 = array.length;
        while (++index2 < length2) {
          array[offset2 + index2] = values[index2];
        }
        return array;
      }
      var isArray = Array.isArray;
      const isArray$1 = isArray;
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      function arrayFilter(array, predicate) {
        var index2 = -1, length2 = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index2 < length2) {
          var value = array[index2];
          if (predicate(value, index2, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function stubArray() {
        return [];
      }
      var objectProto$7 = Object.prototype;
      var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable$1.call(object, symbol);
        });
      };
      const getSymbols$1 = getSymbols;
      function baseTimes(n2, iteratee) {
        var index2 = -1, result = Array(n2);
        while (++index2 < n2) {
          result[index2] = iteratee(index2);
        }
        return result;
      }
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      var argsTag$2 = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag$2;
      }
      var objectProto$6 = Object.prototype;
      var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
      var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty$5.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      const isArguments$1 = isArguments;
      function stubFalse() {
        return false;
      }
      var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
      var Buffer2 = moduleExports$1 ? root$1.Buffer : void 0;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      const isBuffer$1 = isBuffer;
      var MAX_SAFE_INTEGER$1 = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length2) {
        var type = typeof value;
        length2 = length2 == null ? MAX_SAFE_INTEGER$1 : length2;
        return !!length2 && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
      }
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", objectTag$2 = "[object Object]", regexpTag = "[object RegExp]", setTag$2 = "[object Set]", stringTag = "[object String]", weakMapTag$1 = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] = typedArrayTags[setTag$2] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal$1.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e2) {
        }
      }();
      const nodeUtil$1 = nodeUtil;
      var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      const isTypedArray$1 = isTypedArray;
      var objectProto$5 = Object.prototype;
      var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray$1(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length2 = result.length;
        for (var key2 in value) {
          if ((inherited || hasOwnProperty$4.call(value, key2)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key2 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key2 == "offset" || key2 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key2 == "buffer" || key2 == "byteLength" || key2 == "byteOffset") || // Skip index properties.
          isIndex(key2, length2)))) {
            result.push(key2);
          }
        }
        return result;
      }
      var objectProto$4 = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$4;
        return value === proto;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      var nativeKeys = overArg(Object.keys, Object);
      const nativeKeys$1 = nativeKeys;
      var objectProto$3 = Object.prototype;
      var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys$1(object);
        }
        var result = [];
        for (var key2 in Object(object)) {
          if (hasOwnProperty$3.call(object, key2) && key2 != "constructor") {
            result.push(key2);
          }
        }
        return result;
      }
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols$1);
      }
      var COMPARE_PARTIAL_FLAG$1 = 1;
      var objectProto$2 = Object.prototype;
      var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index2 = objLength;
        while (index2--) {
          var key2 = objProps[index2];
          if (!(isPartial ? key2 in other : hasOwnProperty$2.call(other, key2))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index2 < objLength) {
          key2 = objProps[index2];
          var objValue = object[key2], othValue = other[key2];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key2, other, object, stack) : customizer(objValue, othValue, key2, object, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key2 == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      var DataView = getNative(root$1, "DataView");
      const DataView$1 = DataView;
      var Promise$1 = getNative(root$1, "Promise");
      const Promise$2 = Promise$1;
      var Set$1 = getNative(root$1, "Set");
      const Set$2 = Set$1;
      var WeakMap$1 = getNative(root$1, "WeakMap");
      const WeakMap$2 = WeakMap$1;
      var mapTag$1 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$1 = "[object Set]", weakMapTag = "[object WeakMap]";
      var dataViewTag = "[object DataView]";
      var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$2);
      var getTag = baseGetTag;
      if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag || Map$2 && getTag(new Map$2()) != mapTag$1 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$1 || WeakMap$2 && getTag(new WeakMap$2()) != weakMapTag) {
        getTag = function(value) {
          var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag$1;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag$1;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      const getTag$1 = getTag;
      var COMPARE_PARTIAL_FLAG = 1;
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
      var objectProto$1 = Object.prototype;
      var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag$1(object), othTag = othIsArr ? arrayTag : getTag$1(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer$1(object)) {
          if (!isBuffer$1(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      function isEqual(value, other) {
        return baseIsEqual(value, other);
      }
      const alignProps = {
        align: Object,
        target: [Object, Function],
        onAlign: Function,
        monitorBufferTime: Number,
        monitorWindowResize: Boolean,
        disabled: Boolean
      };
      function getElement(func) {
        if (typeof func !== "function")
          return null;
        return func();
      }
      function getPoint(point) {
        if (typeof point !== "object" || !point)
          return null;
        return point;
      }
      const Align = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "Align",
        props: alignProps,
        emits: ["align"],
        setup(props, _ref) {
          let {
            expose,
            slots
          } = _ref;
          const cacheRef = vue.ref({});
          const nodeRef = vue.ref();
          const [forceAlign, cancelForceAlign] = useBuffer(() => {
            const {
              disabled: latestDisabled,
              target: latestTarget,
              align: latestAlign,
              onAlign: latestOnAlign
            } = props;
            if (!latestDisabled && latestTarget && nodeRef.value) {
              const source = nodeRef.value;
              let result;
              const element = getElement(latestTarget);
              const point = getPoint(latestTarget);
              cacheRef.value.element = element;
              cacheRef.value.point = point;
              cacheRef.value.align = latestAlign;
              const {
                activeElement
              } = document;
              if (element && isVisible(element)) {
                result = alignElement(source, element, latestAlign);
              } else if (point) {
                result = alignPoint(source, point, latestAlign);
              }
              restoreFocus(activeElement, source);
              if (latestOnAlign && result) {
                latestOnAlign(source, result);
              }
              return true;
            }
            return false;
          }, vue.computed(() => props.monitorBufferTime));
          const resizeMonitor = vue.ref({
            cancel: () => {
            }
          });
          const sourceResizeMonitor = vue.ref({
            cancel: () => {
            }
          });
          const goAlign = () => {
            const target = props.target;
            const element = getElement(target);
            const point = getPoint(target);
            if (nodeRef.value !== sourceResizeMonitor.value.element) {
              sourceResizeMonitor.value.cancel();
              sourceResizeMonitor.value.element = nodeRef.value;
              sourceResizeMonitor.value.cancel = monitorResize(nodeRef.value, forceAlign);
            }
            if (cacheRef.value.element !== element || !isSamePoint(cacheRef.value.point, point) || !isEqual(cacheRef.value.align, props.align)) {
              forceAlign();
              if (resizeMonitor.value.element !== element) {
                resizeMonitor.value.cancel();
                resizeMonitor.value.element = element;
                resizeMonitor.value.cancel = monitorResize(element, forceAlign);
              }
            }
          };
          vue.onMounted(() => {
            vue.nextTick(() => {
              goAlign();
            });
          });
          vue.onUpdated(() => {
            vue.nextTick(() => {
              goAlign();
            });
          });
          vue.watch(() => props.disabled, (disabled) => {
            if (!disabled) {
              forceAlign();
            } else {
              cancelForceAlign();
            }
          }, {
            immediate: true,
            flush: "post"
          });
          const winResizeRef = vue.ref(null);
          vue.watch(() => props.monitorWindowResize, (monitorWindowResize) => {
            if (monitorWindowResize) {
              if (!winResizeRef.value) {
                winResizeRef.value = addEventListenerWrap(window, "resize", forceAlign);
              }
            } else if (winResizeRef.value) {
              winResizeRef.value.remove();
              winResizeRef.value = null;
            }
          }, {
            flush: "post"
          });
          vue.onUnmounted(() => {
            resizeMonitor.value.cancel();
            sourceResizeMonitor.value.cancel();
            if (winResizeRef.value)
              winResizeRef.value.remove();
            cancelForceAlign();
          });
          expose({
            forceAlign: () => forceAlign(true)
          });
          return () => {
            const child = slots === null || slots === void 0 ? void 0 : slots.default();
            if (child) {
              return cloneElement(child[0], {
                ref: nodeRef
              }, true, true);
            }
            return null;
          };
        }
      });
      tuple("bottomLeft", "bottomRight", "topLeft", "topRight");
      const getTransitionProps = function(transitionName2) {
        let opt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const transitionProps = transitionName2 ? _extends({
          name: transitionName2,
          appear: true,
          // type: 'animation',
          // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
          // appearActiveClass: `antdv-base-transtion`,
          // appearToClass: `${transitionName}-appear ${transitionName}-appear-active`,
          enterFromClass: `${transitionName2}-enter ${transitionName2}-enter-prepare ${transitionName2}-enter-start`,
          enterActiveClass: `${transitionName2}-enter ${transitionName2}-enter-prepare`,
          enterToClass: `${transitionName2}-enter ${transitionName2}-enter-active`,
          leaveFromClass: ` ${transitionName2}-leave`,
          leaveActiveClass: `${transitionName2}-leave ${transitionName2}-leave-active`,
          leaveToClass: `${transitionName2}-leave ${transitionName2}-leave-active`
        }, opt) : _extends({
          css: false
        }, opt);
        return transitionProps;
      };
      const getTransitionGroupProps = function(transitionName2) {
        let opt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const transitionProps = transitionName2 ? _extends({
          name: transitionName2,
          appear: true,
          // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
          appearActiveClass: `${transitionName2}`,
          appearToClass: `${transitionName2}-appear ${transitionName2}-appear-active`,
          enterFromClass: `${transitionName2}-appear ${transitionName2}-enter ${transitionName2}-appear-prepare ${transitionName2}-enter-prepare`,
          enterActiveClass: `${transitionName2}`,
          enterToClass: `${transitionName2}-enter ${transitionName2}-appear ${transitionName2}-appear-active ${transitionName2}-enter-active`,
          leaveActiveClass: `${transitionName2} ${transitionName2}-leave`,
          leaveToClass: `${transitionName2}-leave-active`
        }, opt) : _extends({
          css: false
        }, opt);
        return transitionProps;
      };
      const getTransitionName = (rootPrefixCls, motion, transitionName2) => {
        if (transitionName2 !== void 0) {
          return transitionName2;
        }
        return `${rootPrefixCls}-${motion}`;
      };
      const PopupInner = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "PopupInner",
        inheritAttrs: false,
        props: innerProps,
        emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
        setup(props, _ref) {
          let {
            expose,
            attrs,
            slots
          } = _ref;
          const alignRef = vue.shallowRef();
          const elementRef = vue.shallowRef();
          const alignedClassName = vue.shallowRef();
          const [stretchStyle, measureStretchStyle] = useStretchStyle(vue.toRef(props, "stretch"));
          const doMeasure = () => {
            if (props.stretch) {
              measureStretchStyle(props.getRootDomNode());
            }
          };
          const visible = vue.shallowRef(false);
          let timeoutId;
          vue.watch(() => props.visible, (val) => {
            clearTimeout(timeoutId);
            if (val) {
              timeoutId = setTimeout(() => {
                visible.value = props.visible;
              });
            } else {
              visible.value = false;
            }
          }, {
            immediate: true
          });
          const [status, goNextStatus] = useVisibleStatus(visible, doMeasure);
          const prepareResolveRef = vue.shallowRef();
          const getAlignTarget = () => {
            if (props.point) {
              return props.point;
            }
            return props.getRootDomNode;
          };
          const forceAlign = () => {
            var _a;
            (_a = alignRef.value) === null || _a === void 0 ? void 0 : _a.forceAlign();
          };
          const onInternalAlign = (popupDomNode, matchAlign) => {
            var _a;
            const nextAlignedClassName = props.getClassNameFromAlign(matchAlign);
            const preAlignedClassName = alignedClassName.value;
            if (alignedClassName.value !== nextAlignedClassName) {
              alignedClassName.value = nextAlignedClassName;
            }
            if (status.value === "align") {
              if (preAlignedClassName !== nextAlignedClassName) {
                Promise.resolve().then(() => {
                  forceAlign();
                });
              } else {
                goNextStatus(() => {
                  var _a2;
                  (_a2 = prepareResolveRef.value) === null || _a2 === void 0 ? void 0 : _a2.call(prepareResolveRef);
                });
              }
              (_a = props.onAlign) === null || _a === void 0 ? void 0 : _a.call(props, popupDomNode, matchAlign);
            }
          };
          const motion = vue.computed(() => {
            const m2 = typeof props.animation === "object" ? props.animation : getMotion$1(props);
            ["onAfterEnter", "onAfterLeave"].forEach((eventName) => {
              const originFn = m2[eventName];
              m2[eventName] = (node2) => {
                goNextStatus();
                status.value = "stable";
                originFn === null || originFn === void 0 ? void 0 : originFn(node2);
              };
            });
            return m2;
          });
          const onShowPrepare = () => {
            return new Promise((resolve) => {
              prepareResolveRef.value = resolve;
            });
          };
          vue.watch([motion, status], () => {
            if (!motion.value && status.value === "motion") {
              goNextStatus();
            }
          }, {
            immediate: true
          });
          expose({
            forceAlign,
            getElement: () => {
              return elementRef.value.$el || elementRef.value;
            }
          });
          const alignDisabled = vue.computed(() => {
            var _a;
            if (((_a = props.align) === null || _a === void 0 ? void 0 : _a.points) && (status.value === "align" || status.value === "stable")) {
              return false;
            }
            return true;
          });
          return () => {
            var _a;
            const {
              zIndex,
              align,
              prefixCls,
              destroyPopupOnHide,
              onMouseenter,
              onMouseleave,
              onTouchstart = () => {
              },
              onMousedown
            } = props;
            const statusValue = status.value;
            const mergedStyle = [_extends(_extends({}, stretchStyle.value), {
              zIndex,
              opacity: statusValue === "motion" || statusValue === "stable" || !visible.value ? null : 0,
              // pointerEvents: statusValue === 'stable' ? null : 'none',
              pointerEvents: !visible.value && statusValue !== "stable" ? "none" : null
            }), attrs.style];
            let childNode = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots, {
              visible: props.visible
            }));
            if (childNode.length > 1) {
              childNode = vue.createVNode("div", {
                "class": `${prefixCls}-content`
              }, [childNode]);
            }
            const mergedClassName = classNames(prefixCls, attrs.class, alignedClassName.value);
            const hasAnimate = visible.value || !props.visible;
            const transitionProps = hasAnimate ? getTransitionProps(motion.value.name, motion.value) : {};
            return vue.createVNode(vue.Transition, _objectSpread2$1(_objectSpread2$1({
              "ref": elementRef
            }, transitionProps), {}, {
              "onBeforeEnter": onShowPrepare
            }), {
              default: () => {
                return !destroyPopupOnHide || props.visible ? vue.withDirectives(vue.createVNode(Align, {
                  "target": getAlignTarget(),
                  "key": "popup",
                  "ref": alignRef,
                  "monitorWindowResize": true,
                  "disabled": alignDisabled.value,
                  "align": align,
                  "onAlign": onInternalAlign
                }, {
                  default: () => vue.createVNode("div", {
                    "class": mergedClassName,
                    "onMouseenter": onMouseenter,
                    "onMouseleave": onMouseleave,
                    "onMousedown": vue.withModifiers(onMousedown, ["capture"]),
                    [supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart"]: vue.withModifiers(onTouchstart, ["capture"]),
                    "style": mergedStyle
                  }, [childNode])
                }), [[vue.vShow, visible.value]]) : null;
              }
            });
          };
        }
      });
      const Popup = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "Popup",
        inheritAttrs: false,
        props: popupProps,
        setup(props, _ref) {
          let {
            attrs,
            slots,
            expose
          } = _ref;
          const innerVisible = vue.shallowRef(false);
          const inMobile = vue.shallowRef(false);
          const popupRef = vue.shallowRef();
          const rootRef = vue.shallowRef();
          vue.watch([() => props.visible, () => props.mobile], () => {
            innerVisible.value = props.visible;
            if (props.visible && props.mobile) {
              inMobile.value = true;
            }
          }, {
            immediate: true,
            flush: "post"
          });
          expose({
            forceAlign: () => {
              var _a;
              (_a = popupRef.value) === null || _a === void 0 ? void 0 : _a.forceAlign();
            },
            getElement: () => {
              var _a;
              return (_a = popupRef.value) === null || _a === void 0 ? void 0 : _a.getElement();
            }
          });
          return () => {
            const cloneProps = _extends(_extends(_extends({}, props), attrs), {
              visible: innerVisible.value
            });
            const popupNode = inMobile.value ? vue.createVNode(MobilePopupInner, _objectSpread2$1(_objectSpread2$1({}, cloneProps), {}, {
              "mobile": props.mobile,
              "ref": popupRef
            }), {
              default: slots.default
            }) : vue.createVNode(PopupInner, _objectSpread2$1(_objectSpread2$1({}, cloneProps), {}, {
              "ref": popupRef
            }), {
              default: slots.default
            });
            return vue.createVNode("div", {
              "ref": rootRef
            }, [vue.createVNode(Mask$1, cloneProps, null), popupNode]);
          };
        }
      });
      function isPointsEq(a1, a2, isAlignPoint) {
        if (isAlignPoint) {
          return a1[0] === a2[0];
        }
        return a1[0] === a2[0] && a1[1] === a2[1];
      }
      function getAlignFromPlacement(builtinPlacements, placementStr, align) {
        const baseAlign = builtinPlacements[placementStr] || {};
        return _extends(_extends({}, baseAlign), align);
      }
      function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
        const {
          points
        } = align;
        const placements2 = Object.keys(builtinPlacements);
        for (let i2 = 0; i2 < placements2.length; i2 += 1) {
          const placement = placements2[i2];
          if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
            return `${prefixCls}-placement-${placement}`;
          }
        }
        return "";
      }
      const BaseMixin = {
        methods: {
          setState() {
            let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            let callback = arguments.length > 1 ? arguments[1] : void 0;
            let newState = typeof state === "function" ? state(this.$data, this.$props) : state;
            if (this.getDerivedStateFromProps) {
              const s2 = this.getDerivedStateFromProps(getOptionProps(this), _extends(_extends({}, this.$data), newState));
              if (s2 === null) {
                return;
              } else {
                newState = _extends(_extends({}, newState), s2 || {});
              }
            }
            _extends(this.$data, newState);
            if (this._.isMounted) {
              this.$forceUpdate();
            }
            vue.nextTick(() => {
              callback && callback();
            });
          },
          __emit() {
            const args = [].slice.call(arguments, 0);
            let eventName = args[0];
            eventName = `on${eventName[0].toUpperCase()}${eventName.substring(1)}`;
            const event = this.$props[eventName] || this.$attrs[eventName];
            if (args.length && event) {
              if (Array.isArray(event)) {
                for (let i2 = 0, l2 = event.length; i2 < l2; i2++) {
                  event[i2](...args.slice(1));
                }
              } else {
                event(...args.slice(1));
              }
            }
          }
        }
      };
      const PortalContextKey = Symbol("PortalContextKey");
      const useProvidePortal = function(instance) {
        let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
          inTriggerContext: true
        };
        vue.provide(PortalContextKey, {
          inTriggerContext: config.inTriggerContext,
          shouldRender: vue.computed(() => {
            const {
              sPopupVisible,
              popupRef,
              forceRender,
              autoDestroy
            } = instance || {};
            let shouldRender = false;
            if (sPopupVisible || popupRef || forceRender) {
              shouldRender = true;
            }
            if (!sPopupVisible && autoDestroy) {
              shouldRender = false;
            }
            return shouldRender;
          })
        });
      };
      const useInjectPortal = () => {
        useProvidePortal({}, {
          inTriggerContext: false
        });
        const portalContext = vue.inject(PortalContextKey, {
          shouldRender: vue.computed(() => false),
          inTriggerContext: false
        });
        return {
          shouldRender: vue.computed(() => portalContext.shouldRender.value || portalContext.inTriggerContext === false)
        };
      };
      const Portal$1 = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "Portal",
        inheritAttrs: false,
        props: {
          getContainer: PropTypes$1.func.isRequired,
          didUpdate: Function
        },
        setup(props, _ref) {
          let {
            slots
          } = _ref;
          let isSSR = true;
          let container;
          const {
            shouldRender
          } = useInjectPortal();
          vue.onBeforeMount(() => {
            isSSR = false;
            if (shouldRender.value) {
              container = props.getContainer();
            }
          });
          const stopWatch = vue.watch(shouldRender, () => {
            if (shouldRender.value && !container) {
              container = props.getContainer();
            }
            if (container) {
              stopWatch();
            }
          });
          vue.onUpdated(() => {
            vue.nextTick(() => {
              var _a;
              if (shouldRender.value) {
                (_a = props.didUpdate) === null || _a === void 0 ? void 0 : _a.call(props, props);
              }
            });
          });
          return () => {
            var _a;
            if (!shouldRender.value)
              return null;
            if (isSSR) {
              return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
            }
            return container ? vue.createVNode(vue.Teleport, {
              "to": container
            }, slots) : null;
          };
        }
      });
      let cached;
      function getScrollBarSize(fresh) {
        if (typeof document === "undefined") {
          return 0;
        }
        if (fresh || cached === void 0) {
          const inner = document.createElement("div");
          inner.style.width = "100%";
          inner.style.height = "200px";
          const outer = document.createElement("div");
          const outerStyle = outer.style;
          outerStyle.position = "absolute";
          outerStyle.top = "0";
          outerStyle.left = "0";
          outerStyle.pointerEvents = "none";
          outerStyle.visibility = "hidden";
          outerStyle.width = "200px";
          outerStyle.height = "150px";
          outerStyle.overflow = "hidden";
          outer.appendChild(inner);
          document.body.appendChild(outer);
          const widthContained = inner.offsetWidth;
          outer.style.overflow = "scroll";
          let widthScroll = inner.offsetWidth;
          if (widthContained === widthScroll) {
            widthScroll = outer.clientWidth;
          }
          document.body.removeChild(outer);
          cached = widthContained - widthScroll;
        }
        return cached;
      }
      const UNIQUE_ID = `vc-util-locker-${Date.now()}`;
      let uuid$3 = 0;
      function isBodyOverflowing() {
        return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
      }
      function useScrollLocker(lock) {
        const mergedLock = vue.computed(() => !!lock && !!lock.value);
        uuid$3 += 1;
        const id = `${UNIQUE_ID}_${uuid$3}`;
        vue.watchEffect((onClear) => {
          if (!canUseDom()) {
            return;
          }
          if (mergedLock.value) {
            const scrollbarSize = getScrollBarSize();
            const isOverflow = isBodyOverflowing();
            updateCSS(`
html body {
  overflow-y: hidden;
  ${isOverflow ? `width: calc(100% - ${scrollbarSize}px);` : ""}
}`, id);
          } else {
            removeCSS(id);
          }
          onClear(() => {
            removeCSS(id);
          });
        }, {
          flush: "post"
        });
      }
      let openCount = 0;
      const supportDom = canUseDom();
      const getParent = (getContainer2) => {
        if (!supportDom) {
          return null;
        }
        if (getContainer2) {
          if (typeof getContainer2 === "string") {
            return document.querySelectorAll(getContainer2)[0];
          }
          if (typeof getContainer2 === "function") {
            return getContainer2();
          }
          if (typeof getContainer2 === "object" && getContainer2 instanceof window.HTMLElement) {
            return getContainer2;
          }
        }
        return document.body;
      };
      const Portal = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "PortalWrapper",
        inheritAttrs: false,
        props: {
          wrapperClassName: String,
          forceRender: {
            type: Boolean,
            default: void 0
          },
          getContainer: PropTypes$1.any,
          visible: {
            type: Boolean,
            default: void 0
          },
          autoLock: booleanType(),
          didUpdate: Function
        },
        setup(props, _ref) {
          let {
            slots
          } = _ref;
          const container = vue.shallowRef();
          const componentRef = vue.shallowRef();
          const rafId = vue.shallowRef();
          const defaultContainer = canUseDom() && document.createElement("div");
          const removeCurrentContainer = () => {
            var _a, _b;
            if (container.value === defaultContainer) {
              (_b = (_a = container.value) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(container.value);
            }
            container.value = null;
          };
          let parent = null;
          const attachToParent = function() {
            let force = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            if (force || container.value && !container.value.parentNode) {
              parent = getParent(props.getContainer);
              if (parent) {
                parent.appendChild(container.value);
                return true;
              }
              return false;
            }
            return true;
          };
          const getContainer2 = () => {
            if (!supportDom) {
              return null;
            }
            if (!container.value) {
              container.value = defaultContainer;
              attachToParent(true);
            }
            setWrapperClassName();
            return container.value;
          };
          const setWrapperClassName = () => {
            const {
              wrapperClassName
            } = props;
            if (container.value && wrapperClassName && wrapperClassName !== container.value.className) {
              container.value.className = wrapperClassName;
            }
          };
          vue.onUpdated(() => {
            setWrapperClassName();
            attachToParent();
          });
          const instance = vue.getCurrentInstance();
          useScrollLocker(vue.computed(() => {
            return props.autoLock && props.visible && canUseDom() && (container.value === document.body || container.value === defaultContainer);
          }));
          vue.onMounted(() => {
            let init = false;
            vue.watch([() => props.visible, () => props.getContainer], (_ref2, _ref3) => {
              let [visible, getContainer3] = _ref2;
              let [prevVisible, prevGetContainer] = _ref3;
              if (supportDom) {
                parent = getParent(props.getContainer);
                if (parent === document.body) {
                  if (visible && !prevVisible) {
                    openCount += 1;
                  } else if (init) {
                    openCount -= 1;
                  }
                }
              }
              if (init) {
                const getContainerIsFunc = typeof getContainer3 === "function" && typeof prevGetContainer === "function";
                if (getContainerIsFunc ? getContainer3.toString() !== prevGetContainer.toString() : getContainer3 !== prevGetContainer) {
                  removeCurrentContainer();
                }
              }
              init = true;
            }, {
              immediate: true,
              flush: "post"
            });
            vue.nextTick(() => {
              if (!attachToParent()) {
                rafId.value = wrapperRaf(() => {
                  instance.update();
                });
              }
            });
          });
          vue.onBeforeUnmount(() => {
            const {
              visible
            } = props;
            if (supportDom && parent === document.body) {
              openCount = visible && openCount ? openCount - 1 : openCount;
            }
            removeCurrentContainer();
            wrapperRaf.cancel(rafId.value);
          });
          return () => {
            const {
              forceRender,
              visible
            } = props;
            let portal = null;
            const childProps = {
              getOpenCount: () => openCount,
              getContainer: getContainer2
            };
            if (forceRender || visible || componentRef.value) {
              portal = vue.createVNode(Portal$1, {
                "getContainer": getContainer2,
                "ref": componentRef,
                "didUpdate": props.didUpdate
              }, {
                default: () => {
                  var _a;
                  return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots, childProps);
                }
              });
            }
            return portal;
          };
        }
      });
      const ALL_HANDLERS = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"];
      const Trigger = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "Trigger",
        mixins: [BaseMixin],
        inheritAttrs: false,
        props: triggerProps(),
        setup(props) {
          const align = vue.computed(() => {
            const {
              popupPlacement,
              popupAlign,
              builtinPlacements
            } = props;
            if (popupPlacement && builtinPlacements) {
              return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
            }
            return popupAlign;
          });
          const popupRef = vue.shallowRef(null);
          const setPopupRef = (val) => {
            popupRef.value = val;
          };
          return {
            vcTriggerContext: vue.inject("vcTriggerContext", {}),
            popupRef,
            setPopupRef,
            triggerRef: vue.shallowRef(null),
            align,
            focusTime: null,
            clickOutsideHandler: null,
            contextmenuOutsideHandler1: null,
            contextmenuOutsideHandler2: null,
            touchOutsideHandler: null,
            attachId: null,
            delayTimer: null,
            hasPopupMouseDown: false,
            preClickTime: null,
            preTouchTime: null,
            mouseDownTimeout: null,
            childOriginEvents: {}
          };
        },
        data() {
          const props = this.$props;
          let popupVisible;
          if (this.popupVisible !== void 0) {
            popupVisible = !!props.popupVisible;
          } else {
            popupVisible = !!props.defaultPopupVisible;
          }
          ALL_HANDLERS.forEach((h2) => {
            this[`fire${h2}`] = (e2) => {
              this.fireEvents(h2, e2);
            };
          });
          return {
            prevPopupVisible: popupVisible,
            sPopupVisible: popupVisible,
            point: null
          };
        },
        watch: {
          popupVisible(val) {
            if (val !== void 0) {
              this.prevPopupVisible = this.sPopupVisible;
              this.sPopupVisible = val;
            }
          }
        },
        created() {
          vue.provide("vcTriggerContext", {
            onPopupMouseDown: this.onPopupMouseDown,
            onPopupMouseenter: this.onPopupMouseenter,
            onPopupMouseleave: this.onPopupMouseleave
          });
          useProvidePortal(this);
        },
        deactivated() {
          this.setPopupVisible(false);
        },
        mounted() {
          this.$nextTick(() => {
            this.updatedCal();
          });
        },
        updated() {
          this.$nextTick(() => {
            this.updatedCal();
          });
        },
        beforeUnmount() {
          this.clearDelayTimer();
          this.clearOutsideHandler();
          clearTimeout(this.mouseDownTimeout);
          wrapperRaf.cancel(this.attachId);
        },
        methods: {
          updatedCal() {
            const props = this.$props;
            const state = this.$data;
            if (state.sPopupVisible) {
              let currentDocument;
              if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow())) {
                currentDocument = props.getDocument(this.getRootDomNode());
                this.clickOutsideHandler = addEventListenerWrap(currentDocument, "mousedown", this.onDocumentClick);
              }
              if (!this.touchOutsideHandler) {
                currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
                this.touchOutsideHandler = addEventListenerWrap(currentDocument, "touchstart", this.onDocumentClick, supportsPassive$1 ? {
                  passive: false
                } : false);
              }
              if (!this.contextmenuOutsideHandler1 && this.isContextmenuToShow()) {
                currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
                this.contextmenuOutsideHandler1 = addEventListenerWrap(currentDocument, "scroll", this.onContextmenuClose);
              }
              if (!this.contextmenuOutsideHandler2 && this.isContextmenuToShow()) {
                this.contextmenuOutsideHandler2 = addEventListenerWrap(window, "blur", this.onContextmenuClose);
              }
            } else {
              this.clearOutsideHandler();
            }
          },
          onMouseenter(e2) {
            const {
              mouseEnterDelay
            } = this.$props;
            this.fireEvents("onMouseenter", e2);
            this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e2);
          },
          onMouseMove(e2) {
            this.fireEvents("onMousemove", e2);
            this.setPoint(e2);
          },
          onMouseleave(e2) {
            this.fireEvents("onMouseleave", e2);
            this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
          },
          onPopupMouseenter() {
            const {
              vcTriggerContext = {}
            } = this;
            if (vcTriggerContext.onPopupMouseenter) {
              vcTriggerContext.onPopupMouseenter();
            }
            this.clearDelayTimer();
          },
          onPopupMouseleave(e2) {
            var _a;
            if (e2 && e2.relatedTarget && !e2.relatedTarget.setTimeout && contains((_a = this.popupRef) === null || _a === void 0 ? void 0 : _a.getElement(), e2.relatedTarget)) {
              return;
            }
            this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
            const {
              vcTriggerContext = {}
            } = this;
            if (vcTriggerContext.onPopupMouseleave) {
              vcTriggerContext.onPopupMouseleave(e2);
            }
          },
          onFocus(e2) {
            this.fireEvents("onFocus", e2);
            this.clearDelayTimer();
            if (this.isFocusToShow()) {
              this.focusTime = Date.now();
              this.delaySetPopupVisible(true, this.$props.focusDelay);
            }
          },
          onMousedown(e2) {
            this.fireEvents("onMousedown", e2);
            this.preClickTime = Date.now();
          },
          onTouchstart(e2) {
            this.fireEvents("onTouchstart", e2);
            this.preTouchTime = Date.now();
          },
          onBlur(e2) {
            if (!contains(e2.target, e2.relatedTarget || document.activeElement)) {
              this.fireEvents("onBlur", e2);
              this.clearDelayTimer();
              if (this.isBlurToHide()) {
                this.delaySetPopupVisible(false, this.$props.blurDelay);
              }
            }
          },
          onContextmenu(e2) {
            e2.preventDefault();
            this.fireEvents("onContextmenu", e2);
            this.setPopupVisible(true, e2);
          },
          onContextmenuClose() {
            if (this.isContextmenuToShow()) {
              this.close();
            }
          },
          onClick(event) {
            this.fireEvents("onClick", event);
            if (this.focusTime) {
              let preTime;
              if (this.preClickTime && this.preTouchTime) {
                preTime = Math.min(this.preClickTime, this.preTouchTime);
              } else if (this.preClickTime) {
                preTime = this.preClickTime;
              } else if (this.preTouchTime) {
                preTime = this.preTouchTime;
              }
              if (Math.abs(preTime - this.focusTime) < 20) {
                return;
              }
              this.focusTime = 0;
            }
            this.preClickTime = 0;
            this.preTouchTime = 0;
            if (this.isClickToShow() && (this.isClickToHide() || this.isBlurToHide()) && event && event.preventDefault) {
              event.preventDefault();
            }
            if (event && event.domEvent) {
              event.domEvent.preventDefault();
            }
            const nextVisible = !this.$data.sPopupVisible;
            if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
              this.setPopupVisible(!this.$data.sPopupVisible, event);
            }
          },
          onPopupMouseDown() {
            const {
              vcTriggerContext = {}
            } = this;
            this.hasPopupMouseDown = true;
            clearTimeout(this.mouseDownTimeout);
            this.mouseDownTimeout = setTimeout(() => {
              this.hasPopupMouseDown = false;
            }, 0);
            if (vcTriggerContext.onPopupMouseDown) {
              vcTriggerContext.onPopupMouseDown(...arguments);
            }
          },
          onDocumentClick(event) {
            if (this.$props.mask && !this.$props.maskClosable) {
              return;
            }
            const target = event.target;
            const root2 = this.getRootDomNode();
            const popupNode = this.getPopupDomNode();
            if (
              // mousedown on the target should also close popup when action is contextMenu.
              // https://github.com/ant-design/ant-design/issues/29853
              (!contains(root2, target) || this.isContextMenuOnly()) && !contains(popupNode, target) && !this.hasPopupMouseDown
            ) {
              this.delaySetPopupVisible(false, 0.1);
            }
          },
          getPopupDomNode() {
            var _a;
            return ((_a = this.popupRef) === null || _a === void 0 ? void 0 : _a.getElement()) || null;
          },
          getRootDomNode() {
            var _a, _b, _c, _d;
            const {
              getTriggerDOMNode
            } = this.$props;
            if (getTriggerDOMNode) {
              const domNode = ((_b = (_a = this.triggerRef) === null || _a === void 0 ? void 0 : _a.$el) === null || _b === void 0 ? void 0 : _b.nodeName) === "#comment" ? null : findDOMNode(this.triggerRef);
              return findDOMNode(getTriggerDOMNode(domNode));
            }
            try {
              const domNode = ((_d = (_c = this.triggerRef) === null || _c === void 0 ? void 0 : _c.$el) === null || _d === void 0 ? void 0 : _d.nodeName) === "#comment" ? null : findDOMNode(this.triggerRef);
              if (domNode) {
                return domNode;
              }
            } catch (err) {
            }
            return findDOMNode(this);
          },
          handleGetPopupClassFromAlign(align) {
            const className = [];
            const props = this.$props;
            const {
              popupPlacement,
              builtinPlacements,
              prefixCls,
              alignPoint: alignPoint2,
              getPopupClassNameFromAlign
            } = props;
            if (popupPlacement && builtinPlacements) {
              className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint2));
            }
            if (getPopupClassNameFromAlign) {
              className.push(getPopupClassNameFromAlign(align));
            }
            return className.join(" ");
          },
          getPopupAlign() {
            const props = this.$props;
            const {
              popupPlacement,
              popupAlign,
              builtinPlacements
            } = props;
            if (popupPlacement && builtinPlacements) {
              return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
            }
            return popupAlign;
          },
          getComponent() {
            const mouseProps = {};
            if (this.isMouseEnterToShow()) {
              mouseProps.onMouseenter = this.onPopupMouseenter;
            }
            if (this.isMouseLeaveToHide()) {
              mouseProps.onMouseleave = this.onPopupMouseleave;
            }
            mouseProps.onMousedown = this.onPopupMouseDown;
            mouseProps[supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart"] = this.onPopupMouseDown;
            const {
              handleGetPopupClassFromAlign,
              getRootDomNode,
              $attrs
            } = this;
            const {
              prefixCls,
              destroyPopupOnHide,
              popupClassName,
              popupAnimation,
              popupTransitionName,
              popupStyle,
              mask,
              maskAnimation,
              maskTransitionName,
              zIndex,
              stretch,
              alignPoint: alignPoint2,
              mobile,
              forceRender
            } = this.$props;
            const {
              sPopupVisible,
              point
            } = this.$data;
            const popupProps2 = _extends(_extends({
              prefixCls,
              destroyPopupOnHide,
              visible: sPopupVisible,
              point: alignPoint2 ? point : null,
              align: this.align,
              animation: popupAnimation,
              getClassNameFromAlign: handleGetPopupClassFromAlign,
              stretch,
              getRootDomNode,
              mask,
              zIndex,
              transitionName: popupTransitionName,
              maskAnimation,
              maskTransitionName,
              class: popupClassName,
              style: popupStyle,
              onAlign: $attrs.onPopupAlign || noop$1
            }, mouseProps), {
              ref: this.setPopupRef,
              mobile,
              forceRender
            });
            return vue.createVNode(Popup, popupProps2, {
              default: this.$slots.popup || (() => getComponent(this, "popup"))
            });
          },
          attachParent(popupContainer) {
            wrapperRaf.cancel(this.attachId);
            const {
              getPopupContainer,
              getDocument: getDocument2
            } = this.$props;
            const domNode = this.getRootDomNode();
            let mountNode;
            if (!getPopupContainer) {
              mountNode = getDocument2(this.getRootDomNode()).body;
            } else if (domNode || getPopupContainer.length === 0) {
              mountNode = getPopupContainer(domNode);
            }
            if (mountNode) {
              mountNode.appendChild(popupContainer);
            } else {
              this.attachId = wrapperRaf(() => {
                this.attachParent(popupContainer);
              });
            }
          },
          getContainer() {
            const {
              $props: props
            } = this;
            const {
              getDocument: getDocument2
            } = props;
            const popupContainer = getDocument2(this.getRootDomNode()).createElement("div");
            popupContainer.style.position = "absolute";
            popupContainer.style.top = "0";
            popupContainer.style.left = "0";
            popupContainer.style.width = "100%";
            this.attachParent(popupContainer);
            return popupContainer;
          },
          setPopupVisible(sPopupVisible, event) {
            const {
              alignPoint: alignPoint2,
              sPopupVisible: prevPopupVisible,
              onPopupVisibleChange
            } = this;
            this.clearDelayTimer();
            if (prevPopupVisible !== sPopupVisible) {
              if (!hasProp(this, "popupVisible")) {
                this.setState({
                  sPopupVisible,
                  prevPopupVisible
                });
              }
              onPopupVisibleChange && onPopupVisibleChange(sPopupVisible);
            }
            if (alignPoint2 && event && sPopupVisible) {
              this.setPoint(event);
            }
          },
          setPoint(point) {
            const {
              alignPoint: alignPoint2
            } = this.$props;
            if (!alignPoint2 || !point)
              return;
            this.setState({
              point: {
                pageX: point.pageX,
                pageY: point.pageY
              }
            });
          },
          handlePortalUpdate() {
            if (this.prevPopupVisible !== this.sPopupVisible) {
              this.afterPopupVisibleChange(this.sPopupVisible);
            }
          },
          delaySetPopupVisible(visible, delayS, event) {
            const delay = delayS * 1e3;
            this.clearDelayTimer();
            if (delay) {
              const point = event ? {
                pageX: event.pageX,
                pageY: event.pageY
              } : null;
              this.delayTimer = setTimeout(() => {
                this.setPopupVisible(visible, point);
                this.clearDelayTimer();
              }, delay);
            } else {
              this.setPopupVisible(visible, event);
            }
          },
          clearDelayTimer() {
            if (this.delayTimer) {
              clearTimeout(this.delayTimer);
              this.delayTimer = null;
            }
          },
          clearOutsideHandler() {
            if (this.clickOutsideHandler) {
              this.clickOutsideHandler.remove();
              this.clickOutsideHandler = null;
            }
            if (this.contextmenuOutsideHandler1) {
              this.contextmenuOutsideHandler1.remove();
              this.contextmenuOutsideHandler1 = null;
            }
            if (this.contextmenuOutsideHandler2) {
              this.contextmenuOutsideHandler2.remove();
              this.contextmenuOutsideHandler2 = null;
            }
            if (this.touchOutsideHandler) {
              this.touchOutsideHandler.remove();
              this.touchOutsideHandler = null;
            }
          },
          createTwoChains(event) {
            let fn = () => {
            };
            const events = getEvents(this);
            if (this.childOriginEvents[event] && events[event]) {
              return this[`fire${event}`];
            }
            fn = this.childOriginEvents[event] || events[event] || fn;
            return fn;
          },
          isClickToShow() {
            const {
              action,
              showAction
            } = this.$props;
            return action.indexOf("click") !== -1 || showAction.indexOf("click") !== -1;
          },
          isContextMenuOnly() {
            const {
              action
            } = this.$props;
            return action === "contextmenu" || action.length === 1 && action[0] === "contextmenu";
          },
          isContextmenuToShow() {
            const {
              action,
              showAction
            } = this.$props;
            return action.indexOf("contextmenu") !== -1 || showAction.indexOf("contextmenu") !== -1;
          },
          isClickToHide() {
            const {
              action,
              hideAction
            } = this.$props;
            return action.indexOf("click") !== -1 || hideAction.indexOf("click") !== -1;
          },
          isMouseEnterToShow() {
            const {
              action,
              showAction
            } = this.$props;
            return action.indexOf("hover") !== -1 || showAction.indexOf("mouseenter") !== -1;
          },
          isMouseLeaveToHide() {
            const {
              action,
              hideAction
            } = this.$props;
            return action.indexOf("hover") !== -1 || hideAction.indexOf("mouseleave") !== -1;
          },
          isFocusToShow() {
            const {
              action,
              showAction
            } = this.$props;
            return action.indexOf("focus") !== -1 || showAction.indexOf("focus") !== -1;
          },
          isBlurToHide() {
            const {
              action,
              hideAction
            } = this.$props;
            return action.indexOf("focus") !== -1 || hideAction.indexOf("blur") !== -1;
          },
          forcePopupAlign() {
            var _a;
            if (this.$data.sPopupVisible) {
              (_a = this.popupRef) === null || _a === void 0 ? void 0 : _a.forceAlign();
            }
          },
          fireEvents(type, e2) {
            if (this.childOriginEvents[type]) {
              this.childOriginEvents[type](e2);
            }
            const event = this.$props[type] || this.$attrs[type];
            if (event) {
              event(e2);
            }
          },
          close() {
            this.setPopupVisible(false);
          }
        },
        render() {
          const {
            $attrs
          } = this;
          const children = filterEmpty(getSlot(this));
          const {
            alignPoint: alignPoint2,
            getPopupContainer
          } = this.$props;
          const child = children[0];
          this.childOriginEvents = getEvents(child);
          const newChildProps = {
            key: "trigger"
          };
          if (this.isContextmenuToShow()) {
            newChildProps.onContextmenu = this.onContextmenu;
          } else {
            newChildProps.onContextmenu = this.createTwoChains("onContextmenu");
          }
          if (this.isClickToHide() || this.isClickToShow()) {
            newChildProps.onClick = this.onClick;
            newChildProps.onMousedown = this.onMousedown;
            newChildProps[supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart;
          } else {
            newChildProps.onClick = this.createTwoChains("onClick");
            newChildProps.onMousedown = this.createTwoChains("onMousedown");
            newChildProps[supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart"] = this.createTwoChains("onTouchstart");
          }
          if (this.isMouseEnterToShow()) {
            newChildProps.onMouseenter = this.onMouseenter;
            if (alignPoint2) {
              newChildProps.onMousemove = this.onMouseMove;
            }
          } else {
            newChildProps.onMouseenter = this.createTwoChains("onMouseenter");
          }
          if (this.isMouseLeaveToHide()) {
            newChildProps.onMouseleave = this.onMouseleave;
          } else {
            newChildProps.onMouseleave = this.createTwoChains("onMouseleave");
          }
          if (this.isFocusToShow() || this.isBlurToHide()) {
            newChildProps.onFocus = this.onFocus;
            newChildProps.onBlur = this.onBlur;
          } else {
            newChildProps.onFocus = this.createTwoChains("onFocus");
            newChildProps.onBlur = (e2) => {
              if (e2 && (!e2.relatedTarget || !contains(e2.target, e2.relatedTarget))) {
                this.createTwoChains("onBlur")(e2);
              }
            };
          }
          const childrenClassName = classNames(child && child.props && child.props.class, $attrs.class);
          if (childrenClassName) {
            newChildProps.class = childrenClassName;
          }
          const trigger = cloneElement(child, _extends(_extends({}, newChildProps), {
            ref: "triggerRef"
          }), true, true);
          const portal = vue.createVNode(Portal, {
            "key": "portal",
            "getContainer": getPopupContainer && (() => getPopupContainer(this.getRootDomNode())),
            "didUpdate": this.handlePortalUpdate,
            "visible": this.$data.sPopupVisible
          }, {
            default: this.getComponent
          });
          return vue.createVNode(vue.Fragment, null, [trigger, portal]);
        }
      });
      const KeyCode = {
        /**
         * MAC_ENTER
         */
        MAC_ENTER: 3,
        /**
         * BACKSPACE
         */
        BACKSPACE: 8,
        /**
         * TAB
         */
        TAB: 9,
        /**
         * NUMLOCK on FF/Safari Mac
         */
        NUM_CENTER: 12,
        /**
         * ENTER
         */
        ENTER: 13,
        /**
         * SHIFT
         */
        SHIFT: 16,
        /**
         * CTRL
         */
        CTRL: 17,
        /**
         * ALT
         */
        ALT: 18,
        /**
         * PAUSE
         */
        PAUSE: 19,
        /**
         * CAPS_LOCK
         */
        CAPS_LOCK: 20,
        /**
         * ESC
         */
        ESC: 27,
        /**
         * SPACE
         */
        SPACE: 32,
        /**
         * PAGE_UP
         */
        PAGE_UP: 33,
        /**
         * PAGE_DOWN
         */
        PAGE_DOWN: 34,
        /**
         * END
         */
        END: 35,
        /**
         * HOME
         */
        HOME: 36,
        /**
         * LEFT
         */
        LEFT: 37,
        /**
         * UP
         */
        UP: 38,
        /**
         * RIGHT
         */
        RIGHT: 39,
        /**
         * DOWN
         */
        DOWN: 40,
        /**
         * PRINT_SCREEN
         */
        PRINT_SCREEN: 44,
        /**
         * INSERT
         */
        INSERT: 45,
        /**
         * DELETE
         */
        DELETE: 46,
        /**
         * ZERO
         */
        ZERO: 48,
        /**
         * ONE
         */
        ONE: 49,
        /**
         * TWO
         */
        TWO: 50,
        /**
         * THREE
         */
        THREE: 51,
        /**
         * FOUR
         */
        FOUR: 52,
        /**
         * FIVE
         */
        FIVE: 53,
        /**
         * SIX
         */
        SIX: 54,
        /**
         * SEVEN
         */
        SEVEN: 55,
        /**
         * EIGHT
         */
        EIGHT: 56,
        /**
         * NINE
         */
        NINE: 57,
        /**
         * QUESTION_MARK
         */
        QUESTION_MARK: 63,
        /**
         * A
         */
        A: 65,
        /**
         * B
         */
        B: 66,
        /**
         * C
         */
        C: 67,
        /**
         * D
         */
        D: 68,
        /**
         * E
         */
        E: 69,
        /**
         * F
         */
        F: 70,
        /**
         * G
         */
        G: 71,
        /**
         * H
         */
        H: 72,
        /**
         * I
         */
        I: 73,
        /**
         * J
         */
        J: 74,
        /**
         * K
         */
        K: 75,
        /**
         * L
         */
        L: 76,
        /**
         * M
         */
        M: 77,
        /**
         * N
         */
        N: 78,
        /**
         * O
         */
        O: 79,
        /**
         * P
         */
        P: 80,
        /**
         * Q
         */
        Q: 81,
        /**
         * R
         */
        R: 82,
        /**
         * S
         */
        S: 83,
        /**
         * T
         */
        T: 84,
        /**
         * U
         */
        U: 85,
        /**
         * V
         */
        V: 86,
        /**
         * W
         */
        W: 87,
        /**
         * X
         */
        X: 88,
        /**
         * Y
         */
        Y: 89,
        /**
         * Z
         */
        Z: 90,
        /**
         * META
         */
        META: 91,
        /**
         * WIN_KEY_RIGHT
         */
        WIN_KEY_RIGHT: 92,
        /**
         * CONTEXT_MENU
         */
        CONTEXT_MENU: 93,
        /**
         * NUM_ZERO
         */
        NUM_ZERO: 96,
        /**
         * NUM_ONE
         */
        NUM_ONE: 97,
        /**
         * NUM_TWO
         */
        NUM_TWO: 98,
        /**
         * NUM_THREE
         */
        NUM_THREE: 99,
        /**
         * NUM_FOUR
         */
        NUM_FOUR: 100,
        /**
         * NUM_FIVE
         */
        NUM_FIVE: 101,
        /**
         * NUM_SIX
         */
        NUM_SIX: 102,
        /**
         * NUM_SEVEN
         */
        NUM_SEVEN: 103,
        /**
         * NUM_EIGHT
         */
        NUM_EIGHT: 104,
        /**
         * NUM_NINE
         */
        NUM_NINE: 105,
        /**
         * NUM_MULTIPLY
         */
        NUM_MULTIPLY: 106,
        /**
         * NUM_PLUS
         */
        NUM_PLUS: 107,
        /**
         * NUM_MINUS
         */
        NUM_MINUS: 109,
        /**
         * NUM_PERIOD
         */
        NUM_PERIOD: 110,
        /**
         * NUM_DIVISION
         */
        NUM_DIVISION: 111,
        /**
         * F1
         */
        F1: 112,
        /**
         * F2
         */
        F2: 113,
        /**
         * F3
         */
        F3: 114,
        /**
         * F4
         */
        F4: 115,
        /**
         * F5
         */
        F5: 116,
        /**
         * F6
         */
        F6: 117,
        /**
         * F7
         */
        F7: 118,
        /**
         * F8
         */
        F8: 119,
        /**
         * F9
         */
        F9: 120,
        /**
         * F10
         */
        F10: 121,
        /**
         * F11
         */
        F11: 122,
        /**
         * F12
         */
        F12: 123,
        /**
         * NUMLOCK
         */
        NUMLOCK: 144,
        /**
         * SEMICOLON
         */
        SEMICOLON: 186,
        /**
         * DASH
         */
        DASH: 189,
        /**
         * EQUALS
         */
        EQUALS: 187,
        /**
         * COMMA
         */
        COMMA: 188,
        /**
         * PERIOD
         */
        PERIOD: 190,
        /**
         * SLASH
         */
        SLASH: 191,
        /**
         * APOSTROPHE
         */
        APOSTROPHE: 192,
        /**
         * SINGLE_QUOTE
         */
        SINGLE_QUOTE: 222,
        /**
         * OPEN_SQUARE_BRACKET
         */
        OPEN_SQUARE_BRACKET: 219,
        /**
         * BACKSLASH
         */
        BACKSLASH: 220,
        /**
         * CLOSE_SQUARE_BRACKET
         */
        CLOSE_SQUARE_BRACKET: 221,
        /**
         * WIN_KEY
         */
        WIN_KEY: 224,
        /**
         * MAC_FF_META
         */
        MAC_FF_META: 224,
        /**
         * WIN_IME
         */
        WIN_IME: 229,
        // ======================== Function ========================
        /**
         * whether text and modified key is entered at the same time.
         */
        isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e2) {
          const {
            keyCode
          } = e2;
          if (e2.altKey && !e2.ctrlKey || e2.metaKey || // Function keys don't generate text
          keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
            return false;
          }
          switch (keyCode) {
            case KeyCode.ALT:
            case KeyCode.CAPS_LOCK:
            case KeyCode.CONTEXT_MENU:
            case KeyCode.CTRL:
            case KeyCode.DOWN:
            case KeyCode.END:
            case KeyCode.ESC:
            case KeyCode.HOME:
            case KeyCode.INSERT:
            case KeyCode.LEFT:
            case KeyCode.MAC_FF_META:
            case KeyCode.META:
            case KeyCode.NUMLOCK:
            case KeyCode.NUM_CENTER:
            case KeyCode.PAGE_DOWN:
            case KeyCode.PAGE_UP:
            case KeyCode.PAUSE:
            case KeyCode.PRINT_SCREEN:
            case KeyCode.RIGHT:
            case KeyCode.SHIFT:
            case KeyCode.UP:
            case KeyCode.WIN_KEY:
            case KeyCode.WIN_KEY_RIGHT:
              return false;
            default:
              return true;
          }
        },
        /**
         * whether character is entered.
         */
        isCharacterKey: function isCharacterKey(keyCode) {
          if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
            return true;
          }
          if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
            return true;
          }
          if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
            return true;
          }
          if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
            return true;
          }
          switch (keyCode) {
            case KeyCode.SPACE:
            case KeyCode.QUESTION_MARK:
            case KeyCode.NUM_PLUS:
            case KeyCode.NUM_MINUS:
            case KeyCode.NUM_PERIOD:
            case KeyCode.NUM_DIVISION:
            case KeyCode.SEMICOLON:
            case KeyCode.DASH:
            case KeyCode.EQUALS:
            case KeyCode.COMMA:
            case KeyCode.PERIOD:
            case KeyCode.SLASH:
            case KeyCode.APOSTROPHE:
            case KeyCode.SINGLE_QUOTE:
            case KeyCode.OPEN_SQUARE_BRACKET:
            case KeyCode.BACKSLASH:
            case KeyCode.CLOSE_SQUARE_BRACKET:
              return true;
            default:
              return false;
          }
        }
      };
      const KeyCode$1 = KeyCode;
      const attributes = `accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`;
      const eventsName = `onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`;
      const propList = `${attributes} ${eventsName}`.split(/[\s\n]+/);
      const ariaPrefix = "aria-";
      const dataPrefix = "data-";
      function match(key2, prefix) {
        return key2.indexOf(prefix) === 0;
      }
      function pickAttrs(props) {
        let ariaOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        let mergedConfig;
        if (ariaOnly === false) {
          mergedConfig = {
            aria: true,
            data: true,
            attr: true
          };
        } else if (ariaOnly === true) {
          mergedConfig = {
            aria: true
          };
        } else {
          mergedConfig = _extends({}, ariaOnly);
        }
        const attrs = {};
        Object.keys(props).forEach((key2) => {
          if (
            // Aria
            mergedConfig.aria && (key2 === "role" || match(key2, ariaPrefix)) || // Data
            mergedConfig.data && match(key2, dataPrefix) || // Attr
            mergedConfig.attr && (propList.includes(key2) || propList.includes(key2.toLowerCase()))
          ) {
            attrs[key2] = props[key2];
          }
        });
        return attrs;
      }
      function useMergedState(defaultStateValue, option) {
        const {
          defaultValue,
          value = vue.ref()
        } = option || {};
        let initValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
        if (value.value !== void 0) {
          initValue = vue.unref(value);
        }
        if (defaultValue !== void 0) {
          initValue = typeof defaultValue === "function" ? defaultValue() : defaultValue;
        }
        const innerValue = vue.ref(initValue);
        const mergedValue = vue.ref(initValue);
        vue.watchEffect(() => {
          let val = value.value !== void 0 ? value.value : innerValue.value;
          if (option.postState) {
            val = option.postState(val);
          }
          mergedValue.value = val;
        });
        function triggerChange(newValue) {
          const preVal = mergedValue.value;
          innerValue.value = newValue;
          if (vue.toRaw(mergedValue.value) !== newValue && option.onChange) {
            option.onChange(newValue, preVal);
          }
        }
        vue.watch(value, () => {
          innerValue.value = value.value;
        });
        return [mergedValue, triggerChange];
      }
      function useState(defaultStateValue) {
        const initValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
        const innerValue = vue.ref(initValue);
        function triggerChange(newValue) {
          innerValue.value = newValue;
        }
        return [innerValue, triggerChange];
      }
      var containers = [];
      var styleElements = [];
      var usage = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
      function createStyleElement() {
        var styleElement = document.createElement("style");
        styleElement.setAttribute("type", "text/css");
        return styleElement;
      }
      function insertCss(css2, options) {
        options = options || {};
        if (css2 === void 0) {
          throw new Error(usage);
        }
        var position2 = options.prepend === true ? "prepend" : "append";
        var container = options.container !== void 0 ? options.container : document.querySelector("head");
        var containerId = containers.indexOf(container);
        if (containerId === -1) {
          containerId = containers.push(container) - 1;
          styleElements[containerId] = {};
        }
        var styleElement;
        if (styleElements[containerId] !== void 0 && styleElements[containerId][position2] !== void 0) {
          styleElement = styleElements[containerId][position2];
        } else {
          styleElement = styleElements[containerId][position2] = createStyleElement();
          if (position2 === "prepend") {
            container.insertBefore(styleElement, container.childNodes[0]);
          } else {
            container.appendChild(styleElement);
          }
        }
        if (css2.charCodeAt(0) === 65279) {
          css2 = css2.substr(1, css2.length);
        }
        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText += css2;
        } else {
          styleElement.textContent += css2;
        }
        return styleElement;
      }
      function _objectSpread$o(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$o(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$o(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      function warning(valid, message2) {
      }
      function isIconDefinition(target) {
        return typeof target === "object" && typeof target.name === "string" && typeof target.theme === "string" && (typeof target.icon === "object" || typeof target.icon === "function");
      }
      function generate(node2, key2, rootProps) {
        if (!rootProps) {
          return vue.h(node2.tag, _objectSpread$o({
            key: key2
          }, node2.attrs), (node2.children || []).map(function(child, index2) {
            return generate(child, "".concat(key2, "-").concat(node2.tag, "-").concat(index2));
          }));
        }
        return vue.h(node2.tag, _objectSpread$o({
          key: key2
        }, rootProps, node2.attrs), (node2.children || []).map(function(child, index2) {
          return generate(child, "".concat(key2, "-").concat(node2.tag, "-").concat(index2));
        }));
      }
      function getSecondaryColor(primaryColor) {
        return generate$1(primaryColor)[0];
      }
      function normalizeTwoToneColors(twoToneColor) {
        if (!twoToneColor) {
          return [];
        }
        return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
      }
      var svgBaseProps = {
        width: "1em",
        height: "1em",
        fill: "currentColor",
        "aria-hidden": "true",
        focusable: "false"
      };
      var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
      var cssInjectedFlag = false;
      var useInsertStyles = function useInsertStyles2() {
        var styleStr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : iconStyles;
        vue.nextTick(function() {
          if (!cssInjectedFlag) {
            if (typeof window !== "undefined" && window.document && window.document.documentElement) {
              insertCss(styleStr, {
                prepend: true
              });
            }
            cssInjectedFlag = true;
          }
        });
      };
      var _excluded$2 = ["icon", "primaryColor", "secondaryColor"];
      function _objectWithoutProperties$2(source, excluded) {
        if (source == null)
          return {};
        var target = _objectWithoutPropertiesLoose$2(source, excluded);
        var key2, i2;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
            key2 = sourceSymbolKeys[i2];
            if (excluded.indexOf(key2) >= 0)
              continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key2))
              continue;
            target[key2] = source[key2];
          }
        }
        return target;
      }
      function _objectWithoutPropertiesLoose$2(source, excluded) {
        if (source == null)
          return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key2, i2;
        for (i2 = 0; i2 < sourceKeys.length; i2++) {
          key2 = sourceKeys[i2];
          if (excluded.indexOf(key2) >= 0)
            continue;
          target[key2] = source[key2];
        }
        return target;
      }
      function _objectSpread$n(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$n(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$n(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var twoToneColorPalette = {
        primaryColor: "#333",
        secondaryColor: "#E6E6E6",
        calculated: false
      };
      function setTwoToneColors(_ref) {
        var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
        twoToneColorPalette.primaryColor = primaryColor;
        twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
        twoToneColorPalette.calculated = !!secondaryColor;
      }
      function getTwoToneColors() {
        return _objectSpread$n({}, twoToneColorPalette);
      }
      var IconBase = function IconBase2(props, context2) {
        var _props$context$attrs = _objectSpread$n({}, props, context2.attrs), icon = _props$context$attrs.icon, primaryColor = _props$context$attrs.primaryColor, secondaryColor = _props$context$attrs.secondaryColor, restProps = _objectWithoutProperties$2(_props$context$attrs, _excluded$2);
        var colors = twoToneColorPalette;
        if (primaryColor) {
          colors = {
            primaryColor,
            secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
          };
        }
        useInsertStyles();
        warning(isIconDefinition(icon));
        if (!isIconDefinition(icon)) {
          return null;
        }
        var target = icon;
        if (target && typeof target.icon === "function") {
          target = _objectSpread$n({}, target, {
            icon: target.icon(colors.primaryColor, colors.secondaryColor)
          });
        }
        return generate(target.icon, "svg-".concat(target.name), _objectSpread$n({}, restProps, {
          "data-icon": target.name,
          width: "1em",
          height: "1em",
          fill: "currentColor",
          "aria-hidden": "true"
        }));
      };
      IconBase.props = {
        icon: Object,
        primaryColor: String,
        secondaryColor: String,
        focusable: String
      };
      IconBase.inheritAttrs = false;
      IconBase.displayName = "IconBase";
      IconBase.getTwoToneColors = getTwoToneColors;
      IconBase.setTwoToneColors = setTwoToneColors;
      const VueIcon = IconBase;
      function _slicedToArray$1(arr, i2) {
        return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i2) || _unsupportedIterableToArray$1(arr, i2) || _nonIterableRest$1();
      }
      function _nonIterableRest$1() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray$1(o2, minLen) {
        if (!o2)
          return;
        if (typeof o2 === "string")
          return _arrayLikeToArray$1(o2, minLen);
        var n2 = Object.prototype.toString.call(o2).slice(8, -1);
        if (n2 === "Object" && o2.constructor)
          n2 = o2.constructor.name;
        if (n2 === "Map" || n2 === "Set")
          return Array.from(o2);
        if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
          return _arrayLikeToArray$1(o2, minLen);
      }
      function _arrayLikeToArray$1(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
          arr2[i2] = arr[i2];
        }
        return arr2;
      }
      function _iterableToArrayLimit$1(arr, i2) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
        if (_i == null)
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e;
        try {
          for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i2 && _arr.length === i2)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      function _arrayWithHoles$1(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function setTwoToneColor(twoToneColor) {
        var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray$1(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
        return VueIcon.setTwoToneColors({
          primaryColor,
          secondaryColor
        });
      }
      function getTwoToneColor() {
        var colors = VueIcon.getTwoToneColors();
        if (!colors.calculated) {
          return colors.primaryColor;
        }
        return [colors.primaryColor, colors.secondaryColor];
      }
      var _excluded$1 = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
      function _slicedToArray(arr, i2) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _unsupportedIterableToArray(o2, minLen) {
        if (!o2)
          return;
        if (typeof o2 === "string")
          return _arrayLikeToArray(o2, minLen);
        var n2 = Object.prototype.toString.call(o2).slice(8, -1);
        if (n2 === "Object" && o2.constructor)
          n2 = o2.constructor.name;
        if (n2 === "Map" || n2 === "Set")
          return Array.from(o2);
        if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
          return _arrayLikeToArray(o2, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
          arr2[i2] = arr[i2];
        }
        return arr2;
      }
      function _iterableToArrayLimit(arr, i2) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
        if (_i == null)
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e;
        try {
          for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i2 && _arr.length === i2)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _objectSpread$m(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$m(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$m(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      function _objectWithoutProperties$1(source, excluded) {
        if (source == null)
          return {};
        var target = _objectWithoutPropertiesLoose$1(source, excluded);
        var key2, i2;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
            key2 = sourceSymbolKeys[i2];
            if (excluded.indexOf(key2) >= 0)
              continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key2))
              continue;
            target[key2] = source[key2];
          }
        }
        return target;
      }
      function _objectWithoutPropertiesLoose$1(source, excluded) {
        if (source == null)
          return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key2, i2;
        for (i2 = 0; i2 < sourceKeys.length; i2++) {
          key2 = sourceKeys[i2];
          if (excluded.indexOf(key2) >= 0)
            continue;
          target[key2] = source[key2];
        }
        return target;
      }
      setTwoToneColor("#1890ff");
      var Icon$1 = function Icon2(props, context2) {
        var _classObj;
        var _props$context$attrs = _objectSpread$m({}, props, context2.attrs), cls = _props$context$attrs["class"], icon = _props$context$attrs.icon, spin = _props$context$attrs.spin, rotate = _props$context$attrs.rotate, tabindex = _props$context$attrs.tabindex, twoToneColor = _props$context$attrs.twoToneColor, onClick = _props$context$attrs.onClick, restProps = _objectWithoutProperties$1(_props$context$attrs, _excluded$1);
        var classObj = (_classObj = {
          anticon: true
        }, _defineProperty$m(_classObj, "anticon-".concat(icon.name), Boolean(icon.name)), _defineProperty$m(_classObj, cls, cls), _classObj);
        var svgClassString = spin === "" || !!spin || icon.name === "loading" ? "anticon-spin" : "";
        var iconTabIndex = tabindex;
        if (iconTabIndex === void 0 && onClick) {
          iconTabIndex = -1;
          restProps.tabindex = iconTabIndex;
        }
        var svgStyle = rotate ? {
          msTransform: "rotate(".concat(rotate, "deg)"),
          transform: "rotate(".concat(rotate, "deg)")
        } : void 0;
        var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
        return vue.createVNode("span", _objectSpread$m({
          "role": "img",
          "aria-label": icon.name
        }, restProps, {
          "onClick": onClick,
          "class": classObj
        }), [vue.createVNode(VueIcon, {
          "class": svgClassString,
          "icon": icon,
          "primaryColor": primaryColor,
          "secondaryColor": secondaryColor,
          "style": svgStyle
        }, null)]);
      };
      Icon$1.props = {
        spin: Boolean,
        rotate: Number,
        icon: Object,
        twoToneColor: String
      };
      Icon$1.displayName = "AntdIcon";
      Icon$1.inheritAttrs = false;
      Icon$1.getTwoToneColor = getTwoToneColor;
      Icon$1.setTwoToneColor = setTwoToneColor;
      const AntdIcon = Icon$1;
      var LoadingOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
      const LoadingOutlinedSvg = LoadingOutlined$2;
      function _objectSpread$l(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$l(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$l(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var LoadingOutlined = function LoadingOutlined2(props, context2) {
        var p = _objectSpread$l({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$l({}, p, {
          "icon": LoadingOutlinedSvg
        }), null);
      };
      LoadingOutlined.displayName = "LoadingOutlined";
      LoadingOutlined.inheritAttrs = false;
      const LoadingOutlined$1 = LoadingOutlined;
      var CloseOutlined$3 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, "name": "close", "theme": "outlined" };
      const CloseOutlinedSvg = CloseOutlined$3;
      function _objectSpread$k(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$k(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$k(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var CloseOutlined$1 = function CloseOutlined2(props, context2) {
        var p = _objectSpread$k({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$k({}, p, {
          "icon": CloseOutlinedSvg
        }), null);
      };
      CloseOutlined$1.displayName = "CloseOutlined";
      CloseOutlined$1.inheritAttrs = false;
      const CloseOutlined$2 = CloseOutlined$1;
      var CloseCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, "name": "close-circle", "theme": "filled" };
      const CloseCircleFilledSvg = CloseCircleFilled$2;
      function _objectSpread$j(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$j(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$j(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var CloseCircleFilled = function CloseCircleFilled2(props, context2) {
        var p = _objectSpread$j({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$j({}, p, {
          "icon": CloseCircleFilledSvg
        }), null);
      };
      CloseCircleFilled.displayName = "CloseCircleFilled";
      CloseCircleFilled.inheritAttrs = false;
      const CloseCircleFilled$1 = CloseCircleFilled;
      function createContext(defaultValue) {
        const contextKey = Symbol("contextKey");
        const useProvide = (props, newProps) => {
          const mergedProps = vue.reactive({});
          vue.provide(contextKey, mergedProps);
          vue.watchEffect(() => {
            _extends(mergedProps, props, newProps || {});
          });
          return mergedProps;
        };
        const useInject = () => {
          return vue.inject(contextKey, defaultValue) || {};
        };
        return {
          useProvide,
          useInject
        };
      }
      const genSpaceCompactStyle = (token2) => {
        const {
          componentCls
        } = token2;
        return {
          [componentCls]: {
            display: "inline-flex",
            "&-block": {
              display: "flex",
              width: "100%"
            },
            "&-vertical": {
              flexDirection: "column"
            }
          }
        };
      };
      const genSpaceCompactStyle$1 = genSpaceCompactStyle;
      const genSpaceStyle = (token2) => {
        const {
          componentCls
        } = token2;
        return {
          [componentCls]: {
            display: "inline-flex",
            "&-rtl": {
              direction: "rtl"
            },
            "&-vertical": {
              flexDirection: "column"
            },
            "&-align": {
              flexDirection: "column",
              "&-center": {
                alignItems: "center"
              },
              "&-start": {
                alignItems: "flex-start"
              },
              "&-end": {
                alignItems: "flex-end"
              },
              "&-baseline": {
                alignItems: "baseline"
              }
            },
            [`${componentCls}-space-item`]: {
              "&:empty": {
                display: "none"
              }
            }
          }
        };
      };
      const useStyle$c = genComponentStyleHook("Space", (token2) => [genSpaceStyle(token2), genSpaceCompactStyle$1(token2)]);
      var mapTag = "[object Map]", setTag = "[object Set]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray$1(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer$1(value) || isTypedArray$1(value) || isArguments$1(value))) {
          return !value.length;
        }
        var tag = getTag$1(value);
        if (tag == mapTag || tag == setTag) {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !baseKeys(value).length;
        }
        for (var key2 in value) {
          if (hasOwnProperty.call(value, key2)) {
            return false;
          }
        }
        return true;
      }
      var numberTag = "[object Number]";
      function isNumber(value) {
        return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
      }
      const spaceCompactItemProps = () => ({
        compactSize: String,
        compactDirection: PropTypes$1.oneOf(tuple("horizontal", "vertical")).def("horizontal"),
        isFirstItem: booleanType(),
        isLastItem: booleanType()
      });
      const SpaceCompactItemContext = createContext(null);
      const useCompactItemContext = (prefixCls, direction) => {
        const compactItemContext = SpaceCompactItemContext.useInject();
        const compactItemClassnames = vue.computed(() => {
          if (!compactItemContext || isEmpty(compactItemContext))
            return "";
          const {
            compactDirection,
            isFirstItem,
            isLastItem
          } = compactItemContext;
          const separator = compactDirection === "vertical" ? "-vertical-" : "-";
          return classNames({
            [`${prefixCls.value}-compact${separator}item`]: true,
            [`${prefixCls.value}-compact${separator}first-item`]: isFirstItem,
            [`${prefixCls.value}-compact${separator}last-item`]: isLastItem,
            [`${prefixCls.value}-compact${separator}item-rtl`]: direction.value === "rtl"
          });
        });
        return {
          compactSize: vue.computed(() => compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize),
          compactDirection: vue.computed(() => compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection),
          compactItemClassnames
        };
      };
      vue.defineComponent({
        name: "NoCompactStyle",
        setup(_2, _ref) {
          let {
            slots
          } = _ref;
          SpaceCompactItemContext.useProvide(null);
          return () => {
            var _a;
            return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
          };
        }
      });
      const spaceCompactProps = () => ({
        prefixCls: String,
        size: {
          type: String
        },
        direction: PropTypes$1.oneOf(tuple("horizontal", "vertical")).def("horizontal"),
        align: PropTypes$1.oneOf(tuple("start", "end", "center", "baseline")),
        block: {
          type: Boolean,
          default: void 0
        }
      });
      const CompactItem = vue.defineComponent({
        name: "CompactItem",
        props: spaceCompactItemProps(),
        setup(props, _ref2) {
          let {
            slots
          } = _ref2;
          SpaceCompactItemContext.useProvide(props);
          return () => {
            var _a;
            return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
          };
        }
      });
      const Compact = vue.defineComponent({
        name: "ASpaceCompact",
        inheritAttrs: false,
        props: spaceCompactProps(),
        setup(props, _ref3) {
          let {
            attrs,
            slots
          } = _ref3;
          const {
            prefixCls,
            direction: directionConfig
          } = useConfigInject("space-compact", props);
          const compactItemContext = SpaceCompactItemContext.useInject();
          const [wrapSSR, hashId] = useStyle$c(prefixCls);
          const clx = vue.computed(() => {
            return classNames(prefixCls.value, hashId.value, {
              [`${prefixCls.value}-rtl`]: directionConfig.value === "rtl",
              [`${prefixCls.value}-block`]: props.block,
              [`${prefixCls.value}-vertical`]: props.direction === "vertical"
            });
          });
          return () => {
            var _a;
            const childNodes = flattenChildren(((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []);
            if (childNodes.length === 0) {
              return null;
            }
            return wrapSSR(vue.createVNode("div", _objectSpread2$1(_objectSpread2$1({}, attrs), {}, {
              "class": [clx.value, attrs.class]
            }), [childNodes.map((child, i2) => {
              var _a2;
              const key2 = child && child.key || `${prefixCls.value}-item-${i2}`;
              const noCompactItemContext = !compactItemContext || isEmpty(compactItemContext);
              return vue.createVNode(CompactItem, {
                "key": key2,
                "compactSize": (_a2 = props.size) !== null && _a2 !== void 0 ? _a2 : "middle",
                "compactDirection": props.direction,
                "isFirstItem": i2 === 0 && (noCompactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
                "isLastItem": i2 === childNodes.length - 1 && (noCompactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
              }, {
                default: () => [child]
              });
            })]));
          };
        }
      });
      const __unplugin_components_2 = Compact;
      const initMotionCommon = (duration) => ({
        animationDuration: duration,
        animationFillMode: "both"
      });
      const initMotionCommonLeave = (duration) => ({
        animationDuration: duration,
        animationFillMode: "both"
      });
      const initMotion = function(motionCls, inKeyframes, outKeyframes, duration) {
        let sameLevel = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
        const sameLevelPrefix = sameLevel ? "&" : "";
        return {
          [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: _extends(_extends({}, initMotionCommon(duration)), {
            animationPlayState: "paused"
          }),
          [`${sameLevelPrefix}${motionCls}-leave`]: _extends(_extends({}, initMotionCommonLeave(duration)), {
            animationPlayState: "paused"
          }),
          [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
            animationName: inKeyframes,
            animationPlayState: "running"
          },
          [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
            animationName: outKeyframes,
            animationPlayState: "running",
            pointerEvents: "none"
          }
        };
      };
      const fadeIn = new Keyframes("antFadeIn", {
        "0%": {
          opacity: 0
        },
        "100%": {
          opacity: 1
        }
      });
      const fadeOut = new Keyframes("antFadeOut", {
        "0%": {
          opacity: 1
        },
        "100%": {
          opacity: 0
        }
      });
      const initFadeMotion = function(token2) {
        let sameLevel = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        const {
          antCls
        } = token2;
        const motionCls = `${antCls}-fade`;
        const sameLevelPrefix = sameLevel ? "&" : "";
        return [initMotion(motionCls, fadeIn, fadeOut, token2.motionDurationMid, sameLevel), {
          [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
            opacity: 0,
            animationTimingFunction: "linear"
          },
          [`${sameLevelPrefix}${motionCls}-leave`]: {
            animationTimingFunction: "linear"
          }
        }];
      };
      const zoomIn = new Keyframes("antZoomIn", {
        "0%": {
          transform: "scale(0.2)",
          opacity: 0
        },
        "100%": {
          transform: "scale(1)",
          opacity: 1
        }
      });
      const zoomOut = new Keyframes("antZoomOut", {
        "0%": {
          transform: "scale(1)"
        },
        "100%": {
          transform: "scale(0.2)",
          opacity: 0
        }
      });
      const zoomBigIn = new Keyframes("antZoomBigIn", {
        "0%": {
          transform: "scale(0.8)",
          opacity: 0
        },
        "100%": {
          transform: "scale(1)",
          opacity: 1
        }
      });
      const zoomBigOut = new Keyframes("antZoomBigOut", {
        "0%": {
          transform: "scale(1)"
        },
        "100%": {
          transform: "scale(0.8)",
          opacity: 0
        }
      });
      const zoomUpIn = new Keyframes("antZoomUpIn", {
        "0%": {
          transform: "scale(0.8)",
          transformOrigin: "50% 0%",
          opacity: 0
        },
        "100%": {
          transform: "scale(1)",
          transformOrigin: "50% 0%"
        }
      });
      const zoomUpOut = new Keyframes("antZoomUpOut", {
        "0%": {
          transform: "scale(1)",
          transformOrigin: "50% 0%"
        },
        "100%": {
          transform: "scale(0.8)",
          transformOrigin: "50% 0%",
          opacity: 0
        }
      });
      const zoomLeftIn = new Keyframes("antZoomLeftIn", {
        "0%": {
          transform: "scale(0.8)",
          transformOrigin: "0% 50%",
          opacity: 0
        },
        "100%": {
          transform: "scale(1)",
          transformOrigin: "0% 50%"
        }
      });
      const zoomLeftOut = new Keyframes("antZoomLeftOut", {
        "0%": {
          transform: "scale(1)",
          transformOrigin: "0% 50%"
        },
        "100%": {
          transform: "scale(0.8)",
          transformOrigin: "0% 50%",
          opacity: 0
        }
      });
      const zoomRightIn = new Keyframes("antZoomRightIn", {
        "0%": {
          transform: "scale(0.8)",
          transformOrigin: "100% 50%",
          opacity: 0
        },
        "100%": {
          transform: "scale(1)",
          transformOrigin: "100% 50%"
        }
      });
      const zoomRightOut = new Keyframes("antZoomRightOut", {
        "0%": {
          transform: "scale(1)",
          transformOrigin: "100% 50%"
        },
        "100%": {
          transform: "scale(0.8)",
          transformOrigin: "100% 50%",
          opacity: 0
        }
      });
      const zoomDownIn = new Keyframes("antZoomDownIn", {
        "0%": {
          transform: "scale(0.8)",
          transformOrigin: "50% 100%",
          opacity: 0
        },
        "100%": {
          transform: "scale(1)",
          transformOrigin: "50% 100%"
        }
      });
      const zoomDownOut = new Keyframes("antZoomDownOut", {
        "0%": {
          transform: "scale(1)",
          transformOrigin: "50% 100%"
        },
        "100%": {
          transform: "scale(0.8)",
          transformOrigin: "50% 100%",
          opacity: 0
        }
      });
      const zoomMotion = {
        zoom: {
          inKeyframes: zoomIn,
          outKeyframes: zoomOut
        },
        "zoom-big": {
          inKeyframes: zoomBigIn,
          outKeyframes: zoomBigOut
        },
        "zoom-big-fast": {
          inKeyframes: zoomBigIn,
          outKeyframes: zoomBigOut
        },
        "zoom-left": {
          inKeyframes: zoomLeftIn,
          outKeyframes: zoomLeftOut
        },
        "zoom-right": {
          inKeyframes: zoomRightIn,
          outKeyframes: zoomRightOut
        },
        "zoom-up": {
          inKeyframes: zoomUpIn,
          outKeyframes: zoomUpOut
        },
        "zoom-down": {
          inKeyframes: zoomDownIn,
          outKeyframes: zoomDownOut
        }
      };
      const initZoomMotion = (token2, motionName) => {
        const {
          antCls
        } = token2;
        const motionCls = `${antCls}-${motionName}`;
        const {
          inKeyframes,
          outKeyframes
        } = zoomMotion[motionName];
        return [initMotion(motionCls, inKeyframes, outKeyframes, motionName === "zoom-big-fast" ? token2.motionDurationFast : token2.motionDurationMid), {
          [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
            transform: "scale(0)",
            opacity: 0,
            animationTimingFunction: token2.motionEaseOutCirc,
            "&-prepare": {
              transform: "none"
            }
          },
          [`${motionCls}-leave`]: {
            animationTimingFunction: token2.motionEaseInOutCirc
          }
        }];
      };
      const genCollapseMotion = (token2) => ({
        [token2.componentCls]: {
          // For common/openAnimation
          [`${token2.antCls}-motion-collapse-legacy`]: {
            overflow: "hidden",
            "&-active": {
              transition: `height ${token2.motionDurationMid} ${token2.motionEaseInOut},
        opacity ${token2.motionDurationMid} ${token2.motionEaseInOut} !important`
            }
          },
          [`${token2.antCls}-motion-collapse`]: {
            overflow: "hidden",
            transition: `height ${token2.motionDurationMid} ${token2.motionEaseInOut},
        opacity ${token2.motionDurationMid} ${token2.motionEaseInOut} !important`
          }
        }
      });
      const genCollapseMotion$1 = genCollapseMotion;
      function compactItemBorder(token2, parentCls, options) {
        const {
          focusElCls,
          focus,
          borderElCls
        } = options;
        const childCombinator = borderElCls ? "> *" : "";
        const hoverEffects = ["hover", focus ? "focus" : null, "active"].filter(Boolean).map((n2) => `&:${n2} ${childCombinator}`).join(",");
        return {
          [`&-item:not(${parentCls}-last-item)`]: {
            marginInlineEnd: -token2.lineWidth
          },
          "&-item": _extends(_extends({
            [hoverEffects]: {
              zIndex: 2
            }
          }, focusElCls ? {
            [`&${focusElCls}`]: {
              zIndex: 2
            }
          } : {}), {
            [`&[disabled] ${childCombinator}`]: {
              zIndex: 0
            }
          })
        };
      }
      function compactItemBorderRadius(prefixCls, parentCls, options) {
        const {
          borderElCls
        } = options;
        const childCombinator = borderElCls ? `> ${borderElCls}` : "";
        return {
          [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
            borderRadius: 0
          },
          [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
            [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
            [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        };
      }
      function genCompactItemStyle(token2) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
          focus: true
        };
        const {
          componentCls
        } = token2;
        const compactCls = `${componentCls}-compact`;
        return {
          [compactCls]: _extends(_extends({}, compactItemBorder(token2, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
        };
      }
      var CheckCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, "name": "check-circle", "theme": "outlined" };
      const CheckCircleOutlinedSvg = CheckCircleOutlined$2;
      function _objectSpread$i(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$i(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$i(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var CheckCircleOutlined = function CheckCircleOutlined2(props, context2) {
        var p = _objectSpread$i({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$i({}, p, {
          "icon": CheckCircleOutlinedSvg
        }), null);
      };
      CheckCircleOutlined.displayName = "CheckCircleOutlined";
      CheckCircleOutlined.inheritAttrs = false;
      const CheckCircleOutlined$1 = CheckCircleOutlined;
      var ExclamationCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, "name": "exclamation-circle", "theme": "outlined" };
      const ExclamationCircleOutlinedSvg = ExclamationCircleOutlined$2;
      function _objectSpread$h(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$h(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$h(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var ExclamationCircleOutlined = function ExclamationCircleOutlined2(props, context2) {
        var p = _objectSpread$h({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$h({}, p, {
          "icon": ExclamationCircleOutlinedSvg
        }), null);
      };
      ExclamationCircleOutlined.displayName = "ExclamationCircleOutlined";
      ExclamationCircleOutlined.inheritAttrs = false;
      const ExclamationCircleOutlined$1 = ExclamationCircleOutlined;
      var InfoCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, "name": "info-circle", "theme": "outlined" };
      const InfoCircleOutlinedSvg = InfoCircleOutlined$2;
      function _objectSpread$g(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$g(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$g(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var InfoCircleOutlined = function InfoCircleOutlined2(props, context2) {
        var p = _objectSpread$g({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$g({}, p, {
          "icon": InfoCircleOutlinedSvg
        }), null);
      };
      InfoCircleOutlined.displayName = "InfoCircleOutlined";
      InfoCircleOutlined.inheritAttrs = false;
      const InfoCircleOutlined$1 = InfoCircleOutlined;
      var CloseCircleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, "name": "close-circle", "theme": "outlined" };
      const CloseCircleOutlinedSvg = CloseCircleOutlined$2;
      function _objectSpread$f(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$f(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$f(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var CloseCircleOutlined = function CloseCircleOutlined2(props, context2) {
        var p = _objectSpread$f({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$f({}, p, {
          "icon": CloseCircleOutlinedSvg
        }), null);
      };
      CloseCircleOutlined.displayName = "CloseCircleOutlined";
      CloseCircleOutlined.inheritAttrs = false;
      const CloseCircleOutlined$1 = CloseCircleOutlined;
      var CheckCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, "name": "check-circle", "theme": "filled" };
      const CheckCircleFilledSvg = CheckCircleFilled$2;
      function _objectSpread$e(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$e(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$e(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var CheckCircleFilled = function CheckCircleFilled2(props, context2) {
        var p = _objectSpread$e({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$e({}, p, {
          "icon": CheckCircleFilledSvg
        }), null);
      };
      CheckCircleFilled.displayName = "CheckCircleFilled";
      CheckCircleFilled.inheritAttrs = false;
      const CheckCircleFilled$1 = CheckCircleFilled;
      var ExclamationCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "exclamation-circle", "theme": "filled" };
      const ExclamationCircleFilledSvg = ExclamationCircleFilled$2;
      function _objectSpread$d(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$d(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$d(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var ExclamationCircleFilled = function ExclamationCircleFilled2(props, context2) {
        var p = _objectSpread$d({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$d({}, p, {
          "icon": ExclamationCircleFilledSvg
        }), null);
      };
      ExclamationCircleFilled.displayName = "ExclamationCircleFilled";
      ExclamationCircleFilled.inheritAttrs = false;
      const ExclamationCircleFilled$1 = ExclamationCircleFilled;
      var InfoCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, "name": "info-circle", "theme": "filled" };
      const InfoCircleFilledSvg = InfoCircleFilled$2;
      function _objectSpread$c(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$c(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$c(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var InfoCircleFilled = function InfoCircleFilled2(props, context2) {
        var p = _objectSpread$c({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$c({}, p, {
          "icon": InfoCircleFilledSvg
        }), null);
      };
      InfoCircleFilled.displayName = "InfoCircleFilled";
      InfoCircleFilled.inheritAttrs = false;
      const InfoCircleFilled$1 = InfoCircleFilled;
      const responsiveArray = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"];
      const getResponsiveMap = (token2) => ({
        xs: `(max-width: ${token2.screenXSMax}px)`,
        sm: `(min-width: ${token2.screenSM}px)`,
        md: `(min-width: ${token2.screenMD}px)`,
        lg: `(min-width: ${token2.screenLG}px)`,
        xl: `(min-width: ${token2.screenXL}px)`,
        xxl: `(min-width: ${token2.screenXXL}px)`,
        xxxl: `{min-width: ${token2.screenXXXL}px}`
      });
      function useResponsiveObserver() {
        const [, token2] = useToken();
        return vue.computed(() => {
          const responsiveMap = getResponsiveMap(token2.value);
          const subscribers = /* @__PURE__ */ new Map();
          let subUid = -1;
          let screens = {};
          return {
            matchHandlers: {},
            dispatch(pointMap) {
              screens = pointMap;
              subscribers.forEach((func) => func(screens));
              return subscribers.size >= 1;
            },
            subscribe(func) {
              if (!subscribers.size)
                this.register();
              subUid += 1;
              subscribers.set(subUid, func);
              func(screens);
              return subUid;
            },
            unsubscribe(paramToken) {
              subscribers.delete(paramToken);
              if (!subscribers.size)
                this.unregister();
            },
            unregister() {
              Object.keys(responsiveMap).forEach((screen) => {
                const matchMediaQuery = responsiveMap[screen];
                const handler = this.matchHandlers[matchMediaQuery];
                handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
              });
              subscribers.clear();
            },
            register() {
              Object.keys(responsiveMap).forEach((screen) => {
                const matchMediaQuery = responsiveMap[screen];
                const listener = (_ref) => {
                  let {
                    matches
                  } = _ref;
                  this.dispatch(_extends(_extends({}, screens), {
                    [screen]: matches
                  }));
                };
                const mql = window.matchMedia(matchMediaQuery);
                mql.addListener(listener);
                this.matchHandlers[matchMediaQuery] = {
                  mql,
                  listener
                };
                listener(mql);
              });
            },
            responsiveMap
          };
        });
      }
      function useBreakpoint() {
        const screens = vue.shallowRef({});
        let token2 = null;
        const responsiveObserve = useResponsiveObserver();
        vue.onMounted(() => {
          token2 = responsiveObserve.value.subscribe((supportScreens) => {
            screens.value = supportScreens;
          });
        });
        vue.onUnmounted(() => {
          responsiveObserve.value.unsubscribe(token2);
        });
        return screens;
      }
      function eagerComputed(fn) {
        const result = vue.shallowRef();
        vue.watchEffect(() => {
          result.value = fn();
        }, {
          flush: "sync"
          // needed so updates are immediate.
        });
        return result;
      }
      const genBaseStyle$2 = (token2) => {
        const {
          antCls,
          componentCls,
          iconCls,
          avatarBg,
          avatarColor,
          containerSize,
          containerSizeLG,
          containerSizeSM,
          textFontSize,
          textFontSizeLG,
          textFontSizeSM,
          borderRadius,
          borderRadiusLG,
          borderRadiusSM,
          lineWidth,
          lineType
        } = token2;
        const avatarSizeStyle = (size, fontSize, radius) => ({
          width: size,
          height: size,
          lineHeight: `${size - lineWidth * 2}px`,
          borderRadius: "50%",
          [`&${componentCls}-square`]: {
            borderRadius: radius
          },
          [`${componentCls}-string`]: {
            position: "absolute",
            left: {
              _skip_check_: true,
              value: "50%"
            },
            transformOrigin: "0 center"
          },
          [`&${componentCls}-icon`]: {
            fontSize,
            [`> ${iconCls}`]: {
              margin: 0
            }
          }
        });
        return {
          [componentCls]: _extends(_extends(_extends(_extends({}, resetComponent(token2)), {
            position: "relative",
            display: "inline-block",
            overflow: "hidden",
            color: avatarColor,
            whiteSpace: "nowrap",
            textAlign: "center",
            verticalAlign: "middle",
            background: avatarBg,
            border: `${lineWidth}px ${lineType} transparent`,
            [`&-image`]: {
              background: "transparent"
            },
            [`${antCls}-image-img`]: {
              display: "block"
            }
          }), avatarSizeStyle(containerSize, textFontSize, borderRadius)), {
            [`&-lg`]: _extends({}, avatarSizeStyle(containerSizeLG, textFontSizeLG, borderRadiusLG)),
            [`&-sm`]: _extends({}, avatarSizeStyle(containerSizeSM, textFontSizeSM, borderRadiusSM)),
            "> img": {
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          })
        };
      };
      const genGroupStyle$2 = (token2) => {
        const {
          componentCls,
          groupBorderColor,
          groupOverlapping,
          groupSpace
        } = token2;
        return {
          [`${componentCls}-group`]: {
            display: "inline-flex",
            [`${componentCls}`]: {
              borderColor: groupBorderColor
            },
            [`> *:not(:first-child)`]: {
              marginInlineStart: groupOverlapping
            }
          },
          [`${componentCls}-group-popover`]: {
            [`${componentCls} + ${componentCls}`]: {
              marginInlineStart: groupSpace
            }
          }
        };
      };
      const useStyle$b = genComponentStyleHook("Avatar", (token2) => {
        const {
          colorTextLightSolid,
          colorTextPlaceholder
        } = token2;
        const avatarToken = merge(token2, {
          avatarBg: colorTextPlaceholder,
          avatarColor: colorTextLightSolid
        });
        return [genBaseStyle$2(avatarToken), genGroupStyle$2(avatarToken)];
      }, (token2) => {
        const {
          controlHeight,
          controlHeightLG,
          controlHeightSM,
          fontSize,
          fontSizeLG,
          fontSizeXL,
          fontSizeHeading3,
          marginXS,
          marginXXS,
          colorBorderBg
        } = token2;
        return {
          containerSize: controlHeight,
          containerSizeLG: controlHeightLG,
          containerSizeSM: controlHeightSM,
          textFontSize: Math.round((fontSizeLG + fontSizeXL) / 2),
          textFontSizeLG: fontSizeHeading3,
          textFontSizeSM: fontSize,
          groupSpace: marginXXS,
          groupOverlapping: -marginXS,
          groupBorderColor: colorBorderBg
        };
      });
      const AvatarContextKey = Symbol("AvatarContextKey");
      const useAvatarInjectContext = () => {
        return vue.inject(AvatarContextKey, {});
      };
      const useAvatarProviderContext = (context2) => {
        return vue.provide(AvatarContextKey, context2);
      };
      const avatarProps = () => ({
        prefixCls: String,
        shape: {
          type: String,
          default: "circle"
        },
        size: {
          type: [Number, String, Object],
          default: () => "default"
        },
        src: String,
        /** Srcset of image avatar */
        srcset: String,
        icon: PropTypes$1.any,
        alt: String,
        gap: Number,
        draggable: {
          type: Boolean,
          default: void 0
        },
        crossOrigin: String,
        loadError: {
          type: Function
        }
      });
      const Avatar = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "AAvatar",
        inheritAttrs: false,
        props: avatarProps(),
        slots: Object,
        setup(props, _ref) {
          let {
            slots,
            attrs
          } = _ref;
          const isImgExist = vue.shallowRef(true);
          const isMounted = vue.shallowRef(false);
          const scale = vue.shallowRef(1);
          const avatarChildrenRef = vue.shallowRef(null);
          const avatarNodeRef = vue.shallowRef(null);
          const {
            prefixCls
          } = useConfigInject("avatar", props);
          const [wrapSSR, hashId] = useStyle$b(prefixCls);
          const avatarCtx = useAvatarInjectContext();
          const size = vue.computed(() => {
            return props.size === "default" ? avatarCtx.size : props.size;
          });
          const screens = useBreakpoint();
          const responsiveSize = eagerComputed(() => {
            if (typeof props.size !== "object") {
              return void 0;
            }
            const currentBreakpoint = responsiveArray.find((screen) => screens.value[screen]);
            const currentSize = props.size[currentBreakpoint];
            return currentSize;
          });
          const responsiveSizeStyle = (hasIcon) => {
            if (responsiveSize.value) {
              return {
                width: `${responsiveSize.value}px`,
                height: `${responsiveSize.value}px`,
                lineHeight: `${responsiveSize.value}px`,
                fontSize: `${hasIcon ? responsiveSize.value / 2 : 18}px`
              };
            }
            return {};
          };
          const setScaleParam = () => {
            if (!avatarChildrenRef.value || !avatarNodeRef.value) {
              return;
            }
            const childrenWidth = avatarChildrenRef.value.offsetWidth;
            const nodeWidth = avatarNodeRef.value.offsetWidth;
            if (childrenWidth !== 0 && nodeWidth !== 0) {
              const {
                gap = 4
              } = props;
              if (gap * 2 < nodeWidth) {
                scale.value = nodeWidth - gap * 2 < childrenWidth ? (nodeWidth - gap * 2) / childrenWidth : 1;
              }
            }
          };
          const handleImgLoadError = () => {
            const {
              loadError
            } = props;
            const errorFlag = loadError === null || loadError === void 0 ? void 0 : loadError();
            if (errorFlag !== false) {
              isImgExist.value = false;
            }
          };
          vue.watch(() => props.src, () => {
            vue.nextTick(() => {
              isImgExist.value = true;
              scale.value = 1;
            });
          });
          vue.watch(() => props.gap, () => {
            vue.nextTick(() => {
              setScaleParam();
            });
          });
          vue.onMounted(() => {
            vue.nextTick(() => {
              setScaleParam();
              isMounted.value = true;
            });
          });
          return () => {
            var _a, _b;
            const {
              shape,
              src,
              alt,
              srcset,
              draggable,
              crossOrigin
            } = props;
            const mergeShape = (_a = avatarCtx.shape) !== null && _a !== void 0 ? _a : shape;
            const icon = getPropsSlot(slots, props, "icon");
            const pre = prefixCls.value;
            const classString = {
              [`${attrs.class}`]: !!attrs.class,
              [pre]: true,
              [`${pre}-lg`]: size.value === "large",
              [`${pre}-sm`]: size.value === "small",
              [`${pre}-${mergeShape}`]: true,
              [`${pre}-image`]: src && isImgExist.value,
              [`${pre}-icon`]: icon,
              [hashId.value]: true
            };
            const sizeStyle = typeof size.value === "number" ? {
              width: `${size.value}px`,
              height: `${size.value}px`,
              lineHeight: `${size.value}px`,
              fontSize: icon ? `${size.value / 2}px` : "18px"
            } : {};
            const children = (_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots);
            let childrenToRender;
            if (src && isImgExist.value) {
              childrenToRender = vue.createVNode("img", {
                "draggable": draggable,
                "src": src,
                "srcset": srcset,
                "onError": handleImgLoadError,
                "alt": alt,
                "crossorigin": crossOrigin
              }, null);
            } else if (icon) {
              childrenToRender = icon;
            } else if (isMounted.value || scale.value !== 1) {
              const transformString = `scale(${scale.value}) translateX(-50%)`;
              const childrenStyle = {
                msTransform: transformString,
                WebkitTransform: transformString,
                transform: transformString
              };
              const sizeChildrenStyle = typeof size.value === "number" ? {
                lineHeight: `${size.value}px`
              } : {};
              childrenToRender = vue.createVNode(ResizeObserver$1, {
                "onResize": setScaleParam
              }, {
                default: () => [vue.createVNode("span", {
                  "class": `${pre}-string`,
                  "ref": avatarChildrenRef,
                  "style": _extends(_extends({}, sizeChildrenStyle), childrenStyle)
                }, [children])]
              });
            } else {
              childrenToRender = vue.createVNode("span", {
                "class": `${pre}-string`,
                "ref": avatarChildrenRef,
                "style": {
                  opacity: 0
                }
              }, [children]);
            }
            return wrapSSR(vue.createVNode("span", _objectSpread2$1(_objectSpread2$1({}, attrs), {}, {
              "ref": avatarNodeRef,
              "class": classString,
              "style": [sizeStyle, responsiveSizeStyle(!!icon), attrs.style]
            }), [childrenToRender]));
          };
        }
      });
      const Avatar$1 = Avatar;
      const autoAdjustOverflow = {
        adjustX: 1,
        adjustY: 1
      };
      const targetOffset$1 = [0, 0];
      const placements = {
        left: {
          points: ["cr", "cl"],
          overflow: autoAdjustOverflow,
          offset: [-4, 0],
          targetOffset: targetOffset$1
        },
        right: {
          points: ["cl", "cr"],
          overflow: autoAdjustOverflow,
          offset: [4, 0],
          targetOffset: targetOffset$1
        },
        top: {
          points: ["bc", "tc"],
          overflow: autoAdjustOverflow,
          offset: [0, -4],
          targetOffset: targetOffset$1
        },
        bottom: {
          points: ["tc", "bc"],
          overflow: autoAdjustOverflow,
          offset: [0, 4],
          targetOffset: targetOffset$1
        },
        topLeft: {
          points: ["bl", "tl"],
          overflow: autoAdjustOverflow,
          offset: [0, -4],
          targetOffset: targetOffset$1
        },
        leftTop: {
          points: ["tr", "tl"],
          overflow: autoAdjustOverflow,
          offset: [-4, 0],
          targetOffset: targetOffset$1
        },
        topRight: {
          points: ["br", "tr"],
          overflow: autoAdjustOverflow,
          offset: [0, -4],
          targetOffset: targetOffset$1
        },
        rightTop: {
          points: ["tl", "tr"],
          overflow: autoAdjustOverflow,
          offset: [4, 0],
          targetOffset: targetOffset$1
        },
        bottomRight: {
          points: ["tr", "br"],
          overflow: autoAdjustOverflow,
          offset: [0, 4],
          targetOffset: targetOffset$1
        },
        rightBottom: {
          points: ["bl", "br"],
          overflow: autoAdjustOverflow,
          offset: [4, 0],
          targetOffset: targetOffset$1
        },
        bottomLeft: {
          points: ["tl", "bl"],
          overflow: autoAdjustOverflow,
          offset: [0, 4],
          targetOffset: targetOffset$1
        },
        leftBottom: {
          points: ["br", "bl"],
          overflow: autoAdjustOverflow,
          offset: [-4, 0],
          targetOffset: targetOffset$1
        }
      };
      const tooltipContentProps = {
        prefixCls: String,
        id: String,
        overlayInnerStyle: PropTypes$1.any
      };
      const Content$1 = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "TooltipContent",
        props: tooltipContentProps,
        setup(props, _ref) {
          let {
            slots
          } = _ref;
          return () => {
            var _a;
            return vue.createVNode("div", {
              "class": `${props.prefixCls}-inner`,
              "id": props.id,
              "role": "tooltip",
              "style": props.overlayInnerStyle
            }, [(_a = slots.overlay) === null || _a === void 0 ? void 0 : _a.call(slots)]);
          };
        }
      });
      var __rest$8 = globalThis && globalThis.__rest || function(s2, e2) {
        var t2 = {};
        for (var p in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
            t2[p] = s2[p];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
            if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
              t2[p[i2]] = s2[p[i2]];
          }
        return t2;
      };
      function noop() {
      }
      const Tooltip$1 = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "Tooltip",
        inheritAttrs: false,
        props: {
          trigger: PropTypes$1.any.def(["hover"]),
          defaultVisible: {
            type: Boolean,
            default: void 0
          },
          visible: {
            type: Boolean,
            default: void 0
          },
          placement: PropTypes$1.string.def("right"),
          transitionName: String,
          animation: PropTypes$1.any,
          afterVisibleChange: PropTypes$1.func.def(() => {
          }),
          overlayStyle: {
            type: Object,
            default: void 0
          },
          overlayClassName: String,
          prefixCls: PropTypes$1.string.def("rc-tooltip"),
          mouseEnterDelay: PropTypes$1.number.def(0.1),
          mouseLeaveDelay: PropTypes$1.number.def(0.1),
          getPopupContainer: Function,
          destroyTooltipOnHide: {
            type: Boolean,
            default: false
          },
          align: PropTypes$1.object.def(() => ({})),
          arrowContent: PropTypes$1.any.def(null),
          tipId: String,
          builtinPlacements: PropTypes$1.object,
          overlayInnerStyle: {
            type: Object,
            default: void 0
          },
          popupVisible: {
            type: Boolean,
            default: void 0
          },
          onVisibleChange: Function,
          onPopupAlign: Function
        },
        setup(props, _ref) {
          let {
            slots,
            attrs,
            expose
          } = _ref;
          const triggerDOM = vue.shallowRef();
          const getPopupElement = () => {
            const {
              prefixCls,
              tipId,
              overlayInnerStyle
            } = props;
            return [vue.createVNode("div", {
              "class": `${prefixCls}-arrow`,
              "key": "arrow"
            }, [getPropsSlot(slots, props, "arrowContent")]), vue.createVNode(Content$1, {
              "key": "content",
              "prefixCls": prefixCls,
              "id": tipId,
              "overlayInnerStyle": overlayInnerStyle
            }, {
              overlay: slots.overlay
            })];
          };
          const getPopupDomNode = () => {
            return triggerDOM.value.getPopupDomNode();
          };
          expose({
            getPopupDomNode,
            triggerDOM,
            forcePopupAlign: () => {
              var _a;
              return (_a = triggerDOM.value) === null || _a === void 0 ? void 0 : _a.forcePopupAlign();
            }
          });
          const destroyTooltip = vue.shallowRef(false);
          const autoDestroy = vue.shallowRef(false);
          vue.watchEffect(() => {
            const {
              destroyTooltipOnHide
            } = props;
            if (typeof destroyTooltipOnHide === "boolean") {
              destroyTooltip.value = destroyTooltipOnHide;
            } else if (destroyTooltipOnHide && typeof destroyTooltipOnHide === "object") {
              const {
                keepParent
              } = destroyTooltipOnHide;
              destroyTooltip.value = keepParent === true;
              autoDestroy.value = keepParent === false;
            }
          });
          return () => {
            const {
              overlayClassName,
              trigger,
              mouseEnterDelay,
              mouseLeaveDelay,
              overlayStyle,
              prefixCls,
              afterVisibleChange,
              transitionName: transitionName2,
              animation,
              placement,
              align,
              destroyTooltipOnHide,
              defaultVisible
            } = props, restProps = __rest$8(props, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible"]);
            const extraProps = _extends({}, restProps);
            if (props.visible !== void 0) {
              extraProps.popupVisible = props.visible;
            }
            const triggerProps2 = _extends(_extends(_extends({
              popupClassName: overlayClassName,
              prefixCls,
              action: trigger,
              builtinPlacements: placements,
              popupPlacement: placement,
              popupAlign: align,
              afterPopupVisibleChange: afterVisibleChange,
              popupTransitionName: transitionName2,
              popupAnimation: animation,
              defaultPopupVisible: defaultVisible,
              destroyPopupOnHide: destroyTooltip.value,
              autoDestroy: autoDestroy.value,
              mouseLeaveDelay,
              popupStyle: overlayStyle,
              mouseEnterDelay
            }, extraProps), attrs), {
              onPopupVisibleChange: props.onVisibleChange || noop,
              onPopupAlign: props.onPopupAlign || noop,
              ref: triggerDOM,
              popup: getPopupElement()
            });
            return vue.createVNode(Trigger, triggerProps2, {
              default: slots.default
            });
          };
        }
      });
      const abstractTooltipProps = () => ({
        trigger: [String, Array],
        open: {
          type: Boolean,
          default: void 0
        },
        /** @deprecated Please use `open` instead. */
        visible: {
          type: Boolean,
          default: void 0
        },
        placement: String,
        color: String,
        transitionName: String,
        overlayStyle: objectType(),
        overlayInnerStyle: objectType(),
        overlayClassName: String,
        openClassName: String,
        prefixCls: String,
        mouseEnterDelay: Number,
        mouseLeaveDelay: Number,
        getPopupContainer: Function,
        arrowPointAtCenter: {
          type: Boolean,
          default: void 0
        },
        autoAdjustOverflow: {
          type: [Boolean, Object],
          default: void 0
        },
        destroyTooltipOnHide: {
          type: Boolean,
          default: void 0
        },
        align: objectType(),
        builtinPlacements: objectType(),
        children: Array,
        /** @deprecated Please use `onOpenChange` instead. */
        onVisibleChange: Function,
        /** @deprecated Please use `onUpdate:open` instead. */
        "onUpdate:visible": Function,
        onOpenChange: Function,
        "onUpdate:open": Function
      });
      const autoAdjustOverflowEnabled = {
        adjustX: 1,
        adjustY: 1
      };
      const autoAdjustOverflowDisabled = {
        adjustX: 0,
        adjustY: 0
      };
      const targetOffset = [0, 0];
      function getOverflowOptions(autoAdjustOverflow2) {
        if (typeof autoAdjustOverflow2 === "boolean") {
          return autoAdjustOverflow2 ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
        }
        return _extends(_extends({}, autoAdjustOverflowDisabled), autoAdjustOverflow2);
      }
      function getPlacements(config) {
        const {
          arrowWidth = 4,
          horizontalArrowShift = 16,
          verticalArrowShift = 8,
          autoAdjustOverflow: autoAdjustOverflow2,
          arrowPointAtCenter
        } = config;
        const placementMap = {
          left: {
            points: ["cr", "cl"],
            offset: [-4, 0]
          },
          right: {
            points: ["cl", "cr"],
            offset: [4, 0]
          },
          top: {
            points: ["bc", "tc"],
            offset: [0, -4]
          },
          bottom: {
            points: ["tc", "bc"],
            offset: [0, 4]
          },
          topLeft: {
            points: ["bl", "tc"],
            offset: [-(horizontalArrowShift + arrowWidth), -4]
          },
          leftTop: {
            points: ["tr", "cl"],
            offset: [-4, -(verticalArrowShift + arrowWidth)]
          },
          topRight: {
            points: ["br", "tc"],
            offset: [horizontalArrowShift + arrowWidth, -4]
          },
          rightTop: {
            points: ["tl", "cr"],
            offset: [4, -(verticalArrowShift + arrowWidth)]
          },
          bottomRight: {
            points: ["tr", "bc"],
            offset: [horizontalArrowShift + arrowWidth, 4]
          },
          rightBottom: {
            points: ["bl", "cr"],
            offset: [4, verticalArrowShift + arrowWidth]
          },
          bottomLeft: {
            points: ["tl", "bc"],
            offset: [-(horizontalArrowShift + arrowWidth), 4]
          },
          leftBottom: {
            points: ["br", "cl"],
            offset: [-4, verticalArrowShift + arrowWidth]
          }
        };
        Object.keys(placementMap).forEach((key2) => {
          placementMap[key2] = arrowPointAtCenter ? _extends(_extends({}, placementMap[key2]), {
            overflow: getOverflowOptions(autoAdjustOverflow2),
            targetOffset
          }) : _extends(_extends({}, placements[key2]), {
            overflow: getOverflowOptions(autoAdjustOverflow2)
          });
          placementMap[key2].ignoreShake = true;
        });
        return placementMap;
      }
      function firstNotUndefined() {
        let arr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        for (let i2 = 0, len = arr.length; i2 < len; i2++) {
          if (arr[i2] !== void 0) {
            return arr[i2];
          }
        }
        return void 0;
      }
      const inverseColors = PresetColors.map((color) => `${color}-inverse`);
      function isPresetColor(color) {
        let includeInverse = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        if (includeInverse) {
          return [...inverseColors, ...PresetColors].includes(color);
        }
        return PresetColors.includes(color);
      }
      function parseColor(prefixCls, color) {
        const isInternalColor = isPresetColor(color);
        const className = classNames({
          [`${prefixCls}-${color}`]: color && isInternalColor
        });
        const overlayStyle = {};
        const arrowStyle = {};
        if (color && !isInternalColor) {
          overlayStyle.background = color;
          arrowStyle["--antd-arrow-background-color"] = color;
        }
        return {
          className,
          overlayStyle,
          arrowStyle
        };
      }
      function connectArrowCls(classList) {
        let showArrowCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        return classList.map((cls) => `${showArrowCls}${cls}`).join(",");
      }
      const MAX_VERTICAL_CONTENT_RADIUS = 8;
      function getArrowOffset(options) {
        const maxVerticalContentRadius = MAX_VERTICAL_CONTENT_RADIUS;
        const {
          sizePopupArrow,
          contentRadius,
          borderRadiusOuter,
          limitVerticalRadius
        } = options;
        const arrowInnerOffset = sizePopupArrow / 2 - Math.ceil(borderRadiusOuter * (Math.sqrt(2) - 1));
        const dropdownArrowOffset = (contentRadius > 12 ? contentRadius + 2 : 12) - arrowInnerOffset;
        const dropdownArrowOffsetVertical = limitVerticalRadius ? maxVerticalContentRadius - arrowInnerOffset : dropdownArrowOffset;
        return {
          dropdownArrowOffset,
          dropdownArrowOffsetVertical
        };
      }
      function getArrowStyle(token2, options) {
        const {
          componentCls,
          sizePopupArrow,
          marginXXS,
          borderRadiusXS,
          borderRadiusOuter,
          boxShadowPopoverArrow
        } = token2;
        const {
          colorBg,
          showArrowCls,
          contentRadius = token2.borderRadiusLG,
          limitVerticalRadius
        } = options;
        const {
          dropdownArrowOffsetVertical,
          dropdownArrowOffset
        } = getArrowOffset({
          sizePopupArrow,
          contentRadius,
          borderRadiusOuter,
          limitVerticalRadius
        });
        const dropdownArrowDistance = sizePopupArrow / 2 + marginXXS;
        return {
          [componentCls]: {
            // ============================ Basic ============================
            [`${componentCls}-arrow`]: [_extends(_extends({
              position: "absolute",
              zIndex: 1,
              display: "block"
            }, roundedArrow(sizePopupArrow, borderRadiusXS, borderRadiusOuter, colorBg, boxShadowPopoverArrow)), {
              "&:before": {
                background: colorBg
              }
            })],
            // ========================== Placement ==========================
            // Here handle the arrow position and rotate stuff
            // >>>>> Top
            [[`&-placement-top ${componentCls}-arrow`, `&-placement-topLeft ${componentCls}-arrow`, `&-placement-topRight ${componentCls}-arrow`].join(",")]: {
              bottom: 0,
              transform: "translateY(100%) rotate(180deg)"
            },
            [`&-placement-top ${componentCls}-arrow`]: {
              left: {
                _skip_check_: true,
                value: "50%"
              },
              transform: "translateX(-50%) translateY(100%) rotate(180deg)"
            },
            [`&-placement-topLeft ${componentCls}-arrow`]: {
              left: {
                _skip_check_: true,
                value: dropdownArrowOffset
              }
            },
            [`&-placement-topRight ${componentCls}-arrow`]: {
              right: {
                _skip_check_: true,
                value: dropdownArrowOffset
              }
            },
            // >>>>> Bottom
            [[`&-placement-bottom ${componentCls}-arrow`, `&-placement-bottomLeft ${componentCls}-arrow`, `&-placement-bottomRight ${componentCls}-arrow`].join(",")]: {
              top: 0,
              transform: `translateY(-100%)`
            },
            [`&-placement-bottom ${componentCls}-arrow`]: {
              left: {
                _skip_check_: true,
                value: "50%"
              },
              transform: `translateX(-50%) translateY(-100%)`
            },
            [`&-placement-bottomLeft ${componentCls}-arrow`]: {
              left: {
                _skip_check_: true,
                value: dropdownArrowOffset
              }
            },
            [`&-placement-bottomRight ${componentCls}-arrow`]: {
              right: {
                _skip_check_: true,
                value: dropdownArrowOffset
              }
            },
            // >>>>> Left
            [[`&-placement-left ${componentCls}-arrow`, `&-placement-leftTop ${componentCls}-arrow`, `&-placement-leftBottom ${componentCls}-arrow`].join(",")]: {
              right: {
                _skip_check_: true,
                value: 0
              },
              transform: "translateX(100%) rotate(90deg)"
            },
            [`&-placement-left ${componentCls}-arrow`]: {
              top: {
                _skip_check_: true,
                value: "50%"
              },
              transform: "translateY(-50%) translateX(100%) rotate(90deg)"
            },
            [`&-placement-leftTop ${componentCls}-arrow`]: {
              top: dropdownArrowOffsetVertical
            },
            [`&-placement-leftBottom ${componentCls}-arrow`]: {
              bottom: dropdownArrowOffsetVertical
            },
            // >>>>> Right
            [[`&-placement-right ${componentCls}-arrow`, `&-placement-rightTop ${componentCls}-arrow`, `&-placement-rightBottom ${componentCls}-arrow`].join(",")]: {
              left: {
                _skip_check_: true,
                value: 0
              },
              transform: "translateX(-100%) rotate(-90deg)"
            },
            [`&-placement-right ${componentCls}-arrow`]: {
              top: {
                _skip_check_: true,
                value: "50%"
              },
              transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
            },
            [`&-placement-rightTop ${componentCls}-arrow`]: {
              top: dropdownArrowOffsetVertical
            },
            [`&-placement-rightBottom ${componentCls}-arrow`]: {
              bottom: dropdownArrowOffsetVertical
            },
            // =========================== Offset ============================
            // Offset the popover to account for the dropdown arrow
            // >>>>> Top
            [connectArrowCls([`&-placement-topLeft`, `&-placement-top`, `&-placement-topRight`], showArrowCls)]: {
              paddingBottom: dropdownArrowDistance
            },
            // >>>>> Bottom
            [connectArrowCls([`&-placement-bottomLeft`, `&-placement-bottom`, `&-placement-bottomRight`], showArrowCls)]: {
              paddingTop: dropdownArrowDistance
            },
            // >>>>> Left
            [connectArrowCls([`&-placement-leftTop`, `&-placement-left`, `&-placement-leftBottom`], showArrowCls)]: {
              paddingRight: {
                _skip_check_: true,
                value: dropdownArrowDistance
              }
            },
            // >>>>> Right
            [connectArrowCls([`&-placement-rightTop`, `&-placement-right`, `&-placement-rightBottom`], showArrowCls)]: {
              paddingLeft: {
                _skip_check_: true,
                value: dropdownArrowDistance
              }
            }
          }
        };
      }
      const genTooltipStyle = (token2) => {
        const {
          componentCls,
          // ant-tooltip
          tooltipMaxWidth,
          tooltipColor,
          tooltipBg,
          tooltipBorderRadius,
          zIndexPopup,
          controlHeight,
          boxShadowSecondary,
          paddingSM,
          paddingXS,
          tooltipRadiusOuter
        } = token2;
        return [
          {
            [componentCls]: _extends(_extends(_extends(_extends({}, resetComponent(token2)), {
              position: "absolute",
              zIndex: zIndexPopup,
              display: "block",
              "&": [{
                width: "max-content"
              }, {
                width: "intrinsic"
              }],
              maxWidth: tooltipMaxWidth,
              visibility: "visible",
              "&-hidden": {
                display: "none"
              },
              "--antd-arrow-background-color": tooltipBg,
              // Wrapper for the tooltip content
              [`${componentCls}-inner`]: {
                minWidth: controlHeight,
                minHeight: controlHeight,
                padding: `${paddingSM / 2}px ${paddingXS}px`,
                color: tooltipColor,
                textAlign: "start",
                textDecoration: "none",
                wordWrap: "break-word",
                backgroundColor: tooltipBg,
                borderRadius: tooltipBorderRadius,
                boxShadow: boxShadowSecondary
              },
              // Limit left and right placement radius
              [[`&-placement-left`, `&-placement-leftTop`, `&-placement-leftBottom`, `&-placement-right`, `&-placement-rightTop`, `&-placement-rightBottom`].join(",")]: {
                [`${componentCls}-inner`]: {
                  borderRadius: Math.min(tooltipBorderRadius, MAX_VERTICAL_CONTENT_RADIUS)
                }
              },
              [`${componentCls}-content`]: {
                position: "relative"
              }
            }), genPresetColor(token2, (colorKey, _ref) => {
              let {
                darkColor
              } = _ref;
              return {
                [`&${componentCls}-${colorKey}`]: {
                  [`${componentCls}-inner`]: {
                    backgroundColor: darkColor
                  },
                  [`${componentCls}-arrow`]: {
                    "--antd-arrow-background-color": darkColor
                  }
                }
              };
            })), {
              // RTL
              "&-rtl": {
                direction: "rtl"
              }
            })
          },
          // Arrow Style
          getArrowStyle(merge(token2, {
            borderRadiusOuter: tooltipRadiusOuter
          }), {
            colorBg: "var(--antd-arrow-background-color)",
            showArrowCls: "",
            contentRadius: tooltipBorderRadius,
            limitVerticalRadius: true
          }),
          // Pure Render
          {
            [`${componentCls}-pure`]: {
              position: "relative",
              maxWidth: "none"
            }
          }
        ];
      };
      const useStyle$a = (prefixCls, injectStyle) => {
        const useOriginHook = genComponentStyleHook("Tooltip", (token2) => {
          if ((injectStyle === null || injectStyle === void 0 ? void 0 : injectStyle.value) === false) {
            return [];
          }
          const {
            borderRadius,
            colorTextLightSolid,
            colorBgDefault,
            borderRadiusOuter
          } = token2;
          const TooltipToken = merge(token2, {
            // default variables
            tooltipMaxWidth: 250,
            tooltipColor: colorTextLightSolid,
            tooltipBorderRadius: borderRadius,
            tooltipBg: colorBgDefault,
            tooltipRadiusOuter: borderRadiusOuter > 4 ? 4 : borderRadiusOuter
          });
          return [genTooltipStyle(TooltipToken), initZoomMotion(token2, "zoom-big-fast")];
        }, (_ref2) => {
          let {
            zIndexPopupBase,
            colorBgSpotlight
          } = _ref2;
          return {
            zIndexPopup: zIndexPopupBase + 70,
            colorBgDefault: colorBgSpotlight
          };
        });
        return useOriginHook(prefixCls);
      };
      const splitObject = (obj, keys2) => {
        const picked = {};
        const omitted = _extends({}, obj);
        keys2.forEach((key2) => {
          if (obj && key2 in obj) {
            picked[key2] = obj[key2];
            delete omitted[key2];
          }
        });
        return {
          picked,
          omitted
        };
      };
      const tooltipProps = () => _extends(_extends({}, abstractTooltipProps()), {
        title: PropTypes$1.any
      });
      const tooltipDefaultProps = () => ({
        trigger: "hover",
        align: {},
        placement: "top",
        mouseEnterDelay: 0.1,
        mouseLeaveDelay: 0.1,
        arrowPointAtCenter: false,
        autoAdjustOverflow: true
      });
      const ToolTip = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "ATooltip",
        inheritAttrs: false,
        props: initDefaultProps$1(tooltipProps(), {
          trigger: "hover",
          align: {},
          placement: "top",
          mouseEnterDelay: 0.1,
          mouseLeaveDelay: 0.1,
          arrowPointAtCenter: false,
          autoAdjustOverflow: true
        }),
        slots: Object,
        // emits: ['update:visible', 'visibleChange'],
        setup(props, _ref) {
          let {
            slots,
            emit,
            attrs,
            expose
          } = _ref;
          const {
            prefixCls,
            getPopupContainer,
            direction,
            rootPrefixCls
          } = useConfigInject("tooltip", props);
          const mergedOpen = vue.computed(() => {
            var _a;
            return (_a = props.open) !== null && _a !== void 0 ? _a : props.visible;
          });
          const innerOpen = vue.ref(firstNotUndefined([props.open, props.visible]));
          const tooltip = vue.ref();
          let rafId;
          vue.watch(mergedOpen, (val) => {
            wrapperRaf.cancel(rafId);
            rafId = wrapperRaf(() => {
              innerOpen.value = !!val;
            });
          });
          const isNoTitle = () => {
            var _a;
            const title = (_a = props.title) !== null && _a !== void 0 ? _a : slots.title;
            return !title && title !== 0;
          };
          const handleVisibleChange = (val) => {
            const noTitle = isNoTitle();
            if (mergedOpen.value === void 0) {
              innerOpen.value = noTitle ? false : val;
            }
            if (!noTitle) {
              emit("update:visible", val);
              emit("visibleChange", val);
              emit("update:open", val);
              emit("openChange", val);
            }
          };
          const getPopupDomNode = () => {
            return tooltip.value.getPopupDomNode();
          };
          expose({
            getPopupDomNode,
            open: innerOpen,
            forcePopupAlign: () => {
              var _a;
              return (_a = tooltip.value) === null || _a === void 0 ? void 0 : _a.forcePopupAlign();
            }
          });
          const tooltipPlacements = vue.computed(() => {
            const {
              builtinPlacements,
              arrowPointAtCenter,
              autoAdjustOverflow: autoAdjustOverflow2
            } = props;
            return builtinPlacements || getPlacements({
              arrowPointAtCenter,
              autoAdjustOverflow: autoAdjustOverflow2
            });
          });
          const isTrueProps = (val) => {
            return val || val === "";
          };
          const getDisabledCompatibleChildren = (ele) => {
            const elementType = ele.type;
            if (typeof elementType === "object" && ele.props) {
              if ((elementType.__ANT_BUTTON === true || elementType === "button") && isTrueProps(ele.props.disabled) || elementType.__ANT_SWITCH === true && (isTrueProps(ele.props.disabled) || isTrueProps(ele.props.loading)) || elementType.__ANT_RADIO === true && isTrueProps(ele.props.disabled)) {
                const {
                  picked,
                  omitted
                } = splitObject(getStyle$1(ele), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]);
                const spanStyle = _extends(_extends({
                  display: "inline-block"
                }, picked), {
                  cursor: "not-allowed",
                  lineHeight: 1,
                  width: ele.props && ele.props.block ? "100%" : void 0
                });
                const buttonStyle = _extends(_extends({}, omitted), {
                  pointerEvents: "none"
                });
                const child = cloneElement(ele, {
                  style: buttonStyle
                }, true);
                return vue.createVNode("span", {
                  "style": spanStyle,
                  "class": `${prefixCls.value}-disabled-compatible-wrapper`
                }, [child]);
              }
            }
            return ele;
          };
          const getOverlay = () => {
            var _a, _b;
            return (_a = props.title) !== null && _a !== void 0 ? _a : (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots);
          };
          const onPopupAlign = (domNode, align) => {
            const placements2 = tooltipPlacements.value;
            const placement = Object.keys(placements2).find((key2) => {
              var _a, _b;
              return placements2[key2].points[0] === ((_a = align.points) === null || _a === void 0 ? void 0 : _a[0]) && placements2[key2].points[1] === ((_b = align.points) === null || _b === void 0 ? void 0 : _b[1]);
            });
            if (placement) {
              const rect = domNode.getBoundingClientRect();
              const transformOrigin = {
                top: "50%",
                left: "50%"
              };
              if (placement.indexOf("top") >= 0 || placement.indexOf("Bottom") >= 0) {
                transformOrigin.top = `${rect.height - align.offset[1]}px`;
              } else if (placement.indexOf("Top") >= 0 || placement.indexOf("bottom") >= 0) {
                transformOrigin.top = `${-align.offset[1]}px`;
              }
              if (placement.indexOf("left") >= 0 || placement.indexOf("Right") >= 0) {
                transformOrigin.left = `${rect.width - align.offset[0]}px`;
              } else if (placement.indexOf("right") >= 0 || placement.indexOf("Left") >= 0) {
                transformOrigin.left = `${-align.offset[0]}px`;
              }
              domNode.style.transformOrigin = `${transformOrigin.left} ${transformOrigin.top}`;
            }
          };
          const colorInfo = vue.computed(() => parseColor(prefixCls.value, props.color));
          const injectFromPopover = vue.computed(() => attrs["data-popover-inject"]);
          const [wrapSSR, hashId] = useStyle$a(prefixCls, vue.computed(() => !injectFromPopover.value));
          return () => {
            var _a, _b;
            const {
              openClassName,
              overlayClassName,
              overlayStyle,
              overlayInnerStyle
            } = props;
            let children = (_b = filterEmpty((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))) !== null && _b !== void 0 ? _b : null;
            children = children.length === 1 ? children[0] : children;
            let tempVisible = innerOpen.value;
            if (mergedOpen.value === void 0 && isNoTitle()) {
              tempVisible = false;
            }
            if (!children) {
              return null;
            }
            const child = getDisabledCompatibleChildren(isValidElement(children) && !isFragment(children) ? children : vue.createVNode("span", null, [children]));
            const childCls = classNames({
              [openClassName || `${prefixCls.value}-open`]: true,
              [child.props && child.props.class]: child.props && child.props.class
            });
            const customOverlayClassName = classNames(overlayClassName, {
              [`${prefixCls.value}-rtl`]: direction.value === "rtl"
            }, colorInfo.value.className, hashId.value);
            const formattedOverlayInnerStyle = _extends(_extends({}, colorInfo.value.overlayStyle), overlayInnerStyle);
            const arrowContentStyle = colorInfo.value.arrowStyle;
            const vcTooltipProps = _extends(_extends(_extends({}, attrs), props), {
              prefixCls: prefixCls.value,
              getPopupContainer: getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.value,
              builtinPlacements: tooltipPlacements.value,
              visible: tempVisible,
              ref: tooltip,
              overlayClassName: customOverlayClassName,
              overlayStyle: _extends(_extends({}, arrowContentStyle), overlayStyle),
              overlayInnerStyle: formattedOverlayInnerStyle,
              onVisibleChange: handleVisibleChange,
              onPopupAlign,
              transitionName: getTransitionName(rootPrefixCls.value, "zoom-big-fast", props.transitionName)
            });
            return wrapSSR(vue.createVNode(Tooltip$1, vcTooltipProps, {
              default: () => [innerOpen.value ? cloneElement(child, {
                class: childCls
              }) : child],
              arrowContent: () => vue.createVNode("span", {
                "class": `${prefixCls.value}-arrow-content`
              }, null),
              overlay: getOverlay
            }));
          };
        }
      });
      const Tooltip = withInstall(ToolTip);
      const genBaseStyle$1 = (token2) => {
        const {
          componentCls,
          popoverBg,
          popoverColor,
          width,
          fontWeightStrong,
          popoverPadding,
          boxShadowSecondary,
          colorTextHeading,
          borderRadiusLG: borderRadius,
          zIndexPopup,
          marginXS,
          colorBgElevated
        } = token2;
        return [
          {
            [componentCls]: _extends(_extends({}, resetComponent(token2)), {
              position: "absolute",
              top: 0,
              // use `left` to fix https://github.com/ant-design/ant-design/issues/39195
              left: {
                _skip_check_: true,
                value: 0
              },
              zIndex: zIndexPopup,
              fontWeight: "normal",
              whiteSpace: "normal",
              textAlign: "start",
              cursor: "auto",
              userSelect: "text",
              "--antd-arrow-background-color": colorBgElevated,
              "&-rtl": {
                direction: "rtl"
              },
              "&-hidden": {
                display: "none"
              },
              [`${componentCls}-content`]: {
                position: "relative"
              },
              [`${componentCls}-inner`]: {
                backgroundColor: popoverBg,
                backgroundClip: "padding-box",
                borderRadius,
                boxShadow: boxShadowSecondary,
                padding: popoverPadding
              },
              [`${componentCls}-title`]: {
                minWidth: width,
                marginBottom: marginXS,
                color: colorTextHeading,
                fontWeight: fontWeightStrong
              },
              [`${componentCls}-inner-content`]: {
                color: popoverColor
              }
            })
          },
          // Arrow Style
          getArrowStyle(token2, {
            colorBg: "var(--antd-arrow-background-color)"
          }),
          // Pure Render
          {
            [`${componentCls}-pure`]: {
              position: "relative",
              maxWidth: "none",
              [`${componentCls}-content`]: {
                display: "inline-block"
              }
            }
          }
        ];
      };
      const genColorStyle = (token2) => {
        const {
          componentCls
        } = token2;
        return {
          [componentCls]: PresetColors.map((colorKey) => {
            const lightColor = token2[`${colorKey}-6`];
            return {
              [`&${componentCls}-${colorKey}`]: {
                "--antd-arrow-background-color": lightColor,
                [`${componentCls}-inner`]: {
                  backgroundColor: lightColor
                },
                [`${componentCls}-arrow`]: {
                  background: "transparent"
                }
              }
            };
          })
        };
      };
      const genWireframeStyle$1 = (token2) => {
        const {
          componentCls,
          lineWidth,
          lineType,
          colorSplit,
          paddingSM,
          controlHeight,
          fontSize,
          lineHeight,
          padding
        } = token2;
        const titlePaddingBlockDist = controlHeight - Math.round(fontSize * lineHeight);
        const popoverTitlePaddingBlockTop = titlePaddingBlockDist / 2;
        const popoverTitlePaddingBlockBottom = titlePaddingBlockDist / 2 - lineWidth;
        const popoverPaddingHorizontal = padding;
        return {
          [componentCls]: {
            [`${componentCls}-inner`]: {
              padding: 0
            },
            [`${componentCls}-title`]: {
              margin: 0,
              padding: `${popoverTitlePaddingBlockTop}px ${popoverPaddingHorizontal}px ${popoverTitlePaddingBlockBottom}px`,
              borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`
            },
            [`${componentCls}-inner-content`]: {
              padding: `${paddingSM}px ${popoverPaddingHorizontal}px`
            }
          }
        };
      };
      const useStyle$9 = genComponentStyleHook("Popover", (token2) => {
        const {
          colorBgElevated,
          colorText,
          wireframe
        } = token2;
        const popoverToken = merge(token2, {
          popoverBg: colorBgElevated,
          popoverColor: colorText,
          popoverPadding: 12
          // Fixed Value
        });
        return [genBaseStyle$1(popoverToken), genColorStyle(popoverToken), wireframe && genWireframeStyle$1(popoverToken), initZoomMotion(popoverToken, "zoom-big")];
      }, (_ref) => {
        let {
          zIndexPopupBase
        } = _ref;
        return {
          zIndexPopup: zIndexPopupBase + 30,
          width: 177
        };
      });
      const popoverProps = () => _extends(_extends({}, abstractTooltipProps()), {
        content: anyType(),
        title: anyType()
      });
      const Popover = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "APopover",
        inheritAttrs: false,
        props: initDefaultProps$1(popoverProps(), _extends(_extends({}, tooltipDefaultProps()), {
          trigger: "hover",
          placement: "top",
          mouseEnterDelay: 0.1,
          mouseLeaveDelay: 0.1
        })),
        setup(props, _ref) {
          let {
            expose,
            slots,
            attrs
          } = _ref;
          const tooltipRef = vue.ref();
          warning$2(props.visible === void 0);
          expose({
            getPopupDomNode: () => {
              var _a, _b;
              return (_b = (_a = tooltipRef.value) === null || _a === void 0 ? void 0 : _a.getPopupDomNode) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
          });
          const {
            prefixCls,
            configProvider
          } = useConfigInject("popover", props);
          const [wrapSSR, hashId] = useStyle$9(prefixCls);
          const rootPrefixCls = vue.computed(() => configProvider.getPrefixCls());
          const getOverlay = () => {
            var _a, _b;
            const {
              title = filterEmpty((_a = slots.title) === null || _a === void 0 ? void 0 : _a.call(slots)),
              content = filterEmpty((_b = slots.content) === null || _b === void 0 ? void 0 : _b.call(slots))
            } = props;
            const hasTitle = !!(Array.isArray(title) ? title.length : title);
            const hasContent = !!(Array.isArray(content) ? content.length : title);
            if (!hasTitle && !hasContent)
              return null;
            return vue.createVNode(vue.Fragment, null, [hasTitle && vue.createVNode("div", {
              "class": `${prefixCls.value}-title`
            }, [title]), vue.createVNode("div", {
              "class": `${prefixCls.value}-inner-content`
            }, [content])]);
          };
          return () => {
            const overlayCls = classNames(props.overlayClassName, hashId.value);
            return wrapSSR(vue.createVNode(Tooltip, _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, omit(props, ["title", "content"])), attrs), {}, {
              "prefixCls": prefixCls.value,
              "ref": tooltipRef,
              "overlayClassName": overlayCls,
              "transitionName": getTransitionName(rootPrefixCls.value, "zoom-big", props.transitionName),
              "data-popover-inject": true
            }), {
              title: getOverlay,
              default: slots.default
            }));
          };
        }
      });
      const Popover$1 = withInstall(Popover);
      const groupProps = () => ({
        prefixCls: String,
        maxCount: Number,
        maxStyle: {
          type: Object,
          default: void 0
        },
        maxPopoverPlacement: {
          type: String,
          default: "top"
        },
        maxPopoverTrigger: String,
        /*
         * Size of avatar, options: `large`, `small`, `default`
         * or a custom number size
         * */
        size: {
          type: [Number, String, Object],
          default: "default"
        },
        shape: {
          type: String,
          default: "circle"
        }
      });
      const Group$1 = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "AAvatarGroup",
        inheritAttrs: false,
        props: groupProps(),
        setup(props, _ref) {
          let {
            slots,
            attrs
          } = _ref;
          const {
            prefixCls,
            direction
          } = useConfigInject("avatar", props);
          const groupPrefixCls = vue.computed(() => `${prefixCls.value}-group`);
          const [wrapSSR, hashId] = useStyle$b(prefixCls);
          vue.watchEffect(() => {
            const context2 = {
              size: props.size,
              shape: props.shape
            };
            useAvatarProviderContext(context2);
          });
          return () => {
            const {
              maxPopoverPlacement = "top",
              maxCount: maxCount2,
              maxStyle,
              maxPopoverTrigger = "hover",
              shape
            } = props;
            const cls = {
              [groupPrefixCls.value]: true,
              [`${groupPrefixCls.value}-rtl`]: direction.value === "rtl",
              [`${attrs.class}`]: !!attrs.class,
              [hashId.value]: true
            };
            const children = getPropsSlot(slots, props);
            const childrenWithProps = flattenChildren(children).map((child, index2) => cloneElement(child, {
              key: `avatar-key-${index2}`
            }));
            const numOfChildren = childrenWithProps.length;
            if (maxCount2 && maxCount2 < numOfChildren) {
              const childrenShow = childrenWithProps.slice(0, maxCount2);
              const childrenHidden = childrenWithProps.slice(maxCount2, numOfChildren);
              childrenShow.push(vue.createVNode(Popover$1, {
                "key": "avatar-popover-key",
                "content": childrenHidden,
                "trigger": maxPopoverTrigger,
                "placement": maxPopoverPlacement,
                "overlayClassName": `${groupPrefixCls.value}-popover`
              }, {
                default: () => [vue.createVNode(Avatar$1, {
                  "style": maxStyle,
                  "shape": shape
                }, {
                  default: () => [`+${numOfChildren - maxCount2}`]
                })]
              }));
              return wrapSSR(vue.createVNode("div", _objectSpread2$1(_objectSpread2$1({}, attrs), {}, {
                "class": cls,
                "style": attrs.style
              }), [childrenShow]));
            }
            return wrapSSR(vue.createVNode("div", _objectSpread2$1(_objectSpread2$1({}, attrs), {}, {
              "class": cls,
              "style": attrs.style
            }), [childrenWithProps]));
          };
        }
      });
      const Group$2 = Group$1;
      Avatar$1.Group = Group$2;
      Avatar$1.install = function(app) {
        app.component(Avatar$1.name, Avatar$1);
        app.component(Group$2.name, Group$2);
        return app;
      };
      const genWaveStyle = (token2) => {
        const {
          componentCls,
          colorPrimary
        } = token2;
        return {
          [componentCls]: {
            position: "absolute",
            background: "transparent",
            pointerEvents: "none",
            boxSizing: "border-box",
            color: `var(--wave-color, ${colorPrimary})`,
            boxShadow: `0 0 0 0 currentcolor`,
            opacity: 0.2,
            // =================== Motion ===================
            "&.wave-motion-appear": {
              transition: [`box-shadow 0.4s ${token2.motionEaseOutCirc}`, `opacity 2s ${token2.motionEaseOutCirc}`].join(","),
              "&-active": {
                boxShadow: `0 0 0 6px currentcolor`,
                opacity: 0
              }
            }
          }
        };
      };
      const useStyle$8 = genComponentStyleHook("Wave", (token2) => [genWaveStyle(token2)]);
      function isNotGrey(color) {
        const match2 = (color || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
        if (match2 && match2[1] && match2[2] && match2[3]) {
          return !(match2[1] === match2[2] && match2[2] === match2[3]);
        }
        return true;
      }
      function isValidWaveColor(color) {
        return color && color !== "#fff" && color !== "#ffffff" && color !== "rgb(255, 255, 255)" && color !== "rgba(255, 255, 255, 1)" && isNotGrey(color) && !/rgba\((?:\d*, ){3}0\)/.test(color) && // any transparent rgba color
        color !== "transparent";
      }
      function getTargetWaveColor(node2) {
        const {
          borderTopColor,
          borderColor,
          backgroundColor
        } = getComputedStyle(node2);
        if (isValidWaveColor(borderTopColor)) {
          return borderTopColor;
        }
        if (isValidWaveColor(borderColor)) {
          return borderColor;
        }
        if (isValidWaveColor(backgroundColor)) {
          return backgroundColor;
        }
        return null;
      }
      function validateNum(value) {
        return Number.isNaN(value) ? 0 : value;
      }
      const WaveEffect = vue.defineComponent({
        props: {
          target: objectType(),
          className: String
        },
        setup(props) {
          const divRef = vue.shallowRef(null);
          const [color, setWaveColor] = useState(null);
          const [borderRadius, setBorderRadius] = useState([]);
          const [left, setLeft] = useState(0);
          const [top, setTop] = useState(0);
          const [width, setWidth] = useState(0);
          const [height, setHeight] = useState(0);
          const [enabled, setEnabled] = useState(false);
          function syncPos() {
            const {
              target
            } = props;
            const nodeStyle = getComputedStyle(target);
            setWaveColor(getTargetWaveColor(target));
            const isStatic = nodeStyle.position === "static";
            const {
              borderLeftWidth,
              borderTopWidth
            } = nodeStyle;
            setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
            setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
            setWidth(target.offsetWidth);
            setHeight(target.offsetHeight);
            const {
              borderTopLeftRadius,
              borderTopRightRadius,
              borderBottomLeftRadius,
              borderBottomRightRadius
            } = nodeStyle;
            setBorderRadius([borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius].map((radius) => validateNum(parseFloat(radius))));
          }
          let resizeObserver;
          let rafId;
          let timeoutId;
          const clear = () => {
            clearTimeout(timeoutId);
            wrapperRaf.cancel(rafId);
            resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
          };
          const removeDom = () => {
            var _a;
            const holder = (_a = divRef.value) === null || _a === void 0 ? void 0 : _a.parentElement;
            if (holder) {
              vue.render(null, holder);
              if (holder.parentElement) {
                holder.parentElement.removeChild(holder);
              }
            }
          };
          vue.onMounted(() => {
            clear();
            timeoutId = setTimeout(() => {
              removeDom();
            }, 5e3);
            const {
              target
            } = props;
            if (target) {
              rafId = wrapperRaf(() => {
                syncPos();
                setEnabled(true);
              });
              if (typeof ResizeObserver !== "undefined") {
                resizeObserver = new ResizeObserver(syncPos);
                resizeObserver.observe(target);
              }
            }
          });
          vue.onBeforeUnmount(() => {
            clear();
          });
          const onTransitionend = (e2) => {
            if (e2.propertyName === "opacity") {
              removeDom();
            }
          };
          return () => {
            if (!enabled.value) {
              return null;
            }
            const waveStyle = {
              left: `${left.value}px`,
              top: `${top.value}px`,
              width: `${width.value}px`,
              height: `${height.value}px`,
              borderRadius: borderRadius.value.map((radius) => `${radius}px`).join(" ")
            };
            if (color) {
              waveStyle["--wave-color"] = color.value;
            }
            return vue.createVNode(vue.Transition, {
              "appear": true,
              "name": "wave-motion",
              "appearFromClass": "wave-motion-appear",
              "appearActiveClass": "wave-motion-appear",
              "appearToClass": "wave-motion-appear wave-motion-appear-active"
            }, {
              default: () => [vue.createVNode("div", {
                "ref": divRef,
                "class": props.className,
                "style": waveStyle,
                "onTransitionend": onTransitionend
              }, null)]
            });
          };
        }
      });
      function showWaveEffect(node2, className) {
        const holder = document.createElement("div");
        holder.style.position = "absolute";
        holder.style.left = `0px`;
        holder.style.top = `0px`;
        node2 === null || node2 === void 0 ? void 0 : node2.insertBefore(holder, node2 === null || node2 === void 0 ? void 0 : node2.firstChild);
        vue.render(vue.createVNode(WaveEffect, {
          "target": node2,
          "className": className
        }, null), holder);
      }
      function useWave(instance, className) {
        function showWave() {
          const node2 = findDOMNode(instance);
          showWaveEffect(node2, className.value);
        }
        return showWave;
      }
      const Wave = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "Wave",
        props: {
          disabled: Boolean
        },
        setup(props, _ref) {
          let {
            slots
          } = _ref;
          const instance = vue.getCurrentInstance();
          const {
            prefixCls
          } = useConfigInject("wave", props);
          const [, hashId] = useStyle$8(prefixCls);
          const showWave = useWave(instance, vue.computed(() => classNames(prefixCls.value, hashId.value)));
          let onClick;
          const clear = () => {
            const node2 = findDOMNode(instance);
            node2.removeEventListener("click", onClick, true);
          };
          vue.onMounted(() => {
            vue.watch(() => props.disabled, () => {
              clear();
              vue.nextTick(() => {
                const node2 = findDOMNode(instance);
                node2 === null || node2 === void 0 ? void 0 : node2.removeEventListener("click", onClick, true);
                if (!node2 || node2.nodeType !== 1 || props.disabled) {
                  return;
                }
                onClick = (e2) => {
                  if (e2.target.tagName === "INPUT" || !isVisible(e2.target) || // No need wave
                  !node2.getAttribute || node2.getAttribute("disabled") || node2.disabled || node2.className.includes("disabled") || node2.className.includes("-leave")) {
                    return;
                  }
                  showWave();
                };
                node2.addEventListener("click", onClick, true);
              });
            }, {
              immediate: true,
              flush: "post"
            });
          });
          vue.onBeforeUnmount(() => {
            clear();
          });
          return () => {
            var _a;
            const children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)[0];
            return children;
          };
        }
      });
      function convertLegacyProps(type) {
        if (type === "danger") {
          return {
            danger: true
          };
        }
        return {
          type
        };
      }
      const buttonProps = () => ({
        prefixCls: String,
        type: String,
        htmlType: {
          type: String,
          default: "button"
        },
        shape: {
          type: String
        },
        size: {
          type: String
        },
        loading: {
          type: [Boolean, Object],
          default: () => false
        },
        disabled: {
          type: Boolean,
          default: void 0
        },
        ghost: {
          type: Boolean,
          default: void 0
        },
        block: {
          type: Boolean,
          default: void 0
        },
        danger: {
          type: Boolean,
          default: void 0
        },
        icon: PropTypes$1.any,
        href: String,
        target: String,
        title: String,
        onClick: eventType(),
        onMousedown: eventType()
      });
      const buttonTypes = buttonProps;
      const getCollapsedWidth = (node2) => {
        if (node2) {
          node2.style.width = "0px";
          node2.style.opacity = "0";
          node2.style.transform = "scale(0)";
        }
      };
      const getRealWidth = (node2) => {
        vue.nextTick(() => {
          if (node2) {
            node2.style.width = `${node2.scrollWidth}px`;
            node2.style.opacity = "1";
            node2.style.transform = "scale(1)";
          }
        });
      };
      const resetStyle = (node2) => {
        if (node2 && node2.style) {
          node2.style.width = null;
          node2.style.opacity = null;
          node2.style.transform = null;
        }
      };
      const LoadingIcon = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "LoadingIcon",
        props: {
          prefixCls: String,
          loading: [Boolean, Object],
          existIcon: Boolean
        },
        setup(props) {
          return () => {
            const {
              existIcon,
              prefixCls,
              loading
            } = props;
            if (existIcon) {
              return vue.createVNode("span", {
                "class": `${prefixCls}-loading-icon`
              }, [vue.createVNode(LoadingOutlined$1, null, null)]);
            }
            const visible = !!loading;
            return vue.createVNode(vue.Transition, {
              "name": `${prefixCls}-loading-icon-motion`,
              "onBeforeEnter": getCollapsedWidth,
              "onEnter": getRealWidth,
              "onAfterEnter": resetStyle,
              "onBeforeLeave": getRealWidth,
              "onLeave": (node2) => {
                setTimeout(() => {
                  getCollapsedWidth(node2);
                });
              },
              "onAfterLeave": resetStyle
            }, {
              default: () => [visible ? vue.createVNode("span", {
                "class": `${prefixCls}-loading-icon`
              }, [vue.createVNode(LoadingOutlined$1, null, null)]) : null]
            });
          };
        }
      });
      const genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
        // Border
        [`> span, > ${buttonTypeCls}`]: {
          "&:not(:last-child)": {
            [`&, & > ${buttonTypeCls}`]: {
              "&:not(:disabled)": {
                borderInlineEndColor: borderColor
              }
            }
          },
          "&:not(:first-child)": {
            [`&, & > ${buttonTypeCls}`]: {
              "&:not(:disabled)": {
                borderInlineStartColor: borderColor
              }
            }
          }
        }
      });
      const genGroupStyle = (token2) => {
        const {
          componentCls,
          fontSize,
          lineWidth,
          colorPrimaryHover,
          colorErrorHover
        } = token2;
        return {
          [`${componentCls}-group`]: [
            {
              position: "relative",
              display: "inline-flex",
              // Border
              [`> span, > ${componentCls}`]: {
                "&:not(:last-child)": {
                  [`&, & > ${componentCls}`]: {
                    borderStartEndRadius: 0,
                    borderEndEndRadius: 0
                  }
                },
                "&:not(:first-child)": {
                  marginInlineStart: -lineWidth,
                  [`&, & > ${componentCls}`]: {
                    borderStartStartRadius: 0,
                    borderEndStartRadius: 0
                  }
                }
              },
              [componentCls]: {
                position: "relative",
                zIndex: 1,
                [`&:hover,
          &:focus,
          &:active`]: {
                  zIndex: 2
                },
                "&[disabled]": {
                  zIndex: 0
                }
              },
              [`${componentCls}-icon-only`]: {
                fontSize
              }
            },
            // Border Color
            genButtonBorderStyle(`${componentCls}-primary`, colorPrimaryHover),
            genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)
          ]
        };
      };
      const genGroupStyle$1 = genGroupStyle;
      function compactItemVerticalBorder(token2, parentCls) {
        return {
          // border collapse
          [`&-item:not(${parentCls}-last-item)`]: {
            marginBottom: -token2.lineWidth
          },
          "&-item": {
            "&:hover,&:focus,&:active": {
              zIndex: 2
            },
            "&[disabled]": {
              zIndex: 0
            }
          }
        };
      }
      function compactItemBorderVerticalRadius(prefixCls, parentCls) {
        return {
          [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
            borderRadius: 0
          },
          [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
            [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
              borderEndEndRadius: 0,
              borderEndStartRadius: 0
            }
          },
          [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
            [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
              borderStartStartRadius: 0,
              borderStartEndRadius: 0
            }
          }
        };
      }
      function genCompactItemVerticalStyle(token2) {
        const compactCls = `${token2.componentCls}-compact-vertical`;
        return {
          [compactCls]: _extends(_extends({}, compactItemVerticalBorder(token2, compactCls)), compactItemBorderVerticalRadius(token2.componentCls, compactCls))
        };
      }
      const genSharedButtonStyle = (token2) => {
        const {
          componentCls,
          iconCls
        } = token2;
        return {
          [componentCls]: {
            outline: "none",
            position: "relative",
            display: "inline-block",
            fontWeight: 400,
            whiteSpace: "nowrap",
            textAlign: "center",
            backgroundImage: "none",
            backgroundColor: "transparent",
            border: `${token2.lineWidth}px ${token2.lineType} transparent`,
            cursor: "pointer",
            transition: `all ${token2.motionDurationMid} ${token2.motionEaseInOut}`,
            userSelect: "none",
            touchAction: "manipulation",
            lineHeight: token2.lineHeight,
            color: token2.colorText,
            "> span": {
              display: "inline-block"
            },
            // Leave a space between icon and text.
            [`> ${iconCls} + span, > span + ${iconCls}`]: {
              marginInlineStart: token2.marginXS
            },
            "> a": {
              color: "currentColor"
            },
            "&:not(:disabled)": _extends({}, genFocusStyle(token2)),
            // make `btn-icon-only` not too narrow
            [`&-icon-only${componentCls}-compact-item`]: {
              flex: "none"
            },
            // Special styles for Primary Button
            [`&-compact-item${componentCls}-primary`]: {
              [`&:not([disabled]) + ${componentCls}-compact-item${componentCls}-primary:not([disabled])`]: {
                position: "relative",
                "&:before": {
                  position: "absolute",
                  top: -token2.lineWidth,
                  insetInlineStart: -token2.lineWidth,
                  display: "inline-block",
                  width: token2.lineWidth,
                  height: `calc(100% + ${token2.lineWidth * 2}px)`,
                  backgroundColor: token2.colorPrimaryHover,
                  content: '""'
                }
              }
            },
            // Special styles for Primary Button
            "&-compact-vertical-item": {
              [`&${componentCls}-primary`]: {
                [`&:not([disabled]) + ${componentCls}-compact-vertical-item${componentCls}-primary:not([disabled])`]: {
                  position: "relative",
                  "&:before": {
                    position: "absolute",
                    top: -token2.lineWidth,
                    insetInlineStart: -token2.lineWidth,
                    display: "inline-block",
                    width: `calc(100% + ${token2.lineWidth * 2}px)`,
                    height: token2.lineWidth,
                    backgroundColor: token2.colorPrimaryHover,
                    content: '""'
                  }
                }
              }
            }
          }
        };
      };
      const genHoverActiveButtonStyle = (hoverStyle, activeStyle) => ({
        "&:not(:disabled)": {
          "&:hover": hoverStyle,
          "&:active": activeStyle
        }
      });
      const genCircleButtonStyle = (token2) => ({
        minWidth: token2.controlHeight,
        paddingInlineStart: 0,
        paddingInlineEnd: 0,
        borderRadius: "50%"
      });
      const genRoundButtonStyle = (token2) => ({
        borderRadius: token2.controlHeight,
        paddingInlineStart: token2.controlHeight / 2,
        paddingInlineEnd: token2.controlHeight / 2
      });
      const genDisabledStyle = (token2) => ({
        cursor: "not-allowed",
        borderColor: token2.colorBorder,
        color: token2.colorTextDisabled,
        backgroundColor: token2.colorBgContainerDisabled,
        boxShadow: "none"
      });
      const genGhostButtonStyle = (btnCls, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
        [`&${btnCls}-background-ghost`]: _extends(_extends({
          color: textColor || void 0,
          backgroundColor: "transparent",
          borderColor: borderColor || void 0,
          boxShadow: "none"
        }, genHoverActiveButtonStyle(_extends({
          backgroundColor: "transparent"
        }, hoverStyle), _extends({
          backgroundColor: "transparent"
        }, activeStyle))), {
          "&:disabled": {
            cursor: "not-allowed",
            color: textColorDisabled || void 0,
            borderColor: borderColorDisabled || void 0
          }
        })
      });
      const genSolidDisabledButtonStyle = (token2) => ({
        "&:disabled": _extends({}, genDisabledStyle(token2))
      });
      const genSolidButtonStyle = (token2) => _extends({}, genSolidDisabledButtonStyle(token2));
      const genPureDisabledButtonStyle = (token2) => ({
        "&:disabled": {
          cursor: "not-allowed",
          color: token2.colorTextDisabled
        }
      });
      const genDefaultButtonStyle = (token2) => _extends(_extends(_extends(_extends(_extends({}, genSolidButtonStyle(token2)), {
        backgroundColor: token2.colorBgContainer,
        borderColor: token2.colorBorder,
        boxShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.controlTmpOutline}`
      }), genHoverActiveButtonStyle({
        color: token2.colorPrimaryHover,
        borderColor: token2.colorPrimaryHover
      }, {
        color: token2.colorPrimaryActive,
        borderColor: token2.colorPrimaryActive
      })), genGhostButtonStyle(token2.componentCls, token2.colorBgContainer, token2.colorBgContainer, token2.colorTextDisabled, token2.colorBorder)), {
        [`&${token2.componentCls}-dangerous`]: _extends(_extends(_extends({
          color: token2.colorError,
          borderColor: token2.colorError
        }, genHoverActiveButtonStyle({
          color: token2.colorErrorHover,
          borderColor: token2.colorErrorBorderHover
        }, {
          color: token2.colorErrorActive,
          borderColor: token2.colorErrorActive
        })), genGhostButtonStyle(token2.componentCls, token2.colorError, token2.colorError, token2.colorTextDisabled, token2.colorBorder)), genSolidDisabledButtonStyle(token2))
      });
      const genPrimaryButtonStyle = (token2) => _extends(_extends(_extends(_extends(_extends({}, genSolidButtonStyle(token2)), {
        color: token2.colorTextLightSolid,
        backgroundColor: token2.colorPrimary,
        boxShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.controlOutline}`
      }), genHoverActiveButtonStyle({
        color: token2.colorTextLightSolid,
        backgroundColor: token2.colorPrimaryHover
      }, {
        color: token2.colorTextLightSolid,
        backgroundColor: token2.colorPrimaryActive
      })), genGhostButtonStyle(token2.componentCls, token2.colorPrimary, token2.colorPrimary, token2.colorTextDisabled, token2.colorBorder, {
        color: token2.colorPrimaryHover,
        borderColor: token2.colorPrimaryHover
      }, {
        color: token2.colorPrimaryActive,
        borderColor: token2.colorPrimaryActive
      })), {
        [`&${token2.componentCls}-dangerous`]: _extends(_extends(_extends({
          backgroundColor: token2.colorError,
          boxShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.colorErrorOutline}`
        }, genHoverActiveButtonStyle({
          backgroundColor: token2.colorErrorHover
        }, {
          backgroundColor: token2.colorErrorActive
        })), genGhostButtonStyle(token2.componentCls, token2.colorError, token2.colorError, token2.colorTextDisabled, token2.colorBorder, {
          color: token2.colorErrorHover,
          borderColor: token2.colorErrorHover
        }, {
          color: token2.colorErrorActive,
          borderColor: token2.colorErrorActive
        })), genSolidDisabledButtonStyle(token2))
      });
      const genDashedButtonStyle = (token2) => _extends(_extends({}, genDefaultButtonStyle(token2)), {
        borderStyle: "dashed"
      });
      const genLinkButtonStyle = (token2) => _extends(_extends(_extends({
        color: token2.colorLink
      }, genHoverActiveButtonStyle({
        color: token2.colorLinkHover
      }, {
        color: token2.colorLinkActive
      })), genPureDisabledButtonStyle(token2)), {
        [`&${token2.componentCls}-dangerous`]: _extends(_extends({
          color: token2.colorError
        }, genHoverActiveButtonStyle({
          color: token2.colorErrorHover
        }, {
          color: token2.colorErrorActive
        })), genPureDisabledButtonStyle(token2))
      });
      const genTextButtonStyle = (token2) => _extends(_extends(_extends({}, genHoverActiveButtonStyle({
        color: token2.colorText,
        backgroundColor: token2.colorBgTextHover
      }, {
        color: token2.colorText,
        backgroundColor: token2.colorBgTextActive
      })), genPureDisabledButtonStyle(token2)), {
        [`&${token2.componentCls}-dangerous`]: _extends(_extends({
          color: token2.colorError
        }, genPureDisabledButtonStyle(token2)), genHoverActiveButtonStyle({
          color: token2.colorErrorHover,
          backgroundColor: token2.colorErrorBg
        }, {
          color: token2.colorErrorHover,
          backgroundColor: token2.colorErrorBg
        }))
      });
      const genDisabledButtonStyle = (token2) => _extends(_extends({}, genDisabledStyle(token2)), {
        [`&${token2.componentCls}:hover`]: _extends({}, genDisabledStyle(token2))
      });
      const genTypeButtonStyle = (token2) => {
        const {
          componentCls
        } = token2;
        return {
          [`${componentCls}-default`]: genDefaultButtonStyle(token2),
          [`${componentCls}-primary`]: genPrimaryButtonStyle(token2),
          [`${componentCls}-dashed`]: genDashedButtonStyle(token2),
          [`${componentCls}-link`]: genLinkButtonStyle(token2),
          [`${componentCls}-text`]: genTextButtonStyle(token2),
          [`${componentCls}-disabled`]: genDisabledButtonStyle(token2)
        };
      };
      const genSizeButtonStyle = function(token2) {
        let sizePrefixCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        const {
          componentCls,
          iconCls,
          controlHeight,
          fontSize,
          lineHeight,
          lineWidth,
          borderRadius,
          buttonPaddingHorizontal
        } = token2;
        const paddingVertical = Math.max(0, (controlHeight - fontSize * lineHeight) / 2 - lineWidth);
        const paddingHorizontal = buttonPaddingHorizontal - lineWidth;
        const iconOnlyCls = `${componentCls}-icon-only`;
        return [
          // Size
          {
            [`${componentCls}${sizePrefixCls}`]: {
              fontSize,
              height: controlHeight,
              padding: `${paddingVertical}px ${paddingHorizontal}px`,
              borderRadius,
              [`&${iconOnlyCls}`]: {
                width: controlHeight,
                paddingInlineStart: 0,
                paddingInlineEnd: 0,
                [`&${componentCls}-round`]: {
                  width: "auto"
                },
                "> span": {
                  transform: "scale(1.143)"
                  // 14px -> 16px
                }
              },
              // Loading
              [`&${componentCls}-loading`]: {
                opacity: token2.opacityLoading,
                cursor: "default"
              },
              [`${componentCls}-loading-icon`]: {
                transition: `width ${token2.motionDurationSlow} ${token2.motionEaseInOut}, opacity ${token2.motionDurationSlow} ${token2.motionEaseInOut}`
              },
              [`&:not(${iconOnlyCls}) ${componentCls}-loading-icon > ${iconCls}`]: {
                marginInlineEnd: token2.marginXS
              }
            }
          },
          // Shape - patch prefixCls again to override solid border radius style
          {
            [`${componentCls}${componentCls}-circle${sizePrefixCls}`]: genCircleButtonStyle(token2)
          },
          {
            [`${componentCls}${componentCls}-round${sizePrefixCls}`]: genRoundButtonStyle(token2)
          }
        ];
      };
      const genSizeBaseButtonStyle = (token2) => genSizeButtonStyle(token2);
      const genSizeSmallButtonStyle = (token2) => {
        const smallToken = merge(token2, {
          controlHeight: token2.controlHeightSM,
          padding: token2.paddingXS,
          buttonPaddingHorizontal: 8,
          borderRadius: token2.borderRadiusSM
        });
        return genSizeButtonStyle(smallToken, `${token2.componentCls}-sm`);
      };
      const genSizeLargeButtonStyle = (token2) => {
        const largeToken = merge(token2, {
          controlHeight: token2.controlHeightLG,
          fontSize: token2.fontSizeLG,
          borderRadius: token2.borderRadiusLG
        });
        return genSizeButtonStyle(largeToken, `${token2.componentCls}-lg`);
      };
      const genBlockButtonStyle = (token2) => {
        const {
          componentCls
        } = token2;
        return {
          [componentCls]: {
            [`&${componentCls}-block`]: {
              width: "100%"
            }
          }
        };
      };
      const useStyle$7 = genComponentStyleHook("Button", (token2) => {
        const {
          controlTmpOutline,
          paddingContentHorizontal
        } = token2;
        const buttonToken = merge(token2, {
          colorOutlineDefault: controlTmpOutline,
          buttonPaddingHorizontal: paddingContentHorizontal
        });
        return [
          // Shared
          genSharedButtonStyle(buttonToken),
          // Size
          genSizeSmallButtonStyle(buttonToken),
          genSizeBaseButtonStyle(buttonToken),
          genSizeLargeButtonStyle(buttonToken),
          // Block
          genBlockButtonStyle(buttonToken),
          // Group (type, ghost, danger, disabled, loading)
          genTypeButtonStyle(buttonToken),
          // Button Group
          genGroupStyle$1(buttonToken),
          // Space Compact
          genCompactItemStyle(token2, {
            focus: false
          }),
          genCompactItemVerticalStyle(token2)
        ];
      });
      const buttonGroupProps = () => ({
        prefixCls: String,
        size: {
          type: String
        }
      });
      const GroupSizeContext = createContext();
      const ButtonGroup = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "AButtonGroup",
        props: buttonGroupProps(),
        setup(props, _ref) {
          let {
            slots
          } = _ref;
          const {
            prefixCls,
            direction
          } = useConfigInject("btn-group", props);
          const [, , hashId] = useToken();
          GroupSizeContext.useProvide(vue.reactive({
            size: vue.computed(() => props.size)
          }));
          const classes = vue.computed(() => {
            const {
              size
            } = props;
            let sizeCls = "";
            switch (size) {
              case "large":
                sizeCls = "lg";
                break;
              case "small":
                sizeCls = "sm";
                break;
              case "middle":
              case void 0:
                break;
              default:
                devWarning(!size, "Button.Group", "Invalid prop `size`.");
            }
            return {
              [`${prefixCls.value}`]: true,
              [`${prefixCls.value}-${sizeCls}`]: sizeCls,
              [`${prefixCls.value}-rtl`]: direction.value === "rtl",
              [hashId.value]: true
            };
          });
          return () => {
            var _a;
            return vue.createVNode("div", {
              "class": classes.value
            }, [flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))]);
          };
        }
      });
      const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
      const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
      function isUnBorderedButtonType(type) {
        return type === "text" || type === "link";
      }
      const Button = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "AButton",
        inheritAttrs: false,
        __ANT_BUTTON: true,
        props: initDefaultProps$1(buttonTypes(), {
          type: "default"
        }),
        slots: Object,
        // emits: ['click', 'mousedown'],
        setup(props, _ref) {
          let {
            slots,
            attrs,
            emit,
            expose
          } = _ref;
          const {
            prefixCls,
            autoInsertSpaceInButton,
            direction,
            size
          } = useConfigInject("btn", props);
          const [wrapSSR, hashId] = useStyle$7(prefixCls);
          const groupSizeContext = GroupSizeContext.useInject();
          const disabledContext = useInjectDisabled();
          const mergedDisabled = vue.computed(() => {
            var _a;
            return (_a = props.disabled) !== null && _a !== void 0 ? _a : disabledContext.value;
          });
          const buttonNodeRef = vue.shallowRef(null);
          const delayTimeoutRef = vue.shallowRef(void 0);
          let isNeedInserted = false;
          const innerLoading = vue.shallowRef(false);
          const hasTwoCNChar = vue.shallowRef(false);
          const autoInsertSpace = vue.computed(() => autoInsertSpaceInButton.value !== false);
          const {
            compactSize,
            compactItemClassnames
          } = useCompactItemContext(prefixCls, direction);
          const loadingOrDelay = vue.computed(() => typeof props.loading === "object" && props.loading.delay ? props.loading.delay || true : !!props.loading);
          vue.watch(loadingOrDelay, (val) => {
            clearTimeout(delayTimeoutRef.value);
            if (typeof loadingOrDelay.value === "number") {
              delayTimeoutRef.value = setTimeout(() => {
                innerLoading.value = val;
              }, loadingOrDelay.value);
            } else {
              innerLoading.value = val;
            }
          }, {
            immediate: true
          });
          const classes = vue.computed(() => {
            const {
              type,
              shape = "default",
              ghost,
              block,
              danger
            } = props;
            const pre = prefixCls.value;
            const sizeClassNameMap = {
              large: "lg",
              small: "sm",
              middle: void 0
            };
            const sizeFullname = compactSize.value || (groupSizeContext === null || groupSizeContext === void 0 ? void 0 : groupSizeContext.size) || size.value;
            const sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || "" : "";
            return [compactItemClassnames.value, {
              [hashId.value]: true,
              [`${pre}`]: true,
              [`${pre}-${shape}`]: shape !== "default" && shape,
              [`${pre}-${type}`]: type,
              [`${pre}-${sizeCls}`]: sizeCls,
              [`${pre}-loading`]: innerLoading.value,
              [`${pre}-background-ghost`]: ghost && !isUnBorderedButtonType(type),
              [`${pre}-two-chinese-chars`]: hasTwoCNChar.value && autoInsertSpace.value,
              [`${pre}-block`]: block,
              [`${pre}-dangerous`]: !!danger,
              [`${pre}-rtl`]: direction.value === "rtl"
            }];
          });
          const fixTwoCNChar = () => {
            const node2 = buttonNodeRef.value;
            if (!node2 || autoInsertSpaceInButton.value === false) {
              return;
            }
            const buttonText = node2.textContent;
            if (isNeedInserted && isTwoCNChar(buttonText)) {
              if (!hasTwoCNChar.value) {
                hasTwoCNChar.value = true;
              }
            } else if (hasTwoCNChar.value) {
              hasTwoCNChar.value = false;
            }
          };
          const handleClick = (event) => {
            if (innerLoading.value || mergedDisabled.value) {
              event.preventDefault();
              return;
            }
            emit("click", event);
          };
          const handleMousedown = (event) => {
            emit("mousedown", event);
          };
          const insertSpace = (child, needInserted) => {
            const SPACE = needInserted ? " " : "";
            if (child.type === vue.Text) {
              let text = child.children.trim();
              if (isTwoCNChar(text)) {
                text = text.split("").join(SPACE);
              }
              return vue.createVNode("span", null, [text]);
            }
            return child;
          };
          vue.watchEffect(() => {
            devWarning(!(props.ghost && isUnBorderedButtonType(props.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
          });
          vue.onMounted(fixTwoCNChar);
          vue.onUpdated(fixTwoCNChar);
          vue.onBeforeUnmount(() => {
            delayTimeoutRef.value && clearTimeout(delayTimeoutRef.value);
          });
          const focus = () => {
            var _a;
            (_a = buttonNodeRef.value) === null || _a === void 0 ? void 0 : _a.focus();
          };
          const blur = () => {
            var _a;
            (_a = buttonNodeRef.value) === null || _a === void 0 ? void 0 : _a.blur();
          };
          expose({
            focus,
            blur
          });
          return () => {
            var _a, _b;
            const {
              icon = (_a = slots.icon) === null || _a === void 0 ? void 0 : _a.call(slots)
            } = props;
            const children = flattenChildren((_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots));
            isNeedInserted = children.length === 1 && !icon && !isUnBorderedButtonType(props.type);
            const {
              type,
              htmlType,
              href,
              title,
              target
            } = props;
            const iconType = innerLoading.value ? "loading" : icon;
            const buttonProps2 = _extends(_extends({}, attrs), {
              title,
              disabled: mergedDisabled.value,
              class: [classes.value, attrs.class, {
                [`${prefixCls.value}-icon-only`]: children.length === 0 && !!iconType
              }],
              onClick: handleClick,
              onMousedown: handleMousedown
            });
            if (!mergedDisabled.value) {
              delete buttonProps2.disabled;
            }
            const iconNode = icon && !innerLoading.value ? icon : vue.createVNode(LoadingIcon, {
              "existIcon": !!icon,
              "prefixCls": prefixCls.value,
              "loading": !!innerLoading.value
            }, null);
            const kids = children.map((child) => insertSpace(child, isNeedInserted && autoInsertSpace.value));
            if (href !== void 0) {
              return wrapSSR(vue.createVNode("a", _objectSpread2$1(_objectSpread2$1({}, buttonProps2), {}, {
                "href": href,
                "target": target,
                "ref": buttonNodeRef
              }), [iconNode, kids]));
            }
            let buttonNode = vue.createVNode("button", _objectSpread2$1(_objectSpread2$1({}, buttonProps2), {}, {
              "ref": buttonNodeRef,
              "type": htmlType
            }), [iconNode, kids]);
            if (!isUnBorderedButtonType(type)) {
              const _buttonNode = function() {
                return buttonNode;
              }();
              buttonNode = vue.createVNode(Wave, {
                "ref": "wave",
                "disabled": !!innerLoading.value
              }, {
                default: () => [_buttonNode]
              });
            }
            return wrapSSR(buttonNode);
          };
        }
      });
      Button.Group = ButtonGroup;
      Button.install = function(app) {
        app.component(Button.name, Button);
        app.component(ButtonGroup.name, ButtonGroup);
        return app;
      };
      var RightOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, "name": "right", "theme": "outlined" };
      const RightOutlinedSvg = RightOutlined$2;
      function _objectSpread$b(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$b(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$b(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var RightOutlined = function RightOutlined2(props, context2) {
        var p = _objectSpread$b({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$b({}, p, {
          "icon": RightOutlinedSvg
        }), null);
      };
      RightOutlined.displayName = "RightOutlined";
      RightOutlined.inheritAttrs = false;
      const RightOutlined$1 = RightOutlined;
      function hasClass(node2, className) {
        if (node2.classList) {
          return node2.classList.contains(className);
        }
        const originClass = node2.className;
        return ` ${originClass} `.indexOf(` ${className} `) > -1;
      }
      function addClass(node2, className) {
        if (node2.classList) {
          node2.classList.add(className);
        } else {
          if (!hasClass(node2, className)) {
            node2.className = `${node2.className} ${className}`;
          }
        }
      }
      function removeClass(node2, className) {
        if (node2.classList) {
          node2.classList.remove(className);
        } else {
          if (hasClass(node2, className)) {
            const originClass = node2.className;
            node2.className = ` ${originClass} `.replace(` ${className} `, " ");
          }
        }
      }
      const collapseMotion = function() {
        let name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse";
        let appear = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        return {
          name,
          appear,
          css: true,
          onBeforeEnter: (node2) => {
            node2.style.height = "0px";
            node2.style.opacity = "0";
            addClass(node2, name);
          },
          onEnter: (node2) => {
            vue.nextTick(() => {
              node2.style.height = `${node2.scrollHeight}px`;
              node2.style.opacity = "1";
            });
          },
          onAfterEnter: (node2) => {
            if (node2) {
              removeClass(node2, name);
              node2.style.height = null;
              node2.style.opacity = null;
            }
          },
          onBeforeLeave: (node2) => {
            addClass(node2, name);
            node2.style.height = `${node2.offsetHeight}px`;
            node2.style.opacity = null;
          },
          onLeave: (node2) => {
            setTimeout(() => {
              node2.style.height = "0px";
              node2.style.opacity = "0";
            });
          },
          onAfterLeave: (node2) => {
            if (node2) {
              removeClass(node2, name);
              if (node2.style) {
                node2.style.height = null;
                node2.style.opacity = null;
              }
            }
          }
        };
      };
      const collapseMotion$1 = collapseMotion;
      const collapseProps = () => ({
        prefixCls: String,
        activeKey: someType([Array, Number, String]),
        defaultActiveKey: someType([Array, Number, String]),
        accordion: booleanType(),
        destroyInactivePanel: booleanType(),
        bordered: booleanType(),
        expandIcon: functionType(),
        openAnimation: PropTypes$1.object,
        expandIconPosition: stringType(),
        collapsible: stringType(),
        ghost: booleanType(),
        onChange: functionType(),
        "onUpdate:activeKey": functionType()
      });
      const collapsePanelProps = () => ({
        openAnimation: PropTypes$1.object,
        prefixCls: String,
        header: PropTypes$1.any,
        headerClass: String,
        showArrow: booleanType(),
        isActive: booleanType(),
        destroyInactivePanel: booleanType(),
        /** @deprecated Use `collapsible="disabled"` instead */
        disabled: booleanType(),
        accordion: booleanType(),
        forceRender: booleanType(),
        expandIcon: functionType(),
        extra: PropTypes$1.any,
        panelKey: someType(),
        collapsible: stringType(),
        role: String,
        onItemClick: functionType()
      });
      const genBaseStyle = (token2) => {
        const {
          componentCls,
          collapseContentBg,
          padding,
          collapseContentPaddingHorizontal,
          collapseHeaderBg,
          collapseHeaderPadding,
          collapsePanelBorderRadius,
          lineWidth,
          lineType,
          colorBorder,
          colorText,
          colorTextHeading,
          colorTextDisabled,
          fontSize,
          lineHeight,
          marginSM,
          paddingSM,
          motionDurationSlow,
          fontSizeIcon
        } = token2;
        const borderBase = `${lineWidth}px ${lineType} ${colorBorder}`;
        return {
          [componentCls]: _extends(_extends({}, resetComponent(token2)), {
            backgroundColor: collapseHeaderBg,
            border: borderBase,
            borderBottom: 0,
            borderRadius: `${collapsePanelBorderRadius}px`,
            [`&-rtl`]: {
              direction: "rtl"
            },
            [`& > ${componentCls}-item`]: {
              borderBottom: borderBase,
              [`&:last-child`]: {
                [`
            &,
            & > ${componentCls}-header`]: {
                  borderRadius: `0 0 ${collapsePanelBorderRadius}px ${collapsePanelBorderRadius}px`
                }
              },
              [`> ${componentCls}-header`]: {
                position: "relative",
                display: "flex",
                flexWrap: "nowrap",
                alignItems: "flex-start",
                padding: collapseHeaderPadding,
                color: colorTextHeading,
                lineHeight,
                cursor: "pointer",
                transition: `all ${motionDurationSlow}, visibility 0s`,
                [`> ${componentCls}-header-text`]: {
                  flex: "auto"
                },
                "&:focus": {
                  outline: "none"
                },
                // >>>>> Arrow
                [`${componentCls}-expand-icon`]: {
                  height: fontSize * lineHeight,
                  display: "flex",
                  alignItems: "center",
                  paddingInlineEnd: marginSM
                },
                [`${componentCls}-arrow`]: _extends(_extends({}, resetIcon()), {
                  fontSize: fontSizeIcon,
                  svg: {
                    transition: `transform ${motionDurationSlow}`
                  }
                }),
                // >>>>> Text
                [`${componentCls}-header-text`]: {
                  marginInlineEnd: "auto"
                }
              },
              [`${componentCls}-header-collapsible-only`]: {
                cursor: "default",
                [`${componentCls}-header-text`]: {
                  flex: "none",
                  cursor: "pointer"
                },
                [`${componentCls}-expand-icon`]: {
                  cursor: "pointer"
                }
              },
              [`${componentCls}-icon-collapsible-only`]: {
                cursor: "default",
                [`${componentCls}-expand-icon`]: {
                  cursor: "pointer"
                }
              },
              [`&${componentCls}-no-arrow`]: {
                [`> ${componentCls}-header`]: {
                  paddingInlineStart: paddingSM
                }
              }
            },
            [`${componentCls}-content`]: {
              color: colorText,
              backgroundColor: collapseContentBg,
              borderTop: borderBase,
              [`& > ${componentCls}-content-box`]: {
                padding: `${padding}px ${collapseContentPaddingHorizontal}px`
              },
              [`&-hidden`]: {
                display: "none"
              }
            },
            [`${componentCls}-item:last-child`]: {
              [`> ${componentCls}-content`]: {
                borderRadius: `0 0 ${collapsePanelBorderRadius}px ${collapsePanelBorderRadius}px`
              }
            },
            [`& ${componentCls}-item-disabled > ${componentCls}-header`]: {
              [`
          &,
          & > .arrow
        `]: {
                color: colorTextDisabled,
                cursor: "not-allowed"
              }
            },
            // ========================== Icon Position ==========================
            [`&${componentCls}-icon-position-end`]: {
              [`& > ${componentCls}-item`]: {
                [`> ${componentCls}-header`]: {
                  [`${componentCls}-expand-icon`]: {
                    order: 1,
                    paddingInlineEnd: 0,
                    paddingInlineStart: marginSM
                  }
                }
              }
            }
          })
        };
      };
      const genArrowStyle = (token2) => {
        const {
          componentCls
        } = token2;
        const fixedSelector = `> ${componentCls}-item > ${componentCls}-header ${componentCls}-arrow svg`;
        return {
          [`${componentCls}-rtl`]: {
            [fixedSelector]: {
              transform: `rotate(180deg)`
            }
          }
        };
      };
      const genBorderlessStyle = (token2) => {
        const {
          componentCls,
          collapseHeaderBg,
          paddingXXS,
          colorBorder
        } = token2;
        return {
          [`${componentCls}-borderless`]: {
            backgroundColor: collapseHeaderBg,
            border: 0,
            [`> ${componentCls}-item`]: {
              borderBottom: `1px solid ${colorBorder}`
            },
            [`
        > ${componentCls}-item:last-child,
        > ${componentCls}-item:last-child ${componentCls}-header
      `]: {
              borderRadius: 0
            },
            [`> ${componentCls}-item:last-child`]: {
              borderBottom: 0
            },
            [`> ${componentCls}-item > ${componentCls}-content`]: {
              backgroundColor: "transparent",
              borderTop: 0
            },
            [`> ${componentCls}-item > ${componentCls}-content > ${componentCls}-content-box`]: {
              paddingTop: paddingXXS
            }
          }
        };
      };
      const genGhostStyle = (token2) => {
        const {
          componentCls,
          paddingSM
        } = token2;
        return {
          [`${componentCls}-ghost`]: {
            backgroundColor: "transparent",
            border: 0,
            [`> ${componentCls}-item`]: {
              borderBottom: 0,
              [`> ${componentCls}-content`]: {
                backgroundColor: "transparent",
                border: 0,
                [`> ${componentCls}-content-box`]: {
                  paddingBlock: paddingSM
                }
              }
            }
          }
        };
      };
      const useStyle$6 = genComponentStyleHook("Collapse", (token2) => {
        const collapseToken = merge(token2, {
          collapseContentBg: token2.colorBgContainer,
          collapseHeaderBg: token2.colorFillAlter,
          collapseHeaderPadding: `${token2.paddingSM}px ${token2.padding}px`,
          collapsePanelBorderRadius: token2.borderRadiusLG,
          collapseContentPaddingHorizontal: 16
          // Fixed value
        });
        return [genBaseStyle(collapseToken), genBorderlessStyle(collapseToken), genGhostStyle(collapseToken), genArrowStyle(collapseToken), genCollapseMotion$1(collapseToken)];
      });
      function getActiveKeysArray(activeKey) {
        let currentActiveKey = activeKey;
        if (!Array.isArray(currentActiveKey)) {
          const activeKeyType = typeof currentActiveKey;
          currentActiveKey = activeKeyType === "number" || activeKeyType === "string" ? [currentActiveKey] : [];
        }
        return currentActiveKey.map((key2) => String(key2));
      }
      const Collapse = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "ACollapse",
        inheritAttrs: false,
        props: initDefaultProps$1(collapseProps(), {
          accordion: false,
          destroyInactivePanel: false,
          bordered: true,
          openAnimation: collapseMotion$1("ant-motion-collapse", false),
          expandIconPosition: "start"
        }),
        slots: Object,
        setup(props, _ref) {
          let {
            attrs,
            slots,
            emit
          } = _ref;
          const stateActiveKey = vue.ref(getActiveKeysArray(firstNotUndefined([props.activeKey, props.defaultActiveKey])));
          vue.watch(() => props.activeKey, () => {
            stateActiveKey.value = getActiveKeysArray(props.activeKey);
          }, {
            deep: true
          });
          const {
            prefixCls,
            direction
          } = useConfigInject("collapse", props);
          const [wrapSSR, hashId] = useStyle$6(prefixCls);
          const iconPosition = vue.computed(() => {
            const {
              expandIconPosition
            } = props;
            if (expandIconPosition !== void 0) {
              return expandIconPosition;
            }
            return direction.value === "rtl" ? "end" : "start";
          });
          const renderExpandIcon = (panelProps) => {
            const {
              expandIcon = slots.expandIcon
            } = props;
            const icon = expandIcon ? expandIcon(panelProps) : vue.createVNode(RightOutlined$1, {
              "rotate": panelProps.isActive ? 90 : void 0
            }, null);
            return vue.createVNode("div", {
              "class": [`${prefixCls.value}-expand-icon`, hashId.value],
              "onClick": () => ["header", "icon"].includes(props.collapsible) && onClickItem(panelProps.panelKey)
            }, [isValidElement(Array.isArray(expandIcon) ? icon[0] : icon) ? cloneElement(icon, {
              class: `${prefixCls.value}-arrow`
            }, false) : icon]);
          };
          const setActiveKey = (activeKey) => {
            if (props.activeKey === void 0) {
              stateActiveKey.value = activeKey;
            }
            const newKey = props.accordion ? activeKey[0] : activeKey;
            emit("update:activeKey", newKey);
            emit("change", newKey);
          };
          const onClickItem = (key2) => {
            let activeKey = stateActiveKey.value;
            if (props.accordion) {
              activeKey = activeKey[0] === key2 ? [] : [key2];
            } else {
              activeKey = [...activeKey];
              const index2 = activeKey.indexOf(key2);
              const isActive = index2 > -1;
              if (isActive) {
                activeKey.splice(index2, 1);
              } else {
                activeKey.push(key2);
              }
            }
            setActiveKey(activeKey);
          };
          const getNewChild = (child, index2) => {
            var _a, _b, _c;
            if (isEmptyElement(child))
              return;
            const activeKey = stateActiveKey.value;
            const {
              accordion,
              destroyInactivePanel,
              collapsible,
              openAnimation
            } = props;
            const key2 = String((_a = child.key) !== null && _a !== void 0 ? _a : index2);
            const {
              header = (_c = (_b = child.children) === null || _b === void 0 ? void 0 : _b.header) === null || _c === void 0 ? void 0 : _c.call(_b),
              headerClass,
              collapsible: childCollapsible,
              disabled
            } = child.props || {};
            let isActive = false;
            if (accordion) {
              isActive = activeKey[0] === key2;
            } else {
              isActive = activeKey.indexOf(key2) > -1;
            }
            let mergeCollapsible = childCollapsible !== null && childCollapsible !== void 0 ? childCollapsible : collapsible;
            if (disabled || disabled === "") {
              mergeCollapsible = "disabled";
            }
            const newProps = {
              key: key2,
              panelKey: key2,
              header,
              headerClass,
              isActive,
              prefixCls: prefixCls.value,
              destroyInactivePanel,
              openAnimation,
              accordion,
              onItemClick: mergeCollapsible === "disabled" ? null : onClickItem,
              expandIcon: renderExpandIcon,
              collapsible: mergeCollapsible
            };
            return cloneElement(child, newProps);
          };
          const getItems = () => {
            var _a;
            return flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)).map(getNewChild);
          };
          return () => {
            const {
              accordion,
              bordered,
              ghost
            } = props;
            const collapseClassName = classNames(prefixCls.value, {
              [`${prefixCls.value}-borderless`]: !bordered,
              [`${prefixCls.value}-icon-position-${iconPosition.value}`]: true,
              [`${prefixCls.value}-rtl`]: direction.value === "rtl",
              [`${prefixCls.value}-ghost`]: !!ghost,
              [attrs.class]: !!attrs.class
            }, hashId.value);
            return wrapSSR(vue.createVNode("div", _objectSpread2$1(_objectSpread2$1({
              "class": collapseClassName
            }, getDataAndAriaProps(attrs)), {}, {
              "style": attrs.style,
              "role": accordion ? "tablist" : null
            }), [getItems()]));
          };
        }
      });
      const PanelContent = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "PanelContent",
        props: collapsePanelProps(),
        setup(props, _ref) {
          let {
            slots
          } = _ref;
          const rendered = vue.shallowRef(false);
          vue.watchEffect(() => {
            if (props.isActive || props.forceRender) {
              rendered.value = true;
            }
          });
          return () => {
            var _a;
            if (!rendered.value)
              return null;
            const {
              prefixCls,
              isActive,
              role
            } = props;
            return vue.createVNode("div", {
              "class": classNames(`${prefixCls}-content`, {
                [`${prefixCls}-content-active`]: isActive,
                [`${prefixCls}-content-inactive`]: !isActive
              }),
              "role": role
            }, [vue.createVNode("div", {
              "class": `${prefixCls}-content-box`
            }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])]);
          };
        }
      });
      const __unplugin_components_5 = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "ACollapsePanel",
        inheritAttrs: false,
        props: initDefaultProps$1(collapsePanelProps(), {
          showArrow: true,
          isActive: false,
          onItemClick() {
          },
          headerClass: "",
          forceRender: false
        }),
        slots: Object,
        // emits: ['itemClick'],
        setup(props, _ref) {
          let {
            slots,
            emit,
            attrs
          } = _ref;
          devWarning(props.disabled === void 0, "Collapse.Panel", '`disabled` is deprecated. Please use `collapsible="disabled"` instead.');
          const {
            prefixCls
          } = useConfigInject("collapse", props);
          const handleItemClick = () => {
            emit("itemClick", props.panelKey);
          };
          const handleKeyPress = (e2) => {
            if (e2.key === "Enter" || e2.keyCode === 13 || e2.which === 13) {
              handleItemClick();
            }
          };
          return () => {
            var _a, _b;
            const {
              header = (_a = slots.header) === null || _a === void 0 ? void 0 : _a.call(slots),
              headerClass,
              isActive,
              showArrow,
              destroyInactivePanel,
              accordion,
              forceRender,
              openAnimation,
              expandIcon = slots.expandIcon,
              extra = (_b = slots.extra) === null || _b === void 0 ? void 0 : _b.call(slots),
              collapsible
            } = props;
            const disabled = collapsible === "disabled";
            const prefixClsValue = prefixCls.value;
            const headerCls = classNames(`${prefixClsValue}-header`, {
              [headerClass]: headerClass,
              [`${prefixClsValue}-header-collapsible-only`]: collapsible === "header",
              [`${prefixClsValue}-icon-collapsible-only`]: collapsible === "icon"
            });
            const itemCls = classNames({
              [`${prefixClsValue}-item`]: true,
              [`${prefixClsValue}-item-active`]: isActive,
              [`${prefixClsValue}-item-disabled`]: disabled,
              [`${prefixClsValue}-no-arrow`]: !showArrow,
              [`${attrs.class}`]: !!attrs.class
            });
            let icon = vue.createVNode("i", {
              "class": "arrow"
            }, null);
            if (showArrow && typeof expandIcon === "function") {
              icon = expandIcon(props);
            }
            const panelContent = vue.withDirectives(vue.createVNode(PanelContent, {
              "prefixCls": prefixClsValue,
              "isActive": isActive,
              "forceRender": forceRender,
              "role": accordion ? "tabpanel" : null
            }, {
              default: slots.default
            }), [[vue.vShow, isActive]]);
            const transitionProps = _extends({
              appear: false,
              css: false
            }, openAnimation);
            return vue.createVNode("div", _objectSpread2$1(_objectSpread2$1({}, attrs), {}, {
              "class": itemCls
            }), [vue.createVNode("div", {
              "class": headerCls,
              "onClick": () => !["header", "icon"].includes(collapsible) && handleItemClick(),
              "role": accordion ? "tab" : "button",
              "tabindex": disabled ? -1 : 0,
              "aria-expanded": isActive,
              "onKeypress": handleKeyPress
            }, [showArrow && icon, vue.createVNode("span", {
              "onClick": () => collapsible === "header" && handleItemClick(),
              "class": `${prefixClsValue}-header-text`
            }, [header]), extra && vue.createVNode("div", {
              "class": `${prefixClsValue}-extra`
            }, [extra])]), vue.createVNode(vue.Transition, transitionProps, {
              default: () => [!destroyInactivePanel || isActive ? panelContent : null]
            })]);
          };
        }
      });
      Collapse.Panel = __unplugin_components_5;
      Collapse.install = function(app) {
        app.component(Collapse.name, Collapse);
        app.component(__unplugin_components_5.name, __unplugin_components_5);
        return app;
      };
      var LeftOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, "name": "left", "theme": "outlined" };
      const LeftOutlinedSvg = LeftOutlined$2;
      function _objectSpread$a(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$a(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$a(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var LeftOutlined = function LeftOutlined2(props, context2) {
        var p = _objectSpread$a({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$a({}, p, {
          "icon": LeftOutlinedSvg
        }), null);
      };
      LeftOutlined.displayName = "LeftOutlined";
      LeftOutlined.inheritAttrs = false;
      const LeftOutlined$1 = LeftOutlined;
      const canUseDocElement = () => canUseDom() && window.document.documentElement;
      let flexGapSupported;
      const detectFlexGapSupported = () => {
        if (!canUseDocElement()) {
          return false;
        }
        if (flexGapSupported !== void 0) {
          return flexGapSupported;
        }
        const flex = document.createElement("div");
        flex.style.display = "flex";
        flex.style.flexDirection = "column";
        flex.style.rowGap = "1px";
        flex.appendChild(document.createElement("div"));
        flex.appendChild(document.createElement("div"));
        document.body.appendChild(flex);
        flexGapSupported = flex.scrollHeight === 1;
        document.body.removeChild(flex);
        return flexGapSupported;
      };
      const useFlexGapSupport = () => {
        const flexible = vue.shallowRef(false);
        vue.onMounted(() => {
          flexible.value = detectFlexGapSupported();
        });
        return flexible;
      };
      let runtimeLocale = _extends({}, defaultLocale.Modal);
      function changeConfirmLocale(newLocale) {
        if (newLocale) {
          runtimeLocale = _extends(_extends({}, runtimeLocale), newLocale);
        } else {
          runtimeLocale = _extends({}, defaultLocale.Modal);
        }
      }
      function getConfirmLocale() {
        return runtimeLocale;
      }
      const ANT_MARK = "internalMark";
      const LocaleProvider = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "ALocaleProvider",
        props: {
          locale: {
            type: Object
          },
          ANT_MARK__: String
        },
        setup(props, _ref) {
          let {
            slots
          } = _ref;
          warning$2(props.ANT_MARK__ === ANT_MARK);
          const state = vue.reactive({
            antLocale: _extends(_extends({}, props.locale), {
              exist: true
            }),
            ANT_MARK__: ANT_MARK
          });
          vue.provide("localeData", state);
          vue.watch(() => props.locale, (locale2) => {
            changeConfirmLocale(locale2 && locale2.Modal);
            state.antLocale = _extends(_extends({}, locale2), {
              exist: true
            });
          }, {
            immediate: true
          });
          return () => {
            var _a;
            return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
          };
        }
      });
      LocaleProvider.install = function(app) {
        app.component(LocaleProvider.name, LocaleProvider);
        return app;
      };
      const locale = withInstall(LocaleProvider);
      const Notice = vue.defineComponent({
        name: "Notice",
        inheritAttrs: false,
        props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
        setup(props, _ref) {
          let {
            attrs,
            slots
          } = _ref;
          let closeTimer;
          let isUnMounted = false;
          const duration = vue.computed(() => props.duration === void 0 ? 4.5 : props.duration);
          const startCloseTimer = () => {
            if (duration.value && !isUnMounted) {
              closeTimer = setTimeout(() => {
                close();
              }, duration.value * 1e3);
            }
          };
          const clearCloseTimer = () => {
            if (closeTimer) {
              clearTimeout(closeTimer);
              closeTimer = null;
            }
          };
          const close = (e2) => {
            if (e2) {
              e2.stopPropagation();
            }
            clearCloseTimer();
            const {
              onClose,
              noticeKey
            } = props;
            if (onClose) {
              onClose(noticeKey);
            }
          };
          const restartCloseTimer = () => {
            clearCloseTimer();
            startCloseTimer();
          };
          vue.onMounted(() => {
            startCloseTimer();
          });
          vue.onUnmounted(() => {
            isUnMounted = true;
            clearCloseTimer();
          });
          vue.watch([duration, () => props.updateMark, () => props.visible], (_ref2, _ref3) => {
            let [preDuration, preUpdateMark, preVisible] = _ref2;
            let [newDuration, newUpdateMark, newVisible] = _ref3;
            if (preDuration !== newDuration || preUpdateMark !== newUpdateMark || preVisible !== newVisible && newVisible) {
              restartCloseTimer();
            }
          }, {
            flush: "post"
          });
          return () => {
            var _a, _b;
            const {
              prefixCls,
              closable,
              closeIcon = (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots),
              onClick,
              holder
            } = props;
            const {
              class: className,
              style: style2
            } = attrs;
            const componentClass = `${prefixCls}-notice`;
            const dataOrAriaAttributeProps = Object.keys(attrs).reduce((acc, key2) => {
              if (key2.startsWith("data-") || key2.startsWith("aria-") || key2 === "role") {
                acc[key2] = attrs[key2];
              }
              return acc;
            }, {});
            const node2 = vue.createVNode("div", _objectSpread2$1({
              "class": classNames(componentClass, className, {
                [`${componentClass}-closable`]: closable
              }),
              "style": style2,
              "onMouseenter": clearCloseTimer,
              "onMouseleave": startCloseTimer,
              "onClick": onClick
            }, dataOrAriaAttributeProps), [vue.createVNode("div", {
              "class": `${componentClass}-content`
            }, [(_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots)]), closable ? vue.createVNode("a", {
              "tabindex": 0,
              "onClick": close,
              "class": `${componentClass}-close`
            }, [closeIcon || vue.createVNode("span", {
              "class": `${componentClass}-close-x`
            }, null)]) : null]);
            if (holder) {
              return vue.createVNode(vue.Teleport, {
                "to": holder
              }, {
                default: () => node2
              });
            }
            return node2;
          };
        }
      });
      var __rest$7 = globalThis && globalThis.__rest || function(s2, e2) {
        var t2 = {};
        for (var p in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
            t2[p] = s2[p];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
            if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
              t2[p[i2]] = s2[p[i2]];
          }
        return t2;
      };
      let seed$1 = 0;
      const now$1 = Date.now();
      function getUuid$1() {
        const id = seed$1;
        seed$1 += 1;
        return `rcNotification_${now$1}_${id}`;
      }
      const Notification$1 = vue.defineComponent({
        name: "Notification",
        inheritAttrs: false,
        props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId"],
        setup(props, _ref) {
          let {
            attrs,
            expose,
            slots
          } = _ref;
          const hookRefs = /* @__PURE__ */ new Map();
          const notices = vue.ref([]);
          const transitionProps = vue.computed(() => {
            const {
              prefixCls,
              animation = "fade"
            } = props;
            let name = props.transitionName;
            if (!name && animation) {
              name = `${prefixCls}-${animation}`;
            }
            return getTransitionGroupProps(name);
          });
          const add = (originNotice, holderCallback) => {
            const key2 = originNotice.key || getUuid$1();
            const notice2 = _extends(_extends({}, originNotice), {
              key: key2
            });
            const {
              maxCount: maxCount2
            } = props;
            const noticeIndex = notices.value.map((v2) => v2.notice.key).indexOf(key2);
            const updatedNotices = notices.value.concat();
            if (noticeIndex !== -1) {
              updatedNotices.splice(noticeIndex, 1, {
                notice: notice2,
                holderCallback
              });
            } else {
              if (maxCount2 && notices.value.length >= maxCount2) {
                notice2.key = updatedNotices[0].notice.key;
                notice2.updateMark = getUuid$1();
                notice2.userPassKey = key2;
                updatedNotices.shift();
              }
              updatedNotices.push({
                notice: notice2,
                holderCallback
              });
            }
            notices.value = updatedNotices;
          };
          const remove = (removeKey) => {
            notices.value = notices.value.filter((_ref2) => {
              let {
                notice: {
                  key: key2,
                  userPassKey
                }
              } = _ref2;
              const mergedKey = userPassKey || key2;
              return mergedKey !== removeKey;
            });
          };
          expose({
            add,
            remove,
            notices
          });
          return () => {
            var _a;
            const {
              prefixCls,
              closeIcon = (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots, {
                prefixCls
              })
            } = props;
            const noticeNodes = notices.value.map((_ref3, index2) => {
              let {
                notice: notice2,
                holderCallback
              } = _ref3;
              const updateMark = index2 === notices.value.length - 1 ? notice2.updateMark : void 0;
              const {
                key: key2,
                userPassKey
              } = notice2;
              const {
                content
              } = notice2;
              const noticeProps = _extends(_extends(_extends({
                prefixCls,
                closeIcon: typeof closeIcon === "function" ? closeIcon({
                  prefixCls
                }) : closeIcon
              }, notice2), notice2.props), {
                key: key2,
                noticeKey: userPassKey || key2,
                updateMark,
                onClose: (noticeKey) => {
                  var _a2;
                  remove(noticeKey);
                  (_a2 = notice2.onClose) === null || _a2 === void 0 ? void 0 : _a2.call(notice2);
                },
                onClick: notice2.onClick
              });
              if (holderCallback) {
                return vue.createVNode("div", {
                  "key": key2,
                  "class": `${prefixCls}-hook-holder`,
                  "ref": (div) => {
                    if (typeof key2 === "undefined") {
                      return;
                    }
                    if (div) {
                      hookRefs.set(key2, div);
                      holderCallback(div, noticeProps);
                    } else {
                      hookRefs.delete(key2);
                    }
                  }
                }, null);
              }
              return vue.createVNode(Notice, _objectSpread2$1(_objectSpread2$1({}, noticeProps), {}, {
                "class": classNames(noticeProps.class, props.hashId)
              }), {
                default: () => [typeof content === "function" ? content({
                  prefixCls
                }) : content]
              });
            });
            const className = {
              [prefixCls]: 1,
              [attrs.class]: !!attrs.class,
              [props.hashId]: true
            };
            return vue.createVNode("div", {
              "class": className,
              "style": attrs.style || {
                top: "65px",
                left: "50%"
              }
            }, [vue.createVNode(vue.TransitionGroup, _objectSpread2$1({
              "tag": "div"
            }, transitionProps.value), {
              default: () => [noticeNodes]
            })]);
          };
        }
      });
      Notification$1.newInstance = function newNotificationInstance(properties, callback) {
        const _a = properties || {}, {
          name = "notification",
          getContainer: getContainer2,
          appContext,
          prefixCls: customizePrefixCls,
          rootPrefixCls: customRootPrefixCls,
          transitionName: customTransitionName,
          hasTransitionName: hasTransitionName2,
          useStyle: useStyle2
        } = _a, props = __rest$7(_a, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName", "useStyle"]);
        const div = document.createElement("div");
        if (getContainer2) {
          const root2 = getContainer2();
          root2.appendChild(div);
        } else {
          document.body.appendChild(div);
        }
        const Wrapper = vue.defineComponent({
          compatConfig: {
            MODE: 3
          },
          name: "NotificationWrapper",
          setup(_props, _ref4) {
            let {
              attrs
            } = _ref4;
            const notiRef = vue.shallowRef();
            const prefixCls = vue.computed(() => globalConfigForApi.getPrefixCls(name, customizePrefixCls));
            const [, hashId] = useStyle2(prefixCls);
            vue.onMounted(() => {
              callback({
                notice(noticeProps) {
                  var _a2;
                  (_a2 = notiRef.value) === null || _a2 === void 0 ? void 0 : _a2.add(noticeProps);
                },
                removeNotice(key2) {
                  var _a2;
                  (_a2 = notiRef.value) === null || _a2 === void 0 ? void 0 : _a2.remove(key2);
                },
                destroy() {
                  vue.render(null, div);
                  if (div.parentNode) {
                    div.parentNode.removeChild(div);
                  }
                },
                component: notiRef
              });
            });
            return () => {
              const global2 = globalConfigForApi;
              const rootPrefixCls = global2.getRootPrefixCls(customRootPrefixCls, prefixCls.value);
              const transitionName2 = hasTransitionName2 ? customTransitionName : `${prefixCls.value}-${customTransitionName}`;
              return vue.createVNode(ConfigProvider$1, _objectSpread2$1(_objectSpread2$1({}, global2), {}, {
                "prefixCls": rootPrefixCls
              }), {
                default: () => [vue.createVNode(Notification$1, _objectSpread2$1(_objectSpread2$1({
                  "ref": notiRef
                }, attrs), {}, {
                  "prefixCls": prefixCls.value,
                  "transitionName": transitionName2,
                  "hashId": hashId.value
                }), null)]
              });
            };
          }
        });
        const vm = vue.createVNode(Wrapper, props);
        vm.appContext = appContext || vm.appContext;
        vue.render(vm, div);
      };
      const Notification$2 = Notification$1;
      let seed = 0;
      const now = Date.now();
      function getUuid() {
        const id = seed;
        seed += 1;
        return `rcNotification_${now}_${id}`;
      }
      const Notification = vue.defineComponent({
        name: "HookNotification",
        inheritAttrs: false,
        props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId", "remove", "notices", "getStyles", "getClassName", "onAllRemoved", "getContainer"],
        setup(props, _ref) {
          let {
            attrs,
            slots
          } = _ref;
          const hookRefs = /* @__PURE__ */ new Map();
          const notices = vue.computed(() => props.notices);
          const transitionProps = vue.computed(() => {
            let name = props.transitionName;
            if (!name && props.animation) {
              switch (typeof props.animation) {
                case "string":
                  name = props.animation;
                  break;
                case "function":
                  name = props.animation().name;
                  break;
                case "object":
                  name = props.animation.name;
                  break;
                default:
                  name = `${props.prefixCls}-fade`;
                  break;
              }
            }
            return getTransitionGroupProps(name);
          });
          const remove = (key2) => props.remove(key2);
          const placements2 = vue.ref({});
          vue.watch(notices, () => {
            const nextPlacements = {};
            Object.keys(placements2.value).forEach((placement) => {
              nextPlacements[placement] = [];
            });
            props.notices.forEach((config) => {
              const {
                placement = "topRight"
              } = config.notice;
              if (placement) {
                nextPlacements[placement] = nextPlacements[placement] || [];
                nextPlacements[placement].push(config);
              }
            });
            placements2.value = nextPlacements;
          });
          const placementList = vue.computed(() => Object.keys(placements2.value));
          return () => {
            var _a;
            const {
              prefixCls,
              closeIcon = (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots, {
                prefixCls
              })
            } = props;
            const noticeNodes = placementList.value.map((placement) => {
              var _a2, _b;
              const noticesForPlacement = placements2.value[placement];
              const classes = (_a2 = props.getClassName) === null || _a2 === void 0 ? void 0 : _a2.call(props, placement);
              const styles = (_b = props.getStyles) === null || _b === void 0 ? void 0 : _b.call(props, placement);
              const noticeNodesForPlacement = noticesForPlacement.map((_ref2, index2) => {
                let {
                  notice: notice2,
                  holderCallback
                } = _ref2;
                const updateMark = index2 === notices.value.length - 1 ? notice2.updateMark : void 0;
                const {
                  key: key2,
                  userPassKey
                } = notice2;
                const {
                  content
                } = notice2;
                const noticeProps = _extends(_extends(_extends({
                  prefixCls,
                  closeIcon: typeof closeIcon === "function" ? closeIcon({
                    prefixCls
                  }) : closeIcon
                }, notice2), notice2.props), {
                  key: key2,
                  noticeKey: userPassKey || key2,
                  updateMark,
                  onClose: (noticeKey) => {
                    var _a3;
                    remove(noticeKey);
                    (_a3 = notice2.onClose) === null || _a3 === void 0 ? void 0 : _a3.call(notice2);
                  },
                  onClick: notice2.onClick
                });
                if (holderCallback) {
                  return vue.createVNode("div", {
                    "key": key2,
                    "class": `${prefixCls}-hook-holder`,
                    "ref": (div) => {
                      if (typeof key2 === "undefined") {
                        return;
                      }
                      if (div) {
                        hookRefs.set(key2, div);
                        holderCallback(div, noticeProps);
                      } else {
                        hookRefs.delete(key2);
                      }
                    }
                  }, null);
                }
                return vue.createVNode(Notice, _objectSpread2$1(_objectSpread2$1({}, noticeProps), {}, {
                  "class": classNames(noticeProps.class, props.hashId)
                }), {
                  default: () => [typeof content === "function" ? content({
                    prefixCls
                  }) : content]
                });
              });
              const className = {
                [prefixCls]: 1,
                [`${prefixCls}-${placement}`]: 1,
                [attrs.class]: !!attrs.class,
                [props.hashId]: true,
                [classes]: !!classes
              };
              function onAfterLeave() {
                var _a3;
                if (noticesForPlacement.length > 0) {
                  return;
                }
                Reflect.deleteProperty(placements2.value, placement);
                (_a3 = props.onAllRemoved) === null || _a3 === void 0 ? void 0 : _a3.call(props);
              }
              return vue.createVNode("div", {
                "key": placement,
                "class": className,
                "style": attrs.style || styles || {
                  top: "65px",
                  left: "50%"
                }
              }, [vue.createVNode(vue.TransitionGroup, _objectSpread2$1(_objectSpread2$1({
                "tag": "div"
              }, transitionProps.value), {}, {
                "onAfterLeave": onAfterLeave
              }), {
                default: () => [noticeNodesForPlacement]
              })]);
            });
            return vue.createVNode(Portal$1, {
              "getContainer": props.getContainer
            }, {
              default: () => [noticeNodes]
            });
          };
        }
      });
      const HookNotification = Notification;
      var __rest$6 = globalThis && globalThis.__rest || function(s2, e2) {
        var t2 = {};
        for (var p in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
            t2[p] = s2[p];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
            if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
              t2[p[i2]] = s2[p[i2]];
          }
        return t2;
      };
      const defaultGetContainer$1 = () => document.body;
      let uniqueKey = 0;
      function mergeConfig() {
        const clone = {};
        for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
          objList[_key] = arguments[_key];
        }
        objList.forEach((obj) => {
          if (obj) {
            Object.keys(obj).forEach((key2) => {
              const val = obj[key2];
              if (val !== void 0) {
                clone[key2] = val;
              }
            });
          }
        });
        return clone;
      }
      function useNotification$1() {
        let rootConfig = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const {
          getContainer: getContainer2 = defaultGetContainer$1,
          motion,
          prefixCls,
          maxCount: maxCount2,
          getClassName,
          getStyles,
          onAllRemoved
        } = rootConfig, shareConfig = __rest$6(rootConfig, ["getContainer", "motion", "prefixCls", "maxCount", "getClassName", "getStyles", "onAllRemoved"]);
        const notices = vue.shallowRef([]);
        const notificationsRef = vue.shallowRef();
        const add = (originNotice, holderCallback) => {
          const key2 = originNotice.key || getUuid();
          const notice2 = _extends(_extends({}, originNotice), {
            key: key2
          });
          const noticeIndex = notices.value.map((v2) => v2.notice.key).indexOf(key2);
          const updatedNotices = notices.value.concat();
          if (noticeIndex !== -1) {
            updatedNotices.splice(noticeIndex, 1, {
              notice: notice2,
              holderCallback
            });
          } else {
            if (maxCount2 && notices.value.length >= maxCount2) {
              notice2.key = updatedNotices[0].notice.key;
              notice2.updateMark = getUuid();
              notice2.userPassKey = key2;
              updatedNotices.shift();
            }
            updatedNotices.push({
              notice: notice2,
              holderCallback
            });
          }
          notices.value = updatedNotices;
        };
        const removeNotice = (removeKey) => {
          notices.value = notices.value.filter((_ref) => {
            let {
              notice: {
                key: key2,
                userPassKey
              }
            } = _ref;
            const mergedKey = userPassKey || key2;
            return mergedKey !== removeKey;
          });
        };
        const destroy = () => {
          notices.value = [];
        };
        const contextHolder = vue.computed(() => vue.createVNode(HookNotification, {
          "ref": notificationsRef,
          "prefixCls": prefixCls,
          "maxCount": maxCount2,
          "notices": notices.value,
          "remove": removeNotice,
          "getClassName": getClassName,
          "getStyles": getStyles,
          "animation": motion,
          "hashId": rootConfig.hashId,
          "onAllRemoved": onAllRemoved,
          "getContainer": getContainer2
        }, null));
        const taskQueue = vue.shallowRef([]);
        const api2 = {
          open: (config) => {
            const mergedConfig = mergeConfig(shareConfig, config);
            if (mergedConfig.key === null || mergedConfig.key === void 0) {
              mergedConfig.key = `vc-notification-${uniqueKey}`;
              uniqueKey += 1;
            }
            taskQueue.value = [...taskQueue.value, {
              type: "open",
              config: mergedConfig
            }];
          },
          close: (key2) => {
            taskQueue.value = [...taskQueue.value, {
              type: "close",
              key: key2
            }];
          },
          destroy: () => {
            taskQueue.value = [...taskQueue.value, {
              type: "destroy"
            }];
          }
        };
        vue.watch(taskQueue, () => {
          if (taskQueue.value.length) {
            taskQueue.value.forEach((task) => {
              switch (task.type) {
                case "open":
                  add(task.config);
                  break;
                case "close":
                  removeNotice(task.key);
                  break;
                case "destroy":
                  destroy();
                  break;
              }
            });
            taskQueue.value = [];
          }
        });
        return [api2, () => contextHolder.value];
      }
      const genMessageStyle = (token2) => {
        const {
          componentCls,
          iconCls,
          boxShadowSecondary,
          colorBgElevated,
          colorSuccess,
          colorError,
          colorWarning,
          colorInfo,
          fontSizeLG,
          motionEaseInOutCirc,
          motionDurationSlow,
          marginXS,
          paddingXS,
          borderRadiusLG,
          zIndexPopup,
          // Custom token
          messageNoticeContentPadding
        } = token2;
        const messageMoveIn = new Keyframes("MessageMoveIn", {
          "0%": {
            padding: 0,
            transform: "translateY(-100%)",
            opacity: 0
          },
          "100%": {
            padding: paddingXS,
            transform: "translateY(0)",
            opacity: 1
          }
        });
        const messageMoveOut = new Keyframes("MessageMoveOut", {
          "0%": {
            maxHeight: token2.height,
            padding: paddingXS,
            opacity: 1
          },
          "100%": {
            maxHeight: 0,
            padding: 0,
            opacity: 0
          }
        });
        return [
          // ============================ Holder ============================
          {
            [componentCls]: _extends(_extends({}, resetComponent(token2)), {
              position: "fixed",
              top: marginXS,
              width: "100%",
              pointerEvents: "none",
              zIndex: zIndexPopup,
              [`${componentCls}-move-up`]: {
                animationFillMode: "forwards"
              },
              [`
        ${componentCls}-move-up-appear,
        ${componentCls}-move-up-enter
      `]: {
                animationName: messageMoveIn,
                animationDuration: motionDurationSlow,
                animationPlayState: "paused",
                animationTimingFunction: motionEaseInOutCirc
              },
              [`
        ${componentCls}-move-up-appear${componentCls}-move-up-appear-active,
        ${componentCls}-move-up-enter${componentCls}-move-up-enter-active
      `]: {
                animationPlayState: "running"
              },
              [`${componentCls}-move-up-leave`]: {
                animationName: messageMoveOut,
                animationDuration: motionDurationSlow,
                animationPlayState: "paused",
                animationTimingFunction: motionEaseInOutCirc
              },
              [`${componentCls}-move-up-leave${componentCls}-move-up-leave-active`]: {
                animationPlayState: "running"
              },
              "&-rtl": {
                direction: "rtl",
                span: {
                  direction: "rtl"
                }
              }
            })
          },
          // ============================ Notice ============================
          {
            [`${componentCls}-notice`]: {
              padding: paddingXS,
              textAlign: "center",
              [iconCls]: {
                verticalAlign: "text-bottom",
                marginInlineEnd: marginXS,
                fontSize: fontSizeLG
              },
              [`${componentCls}-notice-content`]: {
                display: "inline-block",
                padding: messageNoticeContentPadding,
                background: colorBgElevated,
                borderRadius: borderRadiusLG,
                boxShadow: boxShadowSecondary,
                pointerEvents: "all"
              },
              [`${componentCls}-success ${iconCls}`]: {
                color: colorSuccess
              },
              [`${componentCls}-error ${iconCls}`]: {
                color: colorError
              },
              [`${componentCls}-warning ${iconCls}`]: {
                color: colorWarning
              },
              [`
        ${componentCls}-info ${iconCls},
        ${componentCls}-loading ${iconCls}`]: {
                color: colorInfo
              }
            }
          },
          // ============================= Pure =============================
          {
            [`${componentCls}-notice-pure-panel`]: {
              padding: 0,
              textAlign: "start"
            }
          }
        ];
      };
      const useStyle$5 = genComponentStyleHook("Message", (token2) => {
        const combinedToken = merge(token2, {
          messageNoticeContentPadding: `${(token2.controlHeightLG - token2.fontSize * token2.lineHeight) / 2}px ${token2.paddingSM}px`
        });
        return [genMessageStyle(combinedToken)];
      }, (token2) => ({
        height: 150,
        zIndexPopup: token2.zIndexPopupBase + 10
      }));
      var ArrowDownOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" } }] }, "name": "arrow-down", "theme": "outlined" };
      const ArrowDownOutlinedSvg = ArrowDownOutlined$2;
      function _objectSpread$9(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$9(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$9(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var ArrowDownOutlined = function ArrowDownOutlined2(props, context2) {
        var p = _objectSpread$9({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$9({}, p, {
          "icon": ArrowDownOutlinedSvg
        }), null);
      };
      ArrowDownOutlined.displayName = "ArrowDownOutlined";
      ArrowDownOutlined.inheritAttrs = false;
      const ArrowDownOutlined$1 = ArrowDownOutlined;
      var DownloadOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, "name": "download", "theme": "outlined" };
      const DownloadOutlinedSvg = DownloadOutlined$2;
      function _objectSpread$8(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$8(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$8(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var DownloadOutlined = function DownloadOutlined2(props, context2) {
        var p = _objectSpread$8({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$8({}, p, {
          "icon": DownloadOutlinedSvg
        }), null);
      };
      DownloadOutlined.displayName = "DownloadOutlined";
      DownloadOutlined.inheritAttrs = false;
      const DownloadOutlined$1 = DownloadOutlined;
      var EyeOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, "name": "eye", "theme": "outlined" };
      const EyeOutlinedSvg = EyeOutlined$2;
      function _objectSpread$7(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$7(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$7(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var EyeOutlined = function EyeOutlined2(props, context2) {
        var p = _objectSpread$7({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$7({}, p, {
          "icon": EyeOutlinedSvg
        }), null);
      };
      EyeOutlined.displayName = "EyeOutlined";
      EyeOutlined.inheritAttrs = false;
      const EyeOutlined$1 = EyeOutlined;
      var RotateLeftOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "defs", "attrs": {}, "children": [{ "tag": "style", "attrs": {} }] }, { "tag": "path", "attrs": { "d": "M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z" } }, { "tag": "path", "attrs": { "d": "M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z" } }] }, "name": "rotate-left", "theme": "outlined" };
      const RotateLeftOutlinedSvg = RotateLeftOutlined$2;
      function _objectSpread$6(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$6(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$6(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var RotateLeftOutlined = function RotateLeftOutlined2(props, context2) {
        var p = _objectSpread$6({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$6({}, p, {
          "icon": RotateLeftOutlinedSvg
        }), null);
      };
      RotateLeftOutlined.displayName = "RotateLeftOutlined";
      RotateLeftOutlined.inheritAttrs = false;
      const RotateLeftOutlined$1 = RotateLeftOutlined;
      var RotateRightOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "defs", "attrs": {}, "children": [{ "tag": "style", "attrs": {} }] }, { "tag": "path", "attrs": { "d": "M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z" } }, { "tag": "path", "attrs": { "d": "M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z" } }] }, "name": "rotate-right", "theme": "outlined" };
      const RotateRightOutlinedSvg = RotateRightOutlined$2;
      function _objectSpread$5(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$5(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$5(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var RotateRightOutlined = function RotateRightOutlined2(props, context2) {
        var p = _objectSpread$5({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$5({}, p, {
          "icon": RotateRightOutlinedSvg
        }), null);
      };
      RotateRightOutlined.displayName = "RotateRightOutlined";
      RotateRightOutlined.inheritAttrs = false;
      const RotateRightOutlined$1 = RotateRightOutlined;
      var SwapOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, "name": "swap", "theme": "outlined" };
      const SwapOutlinedSvg = SwapOutlined$2;
      function _objectSpread$4(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$4(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$4(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var SwapOutlined = function SwapOutlined2(props, context2) {
        var p = _objectSpread$4({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$4({}, p, {
          "icon": SwapOutlinedSvg
        }), null);
      };
      SwapOutlined.displayName = "SwapOutlined";
      SwapOutlined.inheritAttrs = false;
      const SwapOutlined$1 = SwapOutlined;
      var SyncOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z" } }] }, "name": "sync", "theme": "outlined" };
      const SyncOutlinedSvg = SyncOutlined$2;
      function _objectSpread$3(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$3(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$3(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var SyncOutlined = function SyncOutlined2(props, context2) {
        var p = _objectSpread$3({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$3({}, p, {
          "icon": SyncOutlinedSvg
        }), null);
      };
      SyncOutlined.displayName = "SyncOutlined";
      SyncOutlined.inheritAttrs = false;
      const SyncOutlined$1 = SyncOutlined;
      var ZoomInOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, "name": "zoom-in", "theme": "outlined" };
      const ZoomInOutlinedSvg = ZoomInOutlined$2;
      function _objectSpread$2(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$2(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$2(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var ZoomInOutlined = function ZoomInOutlined2(props, context2) {
        var p = _objectSpread$2({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$2({}, p, {
          "icon": ZoomInOutlinedSvg
        }), null);
      };
      ZoomInOutlined.displayName = "ZoomInOutlined";
      ZoomInOutlined.inheritAttrs = false;
      const ZoomInOutlined$1 = ZoomInOutlined;
      var ZoomOutOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" } }] }, "name": "zoom-out", "theme": "outlined" };
      const ZoomOutOutlinedSvg = ZoomOutOutlined$2;
      function _objectSpread$1(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty$1(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty$1(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      var ZoomOutOutlined = function ZoomOutOutlined2(props, context2) {
        var p = _objectSpread$1({}, props, context2.attrs);
        return vue.createVNode(AntdIcon, _objectSpread$1({}, p, {
          "icon": ZoomOutOutlinedSvg
        }), null);
      };
      ZoomOutOutlined.displayName = "ZoomOutOutlined";
      ZoomOutOutlined.inheritAttrs = false;
      const ZoomOutOutlined$1 = ZoomOutOutlined;
      var _excluded = ["class", "component", "viewBox", "spin", "rotate", "tabindex", "onClick"];
      function _objectSpread(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2] != null ? Object(arguments[i2]) : {};
          var ownKeys2 = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }
          ownKeys2.forEach(function(key2) {
            _defineProperty(target, key2, source[key2]);
          });
        }
        return target;
      }
      function _defineProperty(obj, key2, value) {
        if (key2 in obj) {
          Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key2] = value;
        }
        return obj;
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null)
          return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key2, i2;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
            key2 = sourceSymbolKeys[i2];
            if (excluded.indexOf(key2) >= 0)
              continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key2))
              continue;
            target[key2] = source[key2];
          }
        }
        return target;
      }
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null)
          return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key2, i2;
        for (i2 = 0; i2 < sourceKeys.length; i2++) {
          key2 = sourceKeys[i2];
          if (excluded.indexOf(key2) >= 0)
            continue;
          target[key2] = source[key2];
        }
        return target;
      }
      var Icon = function Icon2(props, context2) {
        var attrs = context2.attrs, slots = context2.slots;
        var _props$attrs = _objectSpread({}, props, attrs), cls = _props$attrs["class"], Component = _props$attrs.component, viewBox = _props$attrs.viewBox, spin = _props$attrs.spin, rotate = _props$attrs.rotate, tabindex = _props$attrs.tabindex, onClick = _props$attrs.onClick, restProps = _objectWithoutProperties(_props$attrs, _excluded);
        var children = slots["default"] && slots["default"]();
        var hasChildren = children && children.length;
        var slotsComponent = slots.component;
        useInsertStyles();
        var classString = _defineProperty({
          anticon: true
        }, cls, cls);
        var svgClassString = {
          "anticon-spin": spin === "" || !!spin
        };
        var svgStyle = rotate ? {
          msTransform: "rotate(".concat(rotate, "deg)"),
          transform: "rotate(".concat(rotate, "deg)")
        } : void 0;
        var innerSvgProps = _objectSpread({}, svgBaseProps, {
          viewBox,
          "class": svgClassString,
          style: svgStyle
        });
        if (!viewBox) {
          delete innerSvgProps.viewBox;
        }
        var renderInnerNode = function renderInnerNode2() {
          if (Component) {
            return vue.createVNode(Component, innerSvgProps, {
              "default": function _default() {
                return [children];
              }
            });
          }
          if (slotsComponent) {
            return slotsComponent(innerSvgProps);
          }
          if (hasChildren) {
            warning(Boolean(viewBox) || children.length === 1 && children[0] && children[0].type === "use");
            return vue.createVNode("svg", _objectSpread({}, innerSvgProps, {
              "viewBox": viewBox
            }), [children]);
          }
          return null;
        };
        var iconTabIndex = tabindex;
        if (iconTabIndex === void 0 && onClick) {
          iconTabIndex = -1;
          restProps.tabindex = iconTabIndex;
        }
        return vue.createVNode("span", _objectSpread({
          "role": "img"
        }, restProps, {
          "onClick": onClick,
          "class": classString
        }), [renderInnerNode()]);
      };
      Icon.props = {
        spin: Boolean,
        rotate: Number,
        viewBox: String,
        ariaLabel: String
      };
      Icon.inheritAttrs = false;
      Icon.displayName = "Icon";
      const CloseOutlined = Icon;
      const TypeIcon = {
        info: vue.createVNode(InfoCircleFilled$1, null, null),
        success: vue.createVNode(CheckCircleFilled$1, null, null),
        error: vue.createVNode(CloseCircleFilled$1, null, null),
        warning: vue.createVNode(ExclamationCircleFilled$1, null, null),
        loading: vue.createVNode(LoadingOutlined$1, null, null)
      };
      const PureContent$1 = vue.defineComponent({
        name: "PureContent",
        inheritAttrs: false,
        props: ["prefixCls", "type", "icon"],
        setup(props, _ref) {
          let {
            slots
          } = _ref;
          return () => {
            var _a;
            return vue.createVNode("div", {
              "class": classNames(`${props.prefixCls}-custom-content`, `${props.prefixCls}-${props.type}`)
            }, [props.icon || TypeIcon[props.type], vue.createVNode("span", null, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])]);
          };
        }
      });
      vue.defineComponent({
        name: "PurePanel",
        inheritAttrs: false,
        props: ["prefixCls", "class", "type", "icon", "content"],
        setup(props, _ref2) {
          let {
            slots,
            attrs
          } = _ref2;
          var _a;
          const {
            getPrefixCls
          } = useConfigContextInject();
          const prefixCls = vue.computed(() => props.prefixCls || getPrefixCls("message"));
          const [, hashId] = useStyle$5(prefixCls);
          return vue.createVNode(Notice, _objectSpread2$1(_objectSpread2$1({}, attrs), {}, {
            "prefixCls": prefixCls.value,
            "class": classNames(hashId.value, `${prefixCls.value}-notice-pure-panel`),
            "noticeKey": "pure",
            "duration": null
          }), {
            default: () => [vue.createVNode(PureContent$1, {
              "prefixCls": prefixCls.value,
              "type": props.type,
              "icon": props.icon
            }, {
              default: () => [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]
            })]
          });
        }
      });
      var __rest$5 = globalThis && globalThis.__rest || function(s2, e2) {
        var t2 = {};
        for (var p in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
            t2[p] = s2[p];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
            if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
              t2[p[i2]] = s2[p[i2]];
          }
        return t2;
      };
      const DEFAULT_OFFSET$1 = 8;
      const DEFAULT_DURATION$1 = 3;
      const Holder$1 = vue.defineComponent({
        name: "Holder",
        inheritAttrs: false,
        props: ["top", "prefixCls", "getContainer", "maxCount", "duration", "rtl", "transitionName", "onAllRemoved"],
        setup(props, _ref) {
          let {
            expose
          } = _ref;
          var _a;
          const {
            getPrefixCls,
            getPopupContainer
          } = useConfigInject("message", props);
          const prefixCls = vue.computed(() => getPrefixCls("message", props.prefixCls));
          const [, hashId] = useStyle$5(prefixCls);
          const getStyles = () => {
            var _a2;
            const top = (_a2 = props.top) !== null && _a2 !== void 0 ? _a2 : DEFAULT_OFFSET$1;
            return {
              left: "50%",
              transform: "translateX(-50%)",
              top: typeof top === "number" ? `${top}px` : top
            };
          };
          const getClassName = () => classNames(hashId.value, props.rtl ? `${prefixCls.value}-rtl` : "");
          const getNotificationMotion = () => {
            var _a2;
            return getMotion$1({
              prefixCls: prefixCls.value,
              animation: (_a2 = props.animation) !== null && _a2 !== void 0 ? _a2 : `move-up`,
              transitionName: props.transitionName
            });
          };
          const mergedCloseIcon = vue.createVNode("span", {
            "class": `${prefixCls.value}-close-x`
          }, [vue.createVNode(CloseOutlined, {
            "class": `${prefixCls.value}-close-icon`
          }, null)]);
          const [api2, holder] = useNotification$1({
            //@ts-ignore
            getStyles,
            prefixCls: prefixCls.value,
            getClassName,
            motion: getNotificationMotion,
            closable: false,
            closeIcon: mergedCloseIcon,
            duration: (_a = props.duration) !== null && _a !== void 0 ? _a : DEFAULT_DURATION$1,
            getContainer: () => {
              var _a2, _b;
              return ((_a2 = props.staticGetContainer) === null || _a2 === void 0 ? void 0 : _a2.call(props)) || ((_b = getPopupContainer.value) === null || _b === void 0 ? void 0 : _b.call(getPopupContainer)) || document.body;
            },
            maxCount: props.maxCount,
            onAllRemoved: props.onAllRemoved
          });
          expose(_extends(_extends({}, api2), {
            prefixCls,
            hashId
          }));
          return holder;
        }
      });
      let keyIndex = 0;
      function useInternalMessage(messageConfig) {
        const holderRef = vue.shallowRef(null);
        const holderKey = Symbol("messageHolderKey");
        const close = (key2) => {
          var _a;
          (_a = holderRef.value) === null || _a === void 0 ? void 0 : _a.close(key2);
        };
        const open = (config) => {
          if (!holderRef.value) {
            const fakeResult = () => {
            };
            fakeResult.then = () => {
            };
            return fakeResult;
          }
          const {
            open: originOpen,
            prefixCls,
            hashId
          } = holderRef.value;
          const noticePrefixCls = `${prefixCls}-notice`;
          const {
            content,
            icon,
            type,
            key: key2,
            class: className,
            onClose
          } = config, restConfig = __rest$5(config, ["content", "icon", "type", "key", "class", "onClose"]);
          let mergedKey = key2;
          if (mergedKey === void 0 || mergedKey === null) {
            keyIndex += 1;
            mergedKey = `antd-message-${keyIndex}`;
          }
          return wrapPromiseFn((resolve) => {
            originOpen(_extends(_extends({}, restConfig), {
              key: mergedKey,
              content: () => vue.createVNode(PureContent$1, {
                "prefixCls": prefixCls,
                "type": type,
                "icon": typeof icon === "function" ? icon() : icon
              }, {
                default: () => [typeof content === "function" ? content() : content]
              }),
              placement: "top",
              // @ts-ignore
              class: classNames(type && `${noticePrefixCls}-${type}`, hashId, className),
              onClose: () => {
                onClose === null || onClose === void 0 ? void 0 : onClose();
                resolve();
              }
            }));
            return () => {
              close(mergedKey);
            };
          });
        };
        const destroy = (key2) => {
          var _a;
          if (key2 !== void 0) {
            close(key2);
          } else {
            (_a = holderRef.value) === null || _a === void 0 ? void 0 : _a.destroy();
          }
        };
        const wrapAPI = {
          open,
          destroy
        };
        const keys2 = ["info", "success", "warning", "error", "loading"];
        keys2.forEach((type) => {
          const typeOpen = (jointContent, duration, onClose) => {
            let config;
            if (jointContent && typeof jointContent === "object" && "content" in jointContent) {
              config = jointContent;
            } else {
              config = {
                content: jointContent
              };
            }
            let mergedDuration;
            let mergedOnClose;
            if (typeof duration === "function") {
              mergedOnClose = duration;
            } else {
              mergedDuration = duration;
              mergedOnClose = onClose;
            }
            const mergedConfig = _extends(_extends({
              onClose: mergedOnClose,
              duration: mergedDuration
            }, config), {
              type
            });
            return open(mergedConfig);
          };
          wrapAPI[type] = typeOpen;
        });
        return [wrapAPI, () => vue.createVNode(Holder$1, _objectSpread2$1(_objectSpread2$1({
          "key": holderKey
        }, messageConfig), {}, {
          "ref": holderRef
        }), null)];
      }
      function useMessage(messageConfig) {
        return useInternalMessage(messageConfig);
      }
      let defaultDuration$1 = 3;
      let defaultTop$1;
      let messageInstance;
      let key = 1;
      let localPrefixCls = "";
      let transitionName = "move-up";
      let hasTransitionName = false;
      let getContainer = () => document.body;
      let maxCount$1;
      let rtl$1 = false;
      function getKeyThenIncreaseKey() {
        return key++;
      }
      function setMessageConfig(options) {
        if (options.top !== void 0) {
          defaultTop$1 = options.top;
          messageInstance = null;
        }
        if (options.duration !== void 0) {
          defaultDuration$1 = options.duration;
        }
        if (options.prefixCls !== void 0) {
          localPrefixCls = options.prefixCls;
        }
        if (options.getContainer !== void 0) {
          getContainer = options.getContainer;
          messageInstance = null;
        }
        if (options.transitionName !== void 0) {
          transitionName = options.transitionName;
          messageInstance = null;
          hasTransitionName = true;
        }
        if (options.maxCount !== void 0) {
          maxCount$1 = options.maxCount;
          messageInstance = null;
        }
        if (options.rtl !== void 0) {
          rtl$1 = options.rtl;
        }
      }
      function getMessageInstance(args, callback) {
        if (messageInstance) {
          callback(messageInstance);
          return;
        }
        Notification$2.newInstance({
          appContext: args.appContext,
          prefixCls: args.prefixCls || localPrefixCls,
          rootPrefixCls: args.rootPrefixCls,
          transitionName,
          hasTransitionName,
          style: {
            top: defaultTop$1
          },
          getContainer: getContainer || args.getPopupContainer,
          maxCount: maxCount$1,
          name: "message",
          useStyle: useStyle$5
        }, (instance) => {
          if (messageInstance) {
            callback(messageInstance);
            return;
          }
          messageInstance = instance;
          callback(instance);
        });
      }
      const typeToIcon$2 = {
        info: InfoCircleFilled$1,
        success: CheckCircleFilled$1,
        error: CloseCircleFilled$1,
        warning: ExclamationCircleFilled$1,
        loading: LoadingOutlined$1
      };
      const typeList = Object.keys(typeToIcon$2);
      function notice$1(args) {
        const duration = args.duration !== void 0 ? args.duration : defaultDuration$1;
        const target = args.key || getKeyThenIncreaseKey();
        const closePromise = new Promise((resolve) => {
          const callback = () => {
            if (typeof args.onClose === "function") {
              args.onClose();
            }
            return resolve(true);
          };
          getMessageInstance(args, (instance) => {
            instance.notice({
              key: target,
              duration,
              style: args.style || {},
              class: args.class,
              content: (_ref) => {
                let {
                  prefixCls
                } = _ref;
                const Icon2 = typeToIcon$2[args.type];
                const iconNode = Icon2 ? vue.createVNode(Icon2, null, null) : "";
                const messageClass = classNames(`${prefixCls}-custom-content`, {
                  [`${prefixCls}-${args.type}`]: args.type,
                  [`${prefixCls}-rtl`]: rtl$1 === true
                });
                return vue.createVNode("div", {
                  "class": messageClass
                }, [typeof args.icon === "function" ? args.icon() : args.icon || iconNode, vue.createVNode("span", null, [typeof args.content === "function" ? args.content() : args.content])]);
              },
              onClose: callback,
              onClick: args.onClick
            });
          });
        });
        const result = () => {
          if (messageInstance) {
            messageInstance.removeNotice(target);
          }
        };
        result.then = (filled, rejected) => closePromise.then(filled, rejected);
        result.promise = closePromise;
        return result;
      }
      function isArgsProps(content) {
        return Object.prototype.toString.call(content) === "[object Object]" && !!content.content;
      }
      const api$1 = {
        open: notice$1,
        config: setMessageConfig,
        destroy(messageKey) {
          if (messageInstance) {
            if (messageKey) {
              const {
                removeNotice
              } = messageInstance;
              removeNotice(messageKey);
            } else {
              const {
                destroy
              } = messageInstance;
              destroy();
              messageInstance = null;
            }
          }
        }
      };
      function attachTypeApi(originalApi, type) {
        originalApi[type] = (content, duration, onClose) => {
          if (isArgsProps(content)) {
            return originalApi.open(_extends(_extends({}, content), {
              type
            }));
          }
          if (typeof duration === "function") {
            onClose = duration;
            duration = void 0;
          }
          return originalApi.open({
            content,
            duration,
            type,
            onClose
          });
        };
      }
      typeList.forEach((type) => attachTypeApi(api$1, type));
      api$1.warn = api$1.warning;
      api$1.useMessage = useMessage;
      const message = api$1;
      const genNotificationPlacementStyle = (token2) => {
        const {
          componentCls,
          width,
          notificationMarginEdge
        } = token2;
        const notificationTopFadeIn = new Keyframes("antNotificationTopFadeIn", {
          "0%": {
            marginTop: "-100%",
            opacity: 0
          },
          "100%": {
            marginTop: 0,
            opacity: 1
          }
        });
        const notificationBottomFadeIn = new Keyframes("antNotificationBottomFadeIn", {
          "0%": {
            marginBottom: "-100%",
            opacity: 0
          },
          "100%": {
            marginBottom: 0,
            opacity: 1
          }
        });
        const notificationLeftFadeIn = new Keyframes("antNotificationLeftFadeIn", {
          "0%": {
            right: {
              _skip_check_: true,
              value: width
            },
            opacity: 0
          },
          "100%": {
            right: {
              _skip_check_: true,
              value: 0
            },
            opacity: 1
          }
        });
        return {
          [`&${componentCls}-top, &${componentCls}-bottom`]: {
            marginInline: 0
          },
          [`&${componentCls}-top`]: {
            [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
              animationName: notificationTopFadeIn
            }
          },
          [`&${componentCls}-bottom`]: {
            [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
              animationName: notificationBottomFadeIn
            }
          },
          [`&${componentCls}-topLeft, &${componentCls}-bottomLeft`]: {
            marginInlineEnd: 0,
            marginInlineStart: notificationMarginEdge,
            [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
              animationName: notificationLeftFadeIn
            }
          }
        };
      };
      const genNotificationPlacementStyle$1 = genNotificationPlacementStyle;
      const genNotificationStyle = (token2) => {
        const {
          iconCls,
          componentCls,
          // .ant-notification
          boxShadowSecondary,
          fontSizeLG,
          notificationMarginBottom,
          borderRadiusLG,
          colorSuccess,
          colorInfo,
          colorWarning,
          colorError,
          colorTextHeading,
          notificationBg,
          notificationPadding,
          notificationMarginEdge,
          motionDurationMid,
          motionEaseInOut,
          fontSize,
          lineHeight,
          width,
          notificationIconSize
        } = token2;
        const noticeCls = `${componentCls}-notice`;
        const notificationFadeIn = new Keyframes("antNotificationFadeIn", {
          "0%": {
            left: {
              _skip_check_: true,
              value: width
            },
            opacity: 0
          },
          "100%": {
            left: {
              _skip_check_: true,
              value: 0
            },
            opacity: 1
          }
        });
        const notificationFadeOut = new Keyframes("antNotificationFadeOut", {
          "0%": {
            maxHeight: token2.animationMaxHeight,
            marginBottom: notificationMarginBottom,
            opacity: 1
          },
          "100%": {
            maxHeight: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0,
            opacity: 0
          }
        });
        return [
          // ============================ Holder ============================
          {
            [componentCls]: _extends(_extends(_extends(_extends({}, resetComponent(token2)), {
              position: "fixed",
              zIndex: token2.zIndexPopup,
              marginInlineEnd: notificationMarginEdge,
              [`${componentCls}-hook-holder`]: {
                position: "relative"
              },
              [`&${componentCls}-top, &${componentCls}-bottom`]: {
                [`${componentCls}-notice`]: {
                  marginInline: "auto auto"
                }
              },
              [`&${componentCls}-topLeft, &${componentCls}-bottomLeft`]: {
                [`${componentCls}-notice`]: {
                  marginInlineEnd: "auto",
                  marginInlineStart: 0
                }
              },
              //  animation
              [`${componentCls}-fade-enter, ${componentCls}-fade-appear`]: {
                animationDuration: token2.motionDurationMid,
                animationTimingFunction: motionEaseInOut,
                animationFillMode: "both",
                opacity: 0,
                animationPlayState: "paused"
              },
              [`${componentCls}-fade-leave`]: {
                animationTimingFunction: motionEaseInOut,
                animationFillMode: "both",
                animationDuration: motionDurationMid,
                animationPlayState: "paused"
              },
              [`${componentCls}-fade-enter${componentCls}-fade-enter-active, ${componentCls}-fade-appear${componentCls}-fade-appear-active`]: {
                animationName: notificationFadeIn,
                animationPlayState: "running"
              },
              [`${componentCls}-fade-leave${componentCls}-fade-leave-active`]: {
                animationName: notificationFadeOut,
                animationPlayState: "running"
              }
            }), genNotificationPlacementStyle$1(token2)), {
              // RTL
              "&-rtl": {
                direction: "rtl",
                [`${componentCls}-notice-btn`]: {
                  float: "left"
                }
              }
            })
          },
          // ============================ Notice ============================
          {
            [noticeCls]: {
              position: "relative",
              width,
              maxWidth: `calc(100vw - ${notificationMarginEdge * 2}px)`,
              marginBottom: notificationMarginBottom,
              marginInlineStart: "auto",
              padding: notificationPadding,
              overflow: "hidden",
              lineHeight,
              wordWrap: "break-word",
              background: notificationBg,
              borderRadius: borderRadiusLG,
              boxShadow: boxShadowSecondary,
              [`${componentCls}-close-icon`]: {
                fontSize,
                cursor: "pointer"
              },
              [`${noticeCls}-message`]: {
                marginBottom: token2.marginXS,
                color: colorTextHeading,
                fontSize: fontSizeLG,
                lineHeight: token2.lineHeightLG
              },
              [`${noticeCls}-description`]: {
                fontSize
              },
              [`&${noticeCls}-closable ${noticeCls}-message`]: {
                paddingInlineEnd: token2.paddingLG
              },
              [`${noticeCls}-with-icon ${noticeCls}-message`]: {
                marginBottom: token2.marginXS,
                marginInlineStart: token2.marginSM + notificationIconSize,
                fontSize: fontSizeLG
              },
              [`${noticeCls}-with-icon ${noticeCls}-description`]: {
                marginInlineStart: token2.marginSM + notificationIconSize,
                fontSize
              },
              // Icon & color style in different selector level
              // https://github.com/ant-design/ant-design/issues/16503
              // https://github.com/ant-design/ant-design/issues/15512
              [`${noticeCls}-icon`]: {
                position: "absolute",
                fontSize: notificationIconSize,
                lineHeight: 0,
                // icon-font
                [`&-success${iconCls}`]: {
                  color: colorSuccess
                },
                [`&-info${iconCls}`]: {
                  color: colorInfo
                },
                [`&-warning${iconCls}`]: {
                  color: colorWarning
                },
                [`&-error${iconCls}`]: {
                  color: colorError
                }
              },
              [`${noticeCls}-close`]: {
                position: "absolute",
                top: token2.notificationPaddingVertical,
                insetInlineEnd: token2.notificationPaddingHorizontal,
                color: token2.colorIcon,
                outline: "none",
                width: token2.notificationCloseButtonSize,
                height: token2.notificationCloseButtonSize,
                borderRadius: token2.borderRadiusSM,
                transition: `background-color ${token2.motionDurationMid}, color ${token2.motionDurationMid}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  color: token2.colorIconHover,
                  backgroundColor: token2.wireframe ? "transparent" : token2.colorFillContent
                }
              },
              [`${noticeCls}-btn`]: {
                float: "right",
                marginTop: token2.marginSM
              }
            }
          },
          // ============================= Pure =============================
          {
            [`${noticeCls}-pure-panel`]: {
              margin: 0
            }
          }
        ];
      };
      const useStyle$4 = genComponentStyleHook("Notification", (token2) => {
        const notificationPaddingVertical = token2.paddingMD;
        const notificationPaddingHorizontal = token2.paddingLG;
        const notificationToken = merge(token2, {
          // default.less variables
          notificationBg: token2.colorBgElevated,
          notificationPaddingVertical,
          notificationPaddingHorizontal,
          // index.less variables
          notificationPadding: `${token2.paddingMD}px ${token2.paddingContentHorizontalLG}px`,
          notificationMarginBottom: token2.margin,
          notificationMarginEdge: token2.marginLG,
          animationMaxHeight: 150,
          notificationIconSize: token2.fontSizeLG * token2.lineHeightLG,
          notificationCloseButtonSize: token2.controlHeightLG * 0.55
        });
        return [genNotificationStyle(notificationToken)];
      }, (token2) => ({
        zIndexPopup: token2.zIndexPopupBase + 50,
        width: 384
      }));
      function getCloseIcon(prefixCls, closeIcon) {
        return closeIcon || vue.createVNode("span", {
          "class": `${prefixCls}-close-x`
        }, [vue.createVNode(CloseOutlined$2, {
          "class": `${prefixCls}-close-icon`
        }, null)]);
      }
      ({
        info: vue.createVNode(InfoCircleFilled$1, null, null),
        success: vue.createVNode(CheckCircleFilled$1, null, null),
        error: vue.createVNode(CloseCircleFilled$1, null, null),
        warning: vue.createVNode(ExclamationCircleFilled$1, null, null),
        loading: vue.createVNode(LoadingOutlined$1, null, null)
      });
      const typeToIcon$1 = {
        success: CheckCircleFilled$1,
        info: InfoCircleFilled$1,
        error: CloseCircleFilled$1,
        warning: ExclamationCircleFilled$1
      };
      function PureContent(_ref) {
        let {
          prefixCls,
          icon,
          type,
          message: message2,
          description,
          btn
        } = _ref;
        let iconNode = null;
        if (icon) {
          iconNode = vue.createVNode("span", {
            "class": `${prefixCls}-icon`
          }, [renderHelper(icon)]);
        } else if (type) {
          const Icon2 = typeToIcon$1[type];
          iconNode = vue.createVNode(Icon2, {
            "class": `${prefixCls}-icon ${prefixCls}-icon-${type}`
          }, null);
        }
        return vue.createVNode("div", {
          "class": classNames({
            [`${prefixCls}-with-icon`]: iconNode
          }),
          "role": "alert"
        }, [iconNode, vue.createVNode("div", {
          "class": `${prefixCls}-message`
        }, [message2]), vue.createVNode("div", {
          "class": `${prefixCls}-description`
        }, [description]), btn && vue.createVNode("div", {
          "class": `${prefixCls}-btn`
        }, [btn])]);
      }
      vue.defineComponent({
        name: "PurePanel",
        inheritAttrs: false,
        props: ["prefixCls", "icon", "type", "message", "description", "btn", "closeIcon"],
        setup(props) {
          const {
            getPrefixCls
          } = useConfigInject("notification", props);
          const prefixCls = vue.computed(() => props.prefixCls || getPrefixCls("notification"));
          const noticePrefixCls = vue.computed(() => `${prefixCls.value}-notice`);
          const [, hashId] = useStyle$4(prefixCls);
          return () => {
            return vue.createVNode(Notice, _objectSpread2$1(_objectSpread2$1({}, props), {}, {
              "prefixCls": prefixCls.value,
              "class": classNames(hashId.value, `${noticePrefixCls.value}-pure-panel`),
              "noticeKey": "pure",
              "duration": null,
              "closable": props.closable,
              "closeIcon": getCloseIcon(prefixCls.value, props.closeIcon)
            }), {
              default: () => [vue.createVNode(PureContent, {
                "prefixCls": noticePrefixCls.value,
                "icon": props.icon,
                "type": props.type,
                "message": props.message,
                "description": props.description,
                "btn": props.btn
              }, null)]
            });
          };
        }
      });
      function getPlacementStyle(placement, top, bottom) {
        let style2;
        top = typeof top === "number" ? `${top}px` : top;
        bottom = typeof bottom === "number" ? `${bottom}px` : bottom;
        switch (placement) {
          case "top":
            style2 = {
              left: "50%",
              transform: "translateX(-50%)",
              right: "auto",
              top,
              bottom: "auto"
            };
            break;
          case "topLeft":
            style2 = {
              left: 0,
              top,
              bottom: "auto"
            };
            break;
          case "topRight":
            style2 = {
              right: 0,
              top,
              bottom: "auto"
            };
            break;
          case "bottom":
            style2 = {
              left: "50%",
              transform: "translateX(-50%)",
              right: "auto",
              top: "auto",
              bottom
            };
            break;
          case "bottomLeft":
            style2 = {
              left: 0,
              top: "auto",
              bottom
            };
            break;
          default:
            style2 = {
              right: 0,
              top: "auto",
              bottom
            };
            break;
        }
        return style2;
      }
      function getMotion(prefixCls) {
        return {
          name: `${prefixCls}-fade`
        };
      }
      var __rest$4 = globalThis && globalThis.__rest || function(s2, e2) {
        var t2 = {};
        for (var p in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
            t2[p] = s2[p];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
            if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
              t2[p[i2]] = s2[p[i2]];
          }
        return t2;
      };
      const DEFAULT_OFFSET = 24;
      const DEFAULT_DURATION = 4.5;
      const Holder = vue.defineComponent({
        name: "Holder",
        inheritAttrs: false,
        props: ["prefixCls", "class", "type", "icon", "content", "onAllRemoved"],
        setup(props, _ref) {
          let {
            expose
          } = _ref;
          const {
            getPrefixCls,
            getPopupContainer
          } = useConfigInject("notification", props);
          const prefixCls = vue.computed(() => props.prefixCls || getPrefixCls("notification"));
          const getStyles = (placement) => {
            var _a, _b;
            return getPlacementStyle(placement, (_a = props.top) !== null && _a !== void 0 ? _a : DEFAULT_OFFSET, (_b = props.bottom) !== null && _b !== void 0 ? _b : DEFAULT_OFFSET);
          };
          const [, hashId] = useStyle$4(prefixCls);
          const getClassName = () => classNames(hashId.value, {
            [`${prefixCls.value}-rtl`]: props.rtl
          });
          const getNotificationMotion = () => getMotion(prefixCls.value);
          const [api2, holder] = useNotification$1({
            prefixCls: prefixCls.value,
            getStyles,
            getClassName,
            motion: getNotificationMotion,
            closable: true,
            closeIcon: getCloseIcon(prefixCls.value),
            duration: DEFAULT_DURATION,
            getContainer: () => {
              var _a, _b;
              return ((_a = props.getPopupContainer) === null || _a === void 0 ? void 0 : _a.call(props)) || ((_b = getPopupContainer.value) === null || _b === void 0 ? void 0 : _b.call(getPopupContainer)) || document.body;
            },
            maxCount: props.maxCount,
            hashId: hashId.value,
            onAllRemoved: props.onAllRemoved
          });
          expose(_extends(_extends({}, api2), {
            prefixCls: prefixCls.value,
            hashId
          }));
          return holder;
        }
      });
      function useInternalNotification(notificationConfig) {
        const holderRef = vue.shallowRef(null);
        const holderKey = Symbol("notificationHolderKey");
        const open = (config) => {
          if (!holderRef.value) {
            return;
          }
          const {
            open: originOpen,
            prefixCls,
            hashId
          } = holderRef.value;
          const noticePrefixCls = `${prefixCls}-notice`;
          const {
            message: message2,
            description,
            icon,
            type,
            btn,
            class: className
          } = config, restConfig = __rest$4(config, ["message", "description", "icon", "type", "btn", "class"]);
          return originOpen(_extends(_extends({
            placement: "topRight"
          }, restConfig), {
            content: () => vue.createVNode(PureContent, {
              "prefixCls": noticePrefixCls,
              "icon": typeof icon === "function" ? icon() : icon,
              "type": type,
              "message": typeof message2 === "function" ? message2() : message2,
              "description": typeof description === "function" ? description() : description,
              "btn": typeof btn === "function" ? btn() : btn
            }, null),
            // @ts-ignore
            class: classNames(type && `${noticePrefixCls}-${type}`, hashId, className)
          }));
        };
        const destroy = (key2) => {
          var _a, _b;
          if (key2 !== void 0) {
            (_a = holderRef.value) === null || _a === void 0 ? void 0 : _a.close(key2);
          } else {
            (_b = holderRef.value) === null || _b === void 0 ? void 0 : _b.destroy();
          }
        };
        const wrapAPI = {
          open,
          destroy
        };
        const keys2 = ["success", "info", "warning", "error"];
        keys2.forEach((type) => {
          wrapAPI[type] = (config) => open(_extends(_extends({}, config), {
            type
          }));
        });
        return [wrapAPI, () => vue.createVNode(Holder, _objectSpread2$1(_objectSpread2$1({
          "key": holderKey
        }, notificationConfig), {}, {
          "ref": holderRef
        }), null)];
      }
      function useNotification(notificationConfig) {
        return useInternalNotification(notificationConfig);
      }
      const notificationInstance = {};
      let defaultDuration = 4.5;
      let defaultTop = "24px";
      let defaultBottom = "24px";
      let defaultPrefixCls$1 = "";
      let defaultPlacement = "topRight";
      let defaultGetContainer = () => document.body;
      let defaultCloseIcon = null;
      let rtl = false;
      let maxCount;
      function setNotificationConfig(options) {
        const {
          duration,
          placement,
          bottom,
          top,
          getContainer: getContainer2,
          closeIcon,
          prefixCls
        } = options;
        if (prefixCls !== void 0) {
          defaultPrefixCls$1 = prefixCls;
        }
        if (duration !== void 0) {
          defaultDuration = duration;
        }
        if (placement !== void 0) {
          defaultPlacement = placement;
        }
        if (bottom !== void 0) {
          defaultBottom = typeof bottom === "number" ? `${bottom}px` : bottom;
        }
        if (top !== void 0) {
          defaultTop = typeof top === "number" ? `${top}px` : top;
        }
        if (getContainer2 !== void 0) {
          defaultGetContainer = getContainer2;
        }
        if (closeIcon !== void 0) {
          defaultCloseIcon = closeIcon;
        }
        if (options.rtl !== void 0) {
          rtl = options.rtl;
        }
        if (options.maxCount !== void 0) {
          maxCount = options.maxCount;
        }
      }
      function getNotificationInstance(_ref, callback) {
        let {
          prefixCls: customizePrefixCls,
          placement = defaultPlacement,
          getContainer: getContainer2 = defaultGetContainer,
          top,
          bottom,
          closeIcon = defaultCloseIcon,
          appContext
        } = _ref;
        const {
          getPrefixCls
        } = globalConfig();
        const prefixCls = getPrefixCls("notification", customizePrefixCls || defaultPrefixCls$1);
        const cacheKey = `${prefixCls}-${placement}-${rtl}`;
        const cacheInstance = notificationInstance[cacheKey];
        if (cacheInstance) {
          Promise.resolve(cacheInstance).then((instance) => {
            callback(instance);
          });
          return;
        }
        const notificationClass = classNames(`${prefixCls}-${placement}`, {
          [`${prefixCls}-rtl`]: rtl === true
        });
        Notification$2.newInstance({
          name: "notification",
          prefixCls: customizePrefixCls || defaultPrefixCls$1,
          useStyle: useStyle$4,
          class: notificationClass,
          style: getPlacementStyle(placement, top !== null && top !== void 0 ? top : defaultTop, bottom !== null && bottom !== void 0 ? bottom : defaultBottom),
          appContext,
          getContainer: getContainer2,
          closeIcon: (_ref2) => {
            let {
              prefixCls: prefixCls2
            } = _ref2;
            const closeIconToRender = vue.createVNode("span", {
              "class": `${prefixCls2}-close-x`
            }, [renderHelper(closeIcon, {}, vue.createVNode(CloseOutlined$2, {
              "class": `${prefixCls2}-close-icon`
            }, null))]);
            return closeIconToRender;
          },
          maxCount,
          hasTransitionName: true
        }, (notification2) => {
          notificationInstance[cacheKey] = notification2;
          callback(notification2);
        });
      }
      const typeToIcon = {
        success: CheckCircleOutlined$1,
        info: InfoCircleOutlined$1,
        error: CloseCircleOutlined$1,
        warning: ExclamationCircleOutlined$1
      };
      function notice(args) {
        const {
          icon,
          type,
          description,
          message: message2,
          btn
        } = args;
        const duration = args.duration === void 0 ? defaultDuration : args.duration;
        getNotificationInstance(args, (notification2) => {
          notification2.notice({
            content: (_ref3) => {
              let {
                prefixCls: outerPrefixCls
              } = _ref3;
              const prefixCls = `${outerPrefixCls}-notice`;
              let iconNode = null;
              if (icon) {
                iconNode = () => vue.createVNode("span", {
                  "class": `${prefixCls}-icon`
                }, [renderHelper(icon)]);
              } else if (type) {
                const Icon2 = typeToIcon[type];
                iconNode = () => vue.createVNode(Icon2, {
                  "class": `${prefixCls}-icon ${prefixCls}-icon-${type}`
                }, null);
              }
              return vue.createVNode("div", {
                "class": iconNode ? `${prefixCls}-with-icon` : ""
              }, [iconNode && iconNode(), vue.createVNode("div", {
                "class": `${prefixCls}-message`
              }, [!description && iconNode ? vue.createVNode("span", {
                "class": `${prefixCls}-message-single-line-auto-margin`
              }, null) : null, renderHelper(message2)]), vue.createVNode("div", {
                "class": `${prefixCls}-description`
              }, [renderHelper(description)]), btn ? vue.createVNode("span", {
                "class": `${prefixCls}-btn`
              }, [renderHelper(btn)]) : null]);
            },
            duration,
            closable: true,
            onClose: args.onClose,
            onClick: args.onClick,
            key: args.key,
            style: args.style || {},
            class: args.class
          });
        });
      }
      const api = {
        open: notice,
        close(key2) {
          Object.keys(notificationInstance).forEach((cacheKey) => Promise.resolve(notificationInstance[cacheKey]).then((instance) => {
            instance.removeNotice(key2);
          }));
        },
        config: setNotificationConfig,
        destroy() {
          Object.keys(notificationInstance).forEach((cacheKey) => {
            Promise.resolve(notificationInstance[cacheKey]).then((instance) => {
              instance.destroy();
            });
            delete notificationInstance[cacheKey];
          });
        }
      };
      const iconTypes = ["success", "info", "warning", "error"];
      iconTypes.forEach((type) => {
        api[type] = (args) => api.open(_extends(_extends({}, args), {
          type
        }));
      });
      api.warn = api.warning;
      api.useNotification = useNotification;
      const notification = api;
      const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
      function getStyle(globalPrefixCls, theme) {
        const variables = {};
        const formatColor = (color, updater) => {
          let clone = color.clone();
          clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
          return clone.toRgbString();
        };
        const fillColor = (colorVal, type) => {
          const baseColor = new TinyColor(colorVal);
          const colorPalettes = generate$1(baseColor.toRgbString());
          variables[`${type}-color`] = formatColor(baseColor);
          variables[`${type}-color-disabled`] = colorPalettes[1];
          variables[`${type}-color-hover`] = colorPalettes[4];
          variables[`${type}-color-active`] = colorPalettes[6];
          variables[`${type}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
          variables[`${type}-color-deprecated-bg`] = colorPalettes[0];
          variables[`${type}-color-deprecated-border`] = colorPalettes[2];
        };
        if (theme.primaryColor) {
          fillColor(theme.primaryColor, "primary");
          const primaryColor = new TinyColor(theme.primaryColor);
          const primaryColors = generate$1(primaryColor.toRgbString());
          primaryColors.forEach((color, index2) => {
            variables[`primary-${index2 + 1}`] = color;
          });
          variables["primary-color-deprecated-l-35"] = formatColor(primaryColor, (c2) => c2.lighten(35));
          variables["primary-color-deprecated-l-20"] = formatColor(primaryColor, (c2) => c2.lighten(20));
          variables["primary-color-deprecated-t-20"] = formatColor(primaryColor, (c2) => c2.tint(20));
          variables["primary-color-deprecated-t-50"] = formatColor(primaryColor, (c2) => c2.tint(50));
          variables["primary-color-deprecated-f-12"] = formatColor(primaryColor, (c2) => c2.setAlpha(c2.getAlpha() * 0.12));
          const primaryActiveColor = new TinyColor(primaryColors[0]);
          variables["primary-color-active-deprecated-f-30"] = formatColor(primaryActiveColor, (c2) => c2.setAlpha(c2.getAlpha() * 0.3));
          variables["primary-color-active-deprecated-d-02"] = formatColor(primaryActiveColor, (c2) => c2.darken(2));
        }
        if (theme.successColor) {
          fillColor(theme.successColor, "success");
        }
        if (theme.warningColor) {
          fillColor(theme.warningColor, "warning");
        }
        if (theme.errorColor) {
          fillColor(theme.errorColor, "error");
        }
        if (theme.infoColor) {
          fillColor(theme.infoColor, "info");
        }
        const cssList = Object.keys(variables).map((key2) => `--${globalPrefixCls}-${key2}: ${variables[key2]};`);
        return `
  :root {
    ${cssList.join("\n")}
  }
  `.trim();
      }
      function registerTheme(globalPrefixCls, theme) {
        const style2 = getStyle(globalPrefixCls, theme);
        if (canUseDom()) {
          updateCSS(style2, `${dynamicStyleMark}-dynamic-theme`);
        }
      }
      const useStyle$2 = (iconPrefixCls) => {
        const [theme, token2] = useToken();
        return useStyleRegister(vue.computed(() => ({
          theme: theme.value,
          token: token2.value,
          hashId: "",
          path: ["ant-design-icons", iconPrefixCls.value]
        })), () => [{
          [`.${iconPrefixCls.value}`]: _extends(_extends({}, resetIcon()), {
            [`.${iconPrefixCls.value} .${iconPrefixCls.value}-icon`]: {
              display: "block"
            }
          })
        }]);
      };
      const useStyle$3 = useStyle$2;
      function useTheme(theme, parentTheme) {
        const themeConfig = vue.computed(() => (theme === null || theme === void 0 ? void 0 : theme.value) || {});
        const parentThemeConfig = vue.computed(() => themeConfig.value.inherit === false || !(parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.value) ? defaultConfig : parentTheme.value);
        const mergedTheme = vue.computed(() => {
          if (!(theme === null || theme === void 0 ? void 0 : theme.value)) {
            return parentTheme === null || parentTheme === void 0 ? void 0 : parentTheme.value;
          }
          const mergedComponents = _extends({}, parentThemeConfig.value.components);
          Object.keys(theme.value.components || {}).forEach((componentName) => {
            mergedComponents[componentName] = _extends(_extends({}, mergedComponents[componentName]), theme.value.components[componentName]);
          });
          return _extends(_extends(_extends({}, parentThemeConfig.value), themeConfig.value), {
            token: _extends(_extends({}, parentThemeConfig.value.token), themeConfig.value.token),
            components: mergedComponents
          });
        });
        return mergedTheme;
      }
      var __rest$3 = globalThis && globalThis.__rest || function(s2, e2) {
        var t2 = {};
        for (var p in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
            t2[p] = s2[p];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
            if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
              t2[p[i2]] = s2[p[i2]];
          }
        return t2;
      };
      const defaultPrefixCls = "ant";
      function getGlobalPrefixCls() {
        return globalConfigForApi.prefixCls || defaultPrefixCls;
      }
      function getGlobalIconPrefixCls() {
        return globalConfigForApi.iconPrefixCls || defaultIconPrefixCls;
      }
      const globalConfigBySet = vue.reactive({});
      const globalConfigForApi = vue.reactive({});
      vue.watchEffect(() => {
        _extends(globalConfigForApi, globalConfigBySet);
        globalConfigForApi.prefixCls = getGlobalPrefixCls();
        globalConfigForApi.iconPrefixCls = getGlobalIconPrefixCls();
        globalConfigForApi.getPrefixCls = (suffixCls, customizePrefixCls) => {
          if (customizePrefixCls)
            return customizePrefixCls;
          return suffixCls ? `${globalConfigForApi.prefixCls}-${suffixCls}` : globalConfigForApi.prefixCls;
        };
        globalConfigForApi.getRootPrefixCls = () => {
          if (globalConfigForApi.prefixCls) {
            return globalConfigForApi.prefixCls;
          }
          return getGlobalPrefixCls();
        };
      });
      let stopWatchEffect;
      const setGlobalConfig = (params) => {
        if (stopWatchEffect) {
          stopWatchEffect();
        }
        stopWatchEffect = vue.watchEffect(() => {
          _extends(globalConfigBySet, vue.reactive(params));
          _extends(globalConfigForApi, vue.reactive(params));
        });
        if (params.theme) {
          registerTheme(getGlobalPrefixCls(), params.theme);
        }
      };
      const globalConfig = () => ({
        getPrefixCls: (suffixCls, customizePrefixCls) => {
          if (customizePrefixCls)
            return customizePrefixCls;
          return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
        },
        getIconPrefixCls: getGlobalIconPrefixCls,
        getRootPrefixCls: () => {
          if (globalConfigForApi.prefixCls) {
            return globalConfigForApi.prefixCls;
          }
          return getGlobalPrefixCls();
        }
      });
      const ConfigProvider = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "AConfigProvider",
        inheritAttrs: false,
        props: configProviderProps(),
        setup(props, _ref) {
          let {
            slots
          } = _ref;
          const parentContext = useConfigContextInject();
          const getPrefixCls = (suffixCls, customizePrefixCls) => {
            const {
              prefixCls = "ant"
            } = props;
            if (customizePrefixCls)
              return customizePrefixCls;
            const mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");
            return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
          };
          const iconPrefixCls = vue.computed(() => props.iconPrefixCls || parentContext.iconPrefixCls.value || defaultIconPrefixCls);
          const shouldWrapSSR = vue.computed(() => iconPrefixCls.value !== parentContext.iconPrefixCls.value);
          const csp = vue.computed(() => {
            var _a;
            return props.csp || ((_a = parentContext.csp) === null || _a === void 0 ? void 0 : _a.value);
          });
          const wrapSSR = useStyle$3(iconPrefixCls);
          const mergedTheme = useTheme(vue.computed(() => props.theme), vue.computed(() => {
            var _a;
            return (_a = parentContext.theme) === null || _a === void 0 ? void 0 : _a.value;
          }));
          const renderEmptyComponent = (name) => {
            const renderEmpty$1 = props.renderEmpty || slots.renderEmpty || parentContext.renderEmpty || renderEmpty;
            return renderEmpty$1(name);
          };
          const autoInsertSpaceInButton = vue.computed(() => {
            var _a, _b;
            return (_a = props.autoInsertSpaceInButton) !== null && _a !== void 0 ? _a : (_b = parentContext.autoInsertSpaceInButton) === null || _b === void 0 ? void 0 : _b.value;
          });
          const locale$12 = vue.computed(() => {
            var _a;
            return props.locale || ((_a = parentContext.locale) === null || _a === void 0 ? void 0 : _a.value);
          });
          vue.watch(locale$12, () => {
            globalConfigBySet.locale = locale$12.value;
          }, {
            immediate: true
          });
          const direction = vue.computed(() => {
            var _a;
            return props.direction || ((_a = parentContext.direction) === null || _a === void 0 ? void 0 : _a.value);
          });
          const space = vue.computed(() => {
            var _a, _b;
            return (_a = props.space) !== null && _a !== void 0 ? _a : (_b = parentContext.space) === null || _b === void 0 ? void 0 : _b.value;
          });
          const virtual = vue.computed(() => {
            var _a, _b;
            return (_a = props.virtual) !== null && _a !== void 0 ? _a : (_b = parentContext.virtual) === null || _b === void 0 ? void 0 : _b.value;
          });
          const dropdownMatchSelectWidth = vue.computed(() => {
            var _a, _b;
            return (_a = props.dropdownMatchSelectWidth) !== null && _a !== void 0 ? _a : (_b = parentContext.dropdownMatchSelectWidth) === null || _b === void 0 ? void 0 : _b.value;
          });
          const getTargetContainer = vue.computed(() => {
            var _a;
            return props.getTargetContainer !== void 0 ? props.getTargetContainer : (_a = parentContext.getTargetContainer) === null || _a === void 0 ? void 0 : _a.value;
          });
          const getPopupContainer = vue.computed(() => {
            var _a;
            return props.getPopupContainer !== void 0 ? props.getPopupContainer : (_a = parentContext.getPopupContainer) === null || _a === void 0 ? void 0 : _a.value;
          });
          const pageHeader = vue.computed(() => {
            var _a;
            return props.pageHeader !== void 0 ? props.pageHeader : (_a = parentContext.pageHeader) === null || _a === void 0 ? void 0 : _a.value;
          });
          const input = vue.computed(() => {
            var _a;
            return props.input !== void 0 ? props.input : (_a = parentContext.input) === null || _a === void 0 ? void 0 : _a.value;
          });
          const pagination = vue.computed(() => {
            var _a;
            return props.pagination !== void 0 ? props.pagination : (_a = parentContext.pagination) === null || _a === void 0 ? void 0 : _a.value;
          });
          const form = vue.computed(() => {
            var _a;
            return props.form !== void 0 ? props.form : (_a = parentContext.form) === null || _a === void 0 ? void 0 : _a.value;
          });
          const select = vue.computed(() => {
            var _a;
            return props.select !== void 0 ? props.select : (_a = parentContext.select) === null || _a === void 0 ? void 0 : _a.value;
          });
          const componentSize = vue.computed(() => props.componentSize);
          const componentDisabled = vue.computed(() => props.componentDisabled);
          const configProvider = {
            csp,
            autoInsertSpaceInButton,
            locale: locale$12,
            direction,
            space,
            virtual,
            dropdownMatchSelectWidth,
            getPrefixCls,
            iconPrefixCls,
            theme: vue.computed(() => {
              var _a, _b;
              return (_a = mergedTheme.value) !== null && _a !== void 0 ? _a : (_b = parentContext.theme) === null || _b === void 0 ? void 0 : _b.value;
            }),
            renderEmpty: renderEmptyComponent,
            getTargetContainer,
            getPopupContainer,
            pageHeader,
            input,
            pagination,
            form,
            select,
            componentSize,
            componentDisabled,
            transformCellText: vue.computed(() => props.transformCellText)
          };
          const memoTheme = vue.computed(() => {
            const _a = mergedTheme.value || {}, {
              algorithm,
              token: token2
            } = _a, rest = __rest$3(_a, ["algorithm", "token"]);
            const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : void 0;
            return _extends(_extends({}, rest), {
              theme: themeObj,
              token: _extends(_extends({}, defaultSeedToken), token2)
            });
          });
          const validateMessagesRef = vue.computed(() => {
            var _a, _b;
            let validateMessages = {};
            if (locale$12.value) {
              validateMessages = ((_a = locale$12.value.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || ((_b = defaultLocale.Form) === null || _b === void 0 ? void 0 : _b.defaultValidateMessages) || {};
            }
            if (props.form && props.form.validateMessages) {
              validateMessages = _extends(_extends({}, validateMessages), props.form.validateMessages);
            }
            return validateMessages;
          });
          useConfigContextProvider(configProvider);
          useProvideGlobalForm({
            validateMessages: validateMessagesRef
          });
          useProviderSize(componentSize);
          useProviderDisabled(componentDisabled);
          const renderProvider = (legacyLocale) => {
            var _a, _b;
            let childNode = shouldWrapSSR.value ? wrapSSR((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) : (_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots);
            if (props.theme) {
              const _childNode = function() {
                return childNode;
              }();
              childNode = vue.createVNode(DesignTokenProvider, {
                "value": memoTheme.value
              }, {
                default: () => [_childNode]
              });
            }
            return vue.createVNode(locale, {
              "locale": locale$12.value || legacyLocale,
              "ANT_MARK__": ANT_MARK
            }, {
              default: () => [childNode]
            });
          };
          vue.watchEffect(() => {
            if (direction.value) {
              message.config({
                rtl: direction.value === "rtl"
              });
              notification.config({
                rtl: direction.value === "rtl"
              });
            }
          });
          return () => vue.createVNode(LocaleReceiver, {
            "children": (_2, __, legacyLocale) => renderProvider(legacyLocale)
          }, null);
        }
      });
      ConfigProvider.config = setGlobalConfig;
      ConfigProvider.install = function(app) {
        app.component(ConfigProvider.name, ConfigProvider);
      };
      const ConfigProvider$1 = ConfigProvider;
      function getClientSize() {
        const width = document.documentElement.clientWidth;
        const height = window.innerHeight || document.documentElement.clientHeight;
        return {
          width,
          height
        };
      }
      function getOffset(node2) {
        const box2 = node2.getBoundingClientRect();
        const docElem = document.documentElement;
        return {
          left: box2.left + (window.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || document.body.clientLeft || 0),
          top: box2.top + (window.pageYOffset || docElem.scrollTop) - (docElem.clientTop || document.body.clientTop || 0)
        };
      }
      function dialogPropTypes() {
        return {
          keyboard: {
            type: Boolean,
            default: void 0
          },
          mask: {
            type: Boolean,
            default: void 0
          },
          afterClose: Function,
          closable: {
            type: Boolean,
            default: void 0
          },
          maskClosable: {
            type: Boolean,
            default: void 0
          },
          visible: {
            type: Boolean,
            default: void 0
          },
          destroyOnClose: {
            type: Boolean,
            default: void 0
          },
          mousePosition: PropTypes$1.shape({
            x: Number,
            y: Number
          }).loose,
          title: PropTypes$1.any,
          footer: PropTypes$1.any,
          transitionName: String,
          maskTransitionName: String,
          animation: PropTypes$1.any,
          maskAnimation: PropTypes$1.any,
          wrapStyle: {
            type: Object,
            default: void 0
          },
          bodyStyle: {
            type: Object,
            default: void 0
          },
          maskStyle: {
            type: Object,
            default: void 0
          },
          prefixCls: String,
          wrapClassName: String,
          rootClassName: String,
          width: [String, Number],
          height: [String, Number],
          zIndex: Number,
          bodyProps: PropTypes$1.any,
          maskProps: PropTypes$1.any,
          wrapProps: PropTypes$1.any,
          getContainer: PropTypes$1.any,
          dialogStyle: {
            type: Object,
            default: void 0
          },
          dialogClass: String,
          closeIcon: PropTypes$1.any,
          forceRender: {
            type: Boolean,
            default: void 0
          },
          getOpenCount: Function,
          // https://github.com/ant-design/ant-design/issues/19771
          // https://github.com/react-component/dialog/issues/95
          focusTriggerAfterClose: {
            type: Boolean,
            default: void 0
          },
          onClose: Function,
          modalRender: Function
        };
      }
      function getMotionName(prefixCls, transitionName2, animationName) {
        let motionName = transitionName2;
        if (!motionName && animationName) {
          motionName = `${prefixCls}-${animationName}`;
        }
        return motionName;
      }
      let uuid$2 = -1;
      function getUUID() {
        uuid$2 += 1;
        return uuid$2;
      }
      function getScroll(w2, top) {
        let ret = w2[`page${top ? "Y" : "X"}Offset`];
        const method = `scroll${top ? "Top" : "Left"}`;
        if (typeof ret !== "number") {
          const d2 = w2.document;
          ret = d2.documentElement[method];
          if (typeof ret !== "number") {
            ret = d2.body[method];
          }
        }
        return ret;
      }
      function offset(el) {
        const rect = el.getBoundingClientRect();
        const pos = {
          left: rect.left,
          top: rect.top
        };
        const doc = el.ownerDocument;
        const w2 = doc.defaultView || doc.parentWindow;
        pos.left += getScroll(w2);
        pos.top += getScroll(w2, true);
        return pos;
      }
      const sentinelStyle = {
        width: 0,
        height: 0,
        overflow: "hidden",
        outline: "none"
      };
      const Content = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "DialogContent",
        inheritAttrs: false,
        props: _extends(_extends({}, dialogPropTypes()), {
          motionName: String,
          ariaId: String,
          onVisibleChanged: Function,
          onMousedown: Function,
          onMouseup: Function
        }),
        setup(props, _ref) {
          let {
            expose,
            slots,
            attrs
          } = _ref;
          const sentinelStartRef = vue.ref();
          const sentinelEndRef = vue.ref();
          const dialogRef = vue.ref();
          expose({
            focus: () => {
              var _a;
              (_a = sentinelStartRef.value) === null || _a === void 0 ? void 0 : _a.focus();
            },
            changeActive: (next2) => {
              const {
                activeElement
              } = document;
              if (next2 && activeElement === sentinelEndRef.value) {
                sentinelStartRef.value.focus();
              } else if (!next2 && activeElement === sentinelStartRef.value) {
                sentinelEndRef.value.focus();
              }
            }
          });
          const transformOrigin = vue.ref();
          const contentStyleRef = vue.computed(() => {
            const {
              width,
              height
            } = props;
            const contentStyle = {};
            if (width !== void 0) {
              contentStyle.width = typeof width === "number" ? `${width}px` : width;
            }
            if (height !== void 0) {
              contentStyle.height = typeof height === "number" ? `${height}px` : height;
            }
            if (transformOrigin.value) {
              contentStyle.transformOrigin = transformOrigin.value;
            }
            return contentStyle;
          });
          const onPrepare = () => {
            vue.nextTick(() => {
              if (dialogRef.value) {
                const elementOffset = offset(dialogRef.value);
                transformOrigin.value = props.mousePosition ? `${props.mousePosition.x - elementOffset.left}px ${props.mousePosition.y - elementOffset.top}px` : "";
              }
            });
          };
          const onVisibleChanged = (visible) => {
            props.onVisibleChanged(visible);
          };
          return () => {
            var _a, _b, _c, _d;
            const {
              prefixCls,
              footer = (_a = slots.footer) === null || _a === void 0 ? void 0 : _a.call(slots),
              title = (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots),
              ariaId,
              closable,
              closeIcon = (_c = slots.closeIcon) === null || _c === void 0 ? void 0 : _c.call(slots),
              onClose,
              bodyStyle,
              bodyProps,
              onMousedown,
              onMouseup,
              visible,
              modalRender = slots.modalRender,
              destroyOnClose,
              motionName
            } = props;
            let footerNode;
            if (footer) {
              footerNode = vue.createVNode("div", {
                "class": `${prefixCls}-footer`
              }, [footer]);
            }
            let headerNode;
            if (title) {
              headerNode = vue.createVNode("div", {
                "class": `${prefixCls}-header`
              }, [vue.createVNode("div", {
                "class": `${prefixCls}-title`,
                "id": ariaId
              }, [title])]);
            }
            let closer;
            if (closable) {
              closer = vue.createVNode("button", {
                "type": "button",
                "onClick": onClose,
                "aria-label": "Close",
                "class": `${prefixCls}-close`
              }, [closeIcon || vue.createVNode("span", {
                "class": `${prefixCls}-close-x`
              }, null)]);
            }
            const content = vue.createVNode("div", {
              "class": `${prefixCls}-content`
            }, [closer, headerNode, vue.createVNode("div", _objectSpread2$1({
              "class": `${prefixCls}-body`,
              "style": bodyStyle
            }, bodyProps), [(_d = slots.default) === null || _d === void 0 ? void 0 : _d.call(slots)]), footerNode]);
            const transitionProps = getTransitionProps(motionName);
            return vue.createVNode(vue.Transition, _objectSpread2$1(_objectSpread2$1({}, transitionProps), {}, {
              "onBeforeEnter": onPrepare,
              "onAfterEnter": () => onVisibleChanged(true),
              "onAfterLeave": () => onVisibleChanged(false)
            }), {
              default: () => [visible || !destroyOnClose ? vue.withDirectives(vue.createVNode("div", _objectSpread2$1(_objectSpread2$1({}, attrs), {}, {
                "ref": dialogRef,
                "key": "dialog-element",
                "role": "document",
                "style": [contentStyleRef.value, attrs.style],
                "class": [prefixCls, attrs.class],
                "onMousedown": onMousedown,
                "onMouseup": onMouseup
              }), [vue.createVNode("div", {
                "tabindex": 0,
                "ref": sentinelStartRef,
                "style": sentinelStyle,
                "aria-hidden": "true"
              }, null), modalRender ? modalRender({
                originVNode: content
              }) : content, vue.createVNode("div", {
                "tabindex": 0,
                "ref": sentinelEndRef,
                "style": sentinelStyle,
                "aria-hidden": "true"
              }, null)]), [[vue.vShow, visible]]) : null]
            });
          };
        }
      });
      const Mask = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "DialogMask",
        props: {
          prefixCls: String,
          visible: Boolean,
          motionName: String,
          maskProps: Object
        },
        setup(props, _ref) {
          return () => {
            const {
              prefixCls,
              visible,
              maskProps,
              motionName
            } = props;
            const transitionProps = getTransitionProps(motionName);
            return vue.createVNode(vue.Transition, transitionProps, {
              default: () => [vue.withDirectives(vue.createVNode("div", _objectSpread2$1({
                "class": `${prefixCls}-mask`
              }, maskProps), null), [[vue.vShow, visible]])]
            });
          };
        }
      });
      const Dialog = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "VcDialog",
        inheritAttrs: false,
        props: initDefaultProps$1(_extends(_extends({}, dialogPropTypes()), {
          getOpenCount: Function,
          scrollLocker: Object
        }), {
          mask: true,
          visible: false,
          keyboard: true,
          closable: true,
          maskClosable: true,
          destroyOnClose: false,
          prefixCls: "rc-dialog",
          getOpenCount: () => null,
          focusTriggerAfterClose: true
        }),
        setup(props, _ref) {
          let {
            attrs,
            slots
          } = _ref;
          const lastOutSideActiveElementRef = vue.shallowRef();
          const wrapperRef = vue.shallowRef();
          const contentRef = vue.shallowRef();
          const animatedVisible = vue.shallowRef(props.visible);
          const ariaIdRef = vue.shallowRef(`vcDialogTitle${getUUID()}`);
          const onDialogVisibleChanged = (newVisible) => {
            var _a, _b;
            if (newVisible) {
              if (!contains(wrapperRef.value, document.activeElement)) {
                lastOutSideActiveElementRef.value = document.activeElement;
                (_a = contentRef.value) === null || _a === void 0 ? void 0 : _a.focus();
              }
            } else {
              const preAnimatedVisible = animatedVisible.value;
              animatedVisible.value = false;
              if (props.mask && lastOutSideActiveElementRef.value && props.focusTriggerAfterClose) {
                try {
                  lastOutSideActiveElementRef.value.focus({
                    preventScroll: true
                  });
                } catch (e2) {
                }
                lastOutSideActiveElementRef.value = null;
              }
              if (preAnimatedVisible) {
                (_b = props.afterClose) === null || _b === void 0 ? void 0 : _b.call(props);
              }
            }
          };
          const onInternalClose = (e2) => {
            var _a;
            (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props, e2);
          };
          const contentClickRef = vue.shallowRef(false);
          const contentTimeoutRef = vue.shallowRef();
          const onContentMouseDown = () => {
            clearTimeout(contentTimeoutRef.value);
            contentClickRef.value = true;
          };
          const onContentMouseUp = () => {
            contentTimeoutRef.value = setTimeout(() => {
              contentClickRef.value = false;
            });
          };
          const onWrapperClick = (e2) => {
            if (!props.maskClosable)
              return null;
            if (contentClickRef.value) {
              contentClickRef.value = false;
            } else if (wrapperRef.value === e2.target) {
              onInternalClose(e2);
            }
          };
          const onWrapperKeyDown = (e2) => {
            if (props.keyboard && e2.keyCode === KeyCode$1.ESC) {
              e2.stopPropagation();
              onInternalClose(e2);
              return;
            }
            if (props.visible) {
              if (e2.keyCode === KeyCode$1.TAB) {
                contentRef.value.changeActive(!e2.shiftKey);
              }
            }
          };
          vue.watch(() => props.visible, () => {
            if (props.visible) {
              animatedVisible.value = true;
            }
          }, {
            flush: "post"
          });
          vue.onBeforeUnmount(() => {
            var _a;
            clearTimeout(contentTimeoutRef.value);
            (_a = props.scrollLocker) === null || _a === void 0 ? void 0 : _a.unLock();
          });
          vue.watchEffect(() => {
            var _a, _b;
            (_a = props.scrollLocker) === null || _a === void 0 ? void 0 : _a.unLock();
            if (animatedVisible.value) {
              (_b = props.scrollLocker) === null || _b === void 0 ? void 0 : _b.lock();
            }
          });
          return () => {
            const {
              prefixCls,
              mask,
              visible,
              maskTransitionName,
              maskAnimation,
              zIndex,
              wrapClassName,
              rootClassName,
              wrapStyle,
              closable,
              maskProps,
              maskStyle,
              transitionName: transitionName2,
              animation,
              wrapProps,
              title = slots.title
            } = props;
            const {
              style: style2,
              class: className
            } = attrs;
            return vue.createVNode("div", _objectSpread2$1({
              "class": [`${prefixCls}-root`, rootClassName]
            }, pickAttrs(props, {
              data: true
            })), [vue.createVNode(Mask, {
              "prefixCls": prefixCls,
              "visible": mask && visible,
              "motionName": getMotionName(prefixCls, maskTransitionName, maskAnimation),
              "style": _extends({
                zIndex
              }, maskStyle),
              "maskProps": maskProps
            }, null), vue.createVNode("div", _objectSpread2$1({
              "tabIndex": -1,
              "onKeydown": onWrapperKeyDown,
              "class": classNames(`${prefixCls}-wrap`, wrapClassName),
              "ref": wrapperRef,
              "onClick": onWrapperClick,
              "role": "dialog",
              "aria-labelledby": title ? ariaIdRef.value : null,
              "style": _extends(_extends({
                zIndex
              }, wrapStyle), {
                display: !animatedVisible.value ? "none" : null
              })
            }, wrapProps), [vue.createVNode(Content, _objectSpread2$1(_objectSpread2$1({}, omit(props, ["scrollLocker"])), {}, {
              "style": style2,
              "class": className,
              "onMousedown": onContentMouseDown,
              "onMouseup": onContentMouseUp,
              "ref": contentRef,
              "closable": closable,
              "ariaId": ariaIdRef.value,
              "prefixCls": prefixCls,
              "visible": visible,
              "onClose": onInternalClose,
              "onVisibleChanged": onDialogVisibleChanged,
              "motionName": getMotionName(prefixCls, transitionName2, animation)
            }), slots)])]);
          };
        }
      });
      const IDialogPropTypes = dialogPropTypes();
      const DialogWrap = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "DialogWrap",
        inheritAttrs: false,
        props: initDefaultProps$1(IDialogPropTypes, {
          visible: false
        }),
        setup(props, _ref) {
          let {
            attrs,
            slots
          } = _ref;
          const animatedVisible = vue.ref(props.visible);
          useProvidePortal({}, {
            inTriggerContext: false
          });
          vue.watch(() => props.visible, () => {
            if (props.visible) {
              animatedVisible.value = true;
            }
          }, {
            flush: "post"
          });
          return () => {
            const {
              visible,
              getContainer: getContainer2,
              forceRender,
              destroyOnClose = false,
              afterClose
            } = props;
            let dialogProps = _extends(_extends(_extends({}, props), attrs), {
              ref: "_component",
              key: "dialog"
            });
            if (getContainer2 === false) {
              return vue.createVNode(Dialog, _objectSpread2$1(_objectSpread2$1({}, dialogProps), {}, {
                "getOpenCount": () => 2
              }), slots);
            }
            if (!forceRender && destroyOnClose && !animatedVisible.value) {
              return null;
            }
            return vue.createVNode(Portal, {
              "autoLock": true,
              "visible": visible,
              "forceRender": forceRender,
              "getContainer": getContainer2
            }, {
              default: (childProps) => {
                dialogProps = _extends(_extends(_extends({}, dialogProps), childProps), {
                  afterClose: () => {
                    afterClose === null || afterClose === void 0 ? void 0 : afterClose();
                    animatedVisible.value = false;
                  }
                });
                return vue.createVNode(Dialog, dialogProps, slots);
              }
            });
          };
        }
      });
      const DialogWrap$1 = DialogWrap;
      function useFrameSetState(initial) {
        const frame = vue.ref(null);
        const state = vue.reactive(_extends({}, initial));
        const queue = vue.ref([]);
        const setFrameState = (newState) => {
          if (frame.value === null) {
            queue.value = [];
            frame.value = wrapperRaf(() => {
              let memoState;
              queue.value.forEach((queueState) => {
                memoState = _extends(_extends({}, memoState), queueState);
              });
              _extends(state, memoState);
              frame.value = null;
            });
          }
          queue.value.push(newState);
        };
        vue.onMounted(() => {
          frame.value && wrapperRaf.cancel(frame.value);
        });
        return [state, setFrameState];
      }
      function fixPoint(key2, start, width, clientWidth) {
        const startAddWidth = start + width;
        const offsetStart = (width - clientWidth) / 2;
        if (width > clientWidth) {
          if (start > 0) {
            return {
              [key2]: offsetStart
            };
          }
          if (start < 0 && startAddWidth < clientWidth) {
            return {
              [key2]: -offsetStart
            };
          }
        } else if (start < 0 || startAddWidth > clientWidth) {
          return {
            [key2]: start < 0 ? offsetStart : -offsetStart
          };
        }
        return {};
      }
      function getFixScaleEleTransPosition(width, height, left, top) {
        const {
          width: clientWidth,
          height: clientHeight
        } = getClientSize();
        let fixPos = null;
        if (width <= clientWidth && height <= clientHeight) {
          fixPos = {
            x: 0,
            y: 0
          };
        } else if (width > clientWidth || height > clientHeight) {
          fixPos = _extends(_extends({}, fixPoint("x", left, width, clientWidth)), fixPoint("y", top, height, clientHeight));
        }
        return fixPos;
      }
      var __rest$2 = globalThis && globalThis.__rest || function(s2, e2) {
        var t2 = {};
        for (var p in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
            t2[p] = s2[p];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
            if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
              t2[p[i2]] = s2[p[i2]];
          }
        return t2;
      };
      const previewGroupContext = Symbol("previewGroupContext");
      const context = {
        provide: (val) => {
          vue.provide(previewGroupContext, val);
        },
        inject: () => {
          return vue.inject(previewGroupContext, {
            isPreviewGroup: vue.shallowRef(false),
            previewUrls: vue.computed(() => /* @__PURE__ */ new Map()),
            setPreviewUrls: () => {
            },
            current: vue.ref(null),
            setCurrent: () => {
            },
            setShowPreview: () => {
            },
            setMousePosition: () => {
            },
            registerImage: null,
            rootClassName: ""
          });
        }
      };
      const imageGroupProps = () => ({
        previewPrefixCls: String,
        preview: {
          type: [Boolean, Object],
          default: true
        },
        icons: {
          type: Object,
          default: () => ({})
        }
      });
      const Group = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "PreviewGroup",
        inheritAttrs: false,
        props: imageGroupProps(),
        setup(props, _ref) {
          let {
            slots
          } = _ref;
          const preview = vue.computed(() => {
            const defaultValues = {
              visible: void 0,
              onVisibleChange: () => {
              },
              getContainer: void 0,
              current: 0
            };
            return typeof props.preview === "object" ? mergeDefaultValue(props.preview, defaultValues) : defaultValues;
          });
          const previewUrls = vue.reactive(/* @__PURE__ */ new Map());
          const current = vue.ref();
          const previewVisible = vue.computed(() => preview.value.visible);
          const getPreviewContainer = vue.computed(() => preview.value.getContainer);
          const onPreviewVisibleChange = (val, preval) => {
            var _a, _b;
            (_b = (_a = preview.value).onVisibleChange) === null || _b === void 0 ? void 0 : _b.call(_a, val, preval);
          };
          const [isShowPreview, setShowPreview] = useMergedState(!!previewVisible.value, {
            value: previewVisible,
            onChange: onPreviewVisibleChange
          });
          const mousePosition2 = vue.ref(null);
          const isControlled = vue.computed(() => previewVisible.value !== void 0);
          const previewUrlsKeys = vue.computed(() => Array.from(previewUrls.keys()));
          const currentControlledKey = vue.computed(() => previewUrlsKeys.value[preview.value.current]);
          const canPreviewUrls = vue.computed(() => new Map(Array.from(previewUrls).filter((_ref2) => {
            let [, {
              canPreview
            }] = _ref2;
            return !!canPreview;
          }).map((_ref3) => {
            let [id, {
              url
            }] = _ref3;
            return [id, url];
          })));
          const setPreviewUrls = function(id, url) {
            let canPreview = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
            previewUrls.set(id, {
              url,
              canPreview
            });
          };
          const setCurrent = (val) => {
            current.value = val;
          };
          const setMousePosition = (val) => {
            mousePosition2.value = val;
          };
          const registerImage = function(id, url) {
            let canPreview = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
            const unRegister = () => {
              previewUrls.delete(id);
            };
            previewUrls.set(id, {
              url,
              canPreview
            });
            return unRegister;
          };
          const onPreviewClose = (e2) => {
            e2 === null || e2 === void 0 ? void 0 : e2.stopPropagation();
            setShowPreview(false);
            setMousePosition(null);
          };
          vue.watch(currentControlledKey, (val) => {
            setCurrent(val);
          }, {
            immediate: true,
            flush: "post"
          });
          vue.watchEffect(() => {
            if (isShowPreview.value && isControlled.value) {
              setCurrent(currentControlledKey.value);
            }
          }, {
            flush: "post"
          });
          context.provide({
            isPreviewGroup: vue.shallowRef(true),
            previewUrls: canPreviewUrls,
            setPreviewUrls,
            current,
            setCurrent,
            setShowPreview,
            setMousePosition,
            registerImage
          });
          return () => {
            const dialogProps = __rest$2(preview.value, []);
            return vue.createVNode(vue.Fragment, null, [slots.default && slots.default(), vue.createVNode(Preview$1, _objectSpread2$1(_objectSpread2$1({}, dialogProps), {}, {
              "ria-hidden": !isShowPreview.value,
              "visible": isShowPreview.value,
              "prefixCls": props.previewPrefixCls,
              "onClose": onPreviewClose,
              "mousePosition": mousePosition2.value,
              "src": canPreviewUrls.value.get(current.value),
              "icons": props.icons,
              "getContainer": getPreviewContainer.value
            }), null)]);
          };
        }
      });
      const PreviewGroup$1 = Group;
      const initialPosition = {
        x: 0,
        y: 0
      };
      const previewProps = _extends(_extends({}, dialogPropTypes()), {
        src: String,
        alt: String,
        rootClassName: String,
        icons: {
          type: Object,
          default: () => ({})
        }
      });
      const Preview = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "Preview",
        inheritAttrs: false,
        props: previewProps,
        emits: ["close", "afterClose"],
        setup(props, _ref) {
          let {
            emit,
            attrs
          } = _ref;
          const {
            rotateLeft,
            rotateRight,
            zoomIn: zoomIn2,
            zoomOut: zoomOut2,
            close,
            left,
            right,
            flipX,
            flipY
          } = vue.reactive(props.icons);
          const scale = vue.shallowRef(1);
          const rotate = vue.shallowRef(0);
          const flip2 = vue.reactive({
            x: 1,
            y: 1
          });
          const [position2, setPosition] = useFrameSetState(initialPosition);
          const onClose = () => emit("close");
          const imgRef = vue.shallowRef();
          const originPositionRef = vue.reactive({
            originX: 0,
            originY: 0,
            deltaX: 0,
            deltaY: 0
          });
          const isMoving = vue.shallowRef(false);
          const groupContext = context.inject();
          const {
            previewUrls,
            current,
            isPreviewGroup,
            setCurrent
          } = groupContext;
          const previewGroupCount = vue.computed(() => previewUrls.value.size);
          const previewUrlsKeys = vue.computed(() => Array.from(previewUrls.value.keys()));
          const currentPreviewIndex = vue.computed(() => previewUrlsKeys.value.indexOf(current.value));
          const combinationSrc = vue.computed(() => {
            return isPreviewGroup.value ? previewUrls.value.get(current.value) : props.src;
          });
          const showLeftOrRightSwitches = vue.computed(() => isPreviewGroup.value && previewGroupCount.value > 1);
          const lastWheelZoomDirection = vue.shallowRef({
            wheelDirection: 0
          });
          const onAfterClose = () => {
            scale.value = 1;
            rotate.value = 0;
            flip2.x = 1;
            flip2.y = 1;
            setPosition(initialPosition);
            emit("afterClose");
          };
          const onZoomIn = (isWheel) => {
            if (!isWheel) {
              scale.value++;
            } else {
              scale.value += 0.5;
            }
            setPosition(initialPosition);
          };
          const onZoomOut = (isWheel) => {
            if (scale.value > 1) {
              if (!isWheel) {
                scale.value--;
              } else {
                scale.value -= 0.5;
              }
            }
            setPosition(initialPosition);
          };
          const onRotateRight = () => {
            rotate.value += 90;
          };
          const onRotateLeft = () => {
            rotate.value -= 90;
          };
          const onFlipX = () => {
            flip2.x = -flip2.x;
          };
          const onFlipY = () => {
            flip2.y = -flip2.y;
          };
          const onSwitchLeft = (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (currentPreviewIndex.value > 0) {
              setCurrent(previewUrlsKeys.value[currentPreviewIndex.value - 1]);
            }
          };
          const onSwitchRight = (event) => {
            event.preventDefault();
            event.stopPropagation();
            if (currentPreviewIndex.value < previewGroupCount.value - 1) {
              setCurrent(previewUrlsKeys.value[currentPreviewIndex.value + 1]);
            }
          };
          const wrapClassName = classNames({
            [`${props.prefixCls}-moving`]: isMoving.value
          });
          const toolClassName = `${props.prefixCls}-operations-operation`;
          const iconClassName = `${props.prefixCls}-operations-icon`;
          const tools = [{
            icon: close,
            onClick: onClose,
            type: "close"
          }, {
            icon: zoomIn2,
            onClick: () => onZoomIn(),
            type: "zoomIn"
          }, {
            icon: zoomOut2,
            onClick: () => onZoomOut(),
            type: "zoomOut",
            disabled: vue.computed(() => scale.value === 1)
          }, {
            icon: rotateRight,
            onClick: onRotateRight,
            type: "rotateRight"
          }, {
            icon: rotateLeft,
            onClick: onRotateLeft,
            type: "rotateLeft"
          }, {
            icon: flipX,
            onClick: onFlipX,
            type: "flipX"
          }, {
            icon: flipY,
            onClick: onFlipY,
            type: "flipY"
          }];
          const onMouseUp = () => {
            if (props.visible && isMoving.value) {
              const width = imgRef.value.offsetWidth * scale.value;
              const height = imgRef.value.offsetHeight * scale.value;
              const {
                left: left2,
                top
              } = getOffset(imgRef.value);
              const isRotate = rotate.value % 180 !== 0;
              isMoving.value = false;
              const fixState = getFixScaleEleTransPosition(isRotate ? height : width, isRotate ? width : height, left2, top);
              if (fixState) {
                setPosition(_extends({}, fixState));
              }
            }
          };
          const onMouseDown = (event) => {
            if (event.button !== 0)
              return;
            event.preventDefault();
            event.stopPropagation();
            originPositionRef.deltaX = event.pageX - position2.x;
            originPositionRef.deltaY = event.pageY - position2.y;
            originPositionRef.originX = position2.x;
            originPositionRef.originY = position2.y;
            isMoving.value = true;
          };
          const onMouseMove = (event) => {
            if (props.visible && isMoving.value) {
              setPosition({
                x: event.pageX - originPositionRef.deltaX,
                y: event.pageY - originPositionRef.deltaY
              });
            }
          };
          const onWheelMove = (event) => {
            if (!props.visible)
              return;
            event.preventDefault();
            const wheelDirection = event.deltaY;
            lastWheelZoomDirection.value = {
              wheelDirection
            };
          };
          const onKeyDown = (event) => {
            if (!props.visible || !showLeftOrRightSwitches.value)
              return;
            event.preventDefault();
            if (event.keyCode === KeyCode$1.LEFT) {
              if (currentPreviewIndex.value > 0) {
                setCurrent(previewUrlsKeys.value[currentPreviewIndex.value - 1]);
              }
            } else if (event.keyCode === KeyCode$1.RIGHT) {
              if (currentPreviewIndex.value < previewGroupCount.value - 1) {
                setCurrent(previewUrlsKeys.value[currentPreviewIndex.value + 1]);
              }
            }
          };
          const onDoubleClick = () => {
            if (props.visible) {
              if (scale.value !== 1) {
                scale.value = 1;
              }
              if (position2.x !== initialPosition.x || position2.y !== initialPosition.y) {
                setPosition(initialPosition);
              }
            }
          };
          let removeListeners = () => {
          };
          vue.onMounted(() => {
            vue.watch([() => props.visible, isMoving], () => {
              removeListeners();
              let onTopMouseUpListener;
              let onTopMouseMoveListener;
              const onMouseUpListener = addEventListenerWrap(window, "mouseup", onMouseUp, false);
              const onMouseMoveListener = addEventListenerWrap(window, "mousemove", onMouseMove, false);
              const onScrollWheelListener = addEventListenerWrap(window, "wheel", onWheelMove, {
                passive: false
              });
              const onKeyDownListener = addEventListenerWrap(window, "keydown", onKeyDown, false);
              try {
                if (window.top !== window.self) {
                  onTopMouseUpListener = addEventListenerWrap(window.top, "mouseup", onMouseUp, false);
                  onTopMouseMoveListener = addEventListenerWrap(window.top, "mousemove", onMouseMove, false);
                }
              } catch (error) {
              }
              removeListeners = () => {
                onMouseUpListener.remove();
                onMouseMoveListener.remove();
                onScrollWheelListener.remove();
                onKeyDownListener.remove();
                if (onTopMouseUpListener)
                  onTopMouseUpListener.remove();
                if (onTopMouseMoveListener)
                  onTopMouseMoveListener.remove();
              };
            }, {
              flush: "post",
              immediate: true
            });
            vue.watch([lastWheelZoomDirection], () => {
              const {
                wheelDirection
              } = lastWheelZoomDirection.value;
              if (wheelDirection > 0) {
                onZoomOut(true);
              } else if (wheelDirection < 0) {
                onZoomIn(true);
              }
            });
          });
          vue.onUnmounted(() => {
            removeListeners();
          });
          return () => {
            const {
              visible,
              prefixCls,
              rootClassName
            } = props;
            return vue.createVNode(DialogWrap$1, _objectSpread2$1(_objectSpread2$1({}, attrs), {}, {
              "transitionName": props.transitionName,
              "maskTransitionName": props.maskTransitionName,
              "closable": false,
              "keyboard": true,
              "prefixCls": prefixCls,
              "onClose": onClose,
              "afterClose": onAfterClose,
              "visible": visible,
              "wrapClassName": wrapClassName,
              "rootClassName": rootClassName,
              "getContainer": props.getContainer
            }), {
              default: () => [vue.createVNode("div", {
                "class": [`${props.prefixCls}-operations-wrapper`, rootClassName]
              }, [vue.createVNode("ul", {
                "class": `${props.prefixCls}-operations`
              }, [tools.map((_ref2) => {
                let {
                  icon: IconType,
                  onClick,
                  type,
                  disabled
                } = _ref2;
                return vue.createVNode("li", {
                  "class": classNames(toolClassName, {
                    [`${props.prefixCls}-operations-operation-disabled`]: disabled && (disabled === null || disabled === void 0 ? void 0 : disabled.value)
                  }),
                  "onClick": onClick,
                  "key": type
                }, [vue.cloneVNode(IconType, {
                  class: iconClassName
                })]);
              })])]), vue.createVNode("div", {
                "class": `${props.prefixCls}-img-wrapper`,
                "style": {
                  transform: `translate3d(${position2.x}px, ${position2.y}px, 0)`
                }
              }, [vue.createVNode("img", {
                "onMousedown": onMouseDown,
                "onDblclick": onDoubleClick,
                "ref": imgRef,
                "class": `${props.prefixCls}-img`,
                "src": combinationSrc.value,
                "alt": props.alt,
                "style": {
                  transform: `scale3d(${flip2.x * scale.value}, ${flip2.y * scale.value}, 1) rotate(${rotate.value}deg)`
                }
              }, null)]), showLeftOrRightSwitches.value && vue.createVNode("div", {
                "class": classNames(`${props.prefixCls}-switch-left`, {
                  [`${props.prefixCls}-switch-left-disabled`]: currentPreviewIndex.value <= 0
                }),
                "onClick": onSwitchLeft
              }, [left]), showLeftOrRightSwitches.value && vue.createVNode("div", {
                "class": classNames(`${props.prefixCls}-switch-right`, {
                  [`${props.prefixCls}-switch-right-disabled`]: currentPreviewIndex.value >= previewGroupCount.value - 1
                }),
                "onClick": onSwitchRight
              }, [right])]
            });
          };
        }
      });
      const Preview$1 = Preview;
      var __rest$1 = globalThis && globalThis.__rest || function(s2, e2) {
        var t2 = {};
        for (var p in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
            t2[p] = s2[p];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
            if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
              t2[p[i2]] = s2[p[i2]];
          }
        return t2;
      };
      const imageProps = () => ({
        src: String,
        wrapperClassName: String,
        wrapperStyle: {
          type: Object,
          default: void 0
        },
        rootClassName: String,
        prefixCls: String,
        previewPrefixCls: String,
        previewMask: {
          type: [Boolean, Function],
          default: void 0
        },
        placeholder: PropTypes$1.any,
        fallback: String,
        preview: {
          type: [Boolean, Object],
          default: true
        },
        onClick: {
          type: Function
        },
        onError: {
          type: Function
        }
      });
      const mergeDefaultValue = (obj, defaultValues) => {
        const res = _extends({}, obj);
        Object.keys(defaultValues).forEach((key2) => {
          if (obj[key2] === void 0) {
            res[key2] = defaultValues[key2];
          }
        });
        return res;
      };
      let uuid$1 = 0;
      const ImageInternal = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "VcImage",
        inheritAttrs: false,
        props: imageProps(),
        emits: ["click", "error"],
        setup(props, _ref) {
          let {
            attrs,
            slots,
            emit
          } = _ref;
          const prefixCls = vue.computed(() => props.prefixCls);
          const previewPrefixCls = vue.computed(() => `${prefixCls.value}-preview`);
          const preview = vue.computed(() => {
            const defaultValues = {
              visible: void 0,
              onVisibleChange: () => {
              },
              getContainer: void 0
            };
            return typeof props.preview === "object" ? mergeDefaultValue(props.preview, defaultValues) : defaultValues;
          });
          const src = vue.computed(() => {
            var _a;
            return (_a = preview.value.src) !== null && _a !== void 0 ? _a : props.src;
          });
          const isCustomPlaceholder = vue.computed(() => props.placeholder && props.placeholder !== true || slots.placeholder);
          const previewVisible = vue.computed(() => preview.value.visible);
          const getPreviewContainer = vue.computed(() => preview.value.getContainer);
          const isControlled = vue.computed(() => previewVisible.value !== void 0);
          const onPreviewVisibleChange = (val, preval) => {
            var _a, _b;
            (_b = (_a = preview.value).onVisibleChange) === null || _b === void 0 ? void 0 : _b.call(_a, val, preval);
          };
          const [isShowPreview, setShowPreview] = useMergedState(!!previewVisible.value, {
            value: previewVisible,
            onChange: onPreviewVisibleChange
          });
          vue.watch(isShowPreview, (val, preVal) => {
            onPreviewVisibleChange(val, preVal);
          });
          const status = vue.ref(isCustomPlaceholder.value ? "loading" : "normal");
          vue.watch(() => props.src, () => {
            status.value = isCustomPlaceholder.value ? "loading" : "normal";
          });
          const mousePosition2 = vue.ref(null);
          const isError = vue.computed(() => status.value === "error");
          const groupContext = context.inject();
          const {
            isPreviewGroup,
            setCurrent,
            setShowPreview: setGroupShowPreview,
            setMousePosition: setGroupMousePosition,
            registerImage
          } = groupContext;
          const currentId = vue.ref(uuid$1++);
          const canPreview = vue.computed(() => props.preview && !isError.value);
          const onLoad = () => {
            status.value = "normal";
          };
          const onError = (e2) => {
            status.value = "error";
            emit("error", e2);
          };
          const onPreview = (e2) => {
            if (!isControlled.value) {
              const {
                left,
                top
              } = getOffset(e2.target);
              if (isPreviewGroup.value) {
                setCurrent(currentId.value);
                setGroupMousePosition({
                  x: left,
                  y: top
                });
              } else {
                mousePosition2.value = {
                  x: left,
                  y: top
                };
              }
            }
            if (isPreviewGroup.value) {
              setGroupShowPreview(true);
            } else {
              setShowPreview(true);
            }
            emit("click", e2);
          };
          const onPreviewClose = () => {
            setShowPreview(false);
            if (!isControlled.value) {
              mousePosition2.value = null;
            }
          };
          const img = vue.ref(null);
          vue.watch(() => img, () => {
            if (status.value !== "loading")
              return;
            if (img.value.complete && (img.value.naturalWidth || img.value.naturalHeight)) {
              onLoad();
            }
          });
          let unRegister = () => {
          };
          vue.onMounted(() => {
            vue.watch([src, canPreview], () => {
              unRegister();
              if (!isPreviewGroup.value) {
                return () => {
                };
              }
              unRegister = registerImage(currentId.value, src.value, canPreview.value);
              if (!canPreview.value) {
                unRegister();
              }
            }, {
              flush: "post",
              immediate: true
            });
          });
          vue.onUnmounted(() => {
            unRegister();
          });
          const toSizePx = (l2) => {
            if (isNumber(l2))
              return l2 + "px";
            return l2;
          };
          return () => {
            const {
              prefixCls: prefixCls2,
              wrapperClassName,
              fallback,
              src: imgSrc,
              placeholder,
              wrapperStyle,
              rootClassName
            } = props;
            const {
              width,
              height,
              crossorigin,
              decoding,
              alt,
              sizes,
              srcset,
              usemap,
              class: cls,
              style: style2
            } = attrs;
            const _a = preview.value, {
              icons: icons2,
              maskClassName
            } = _a, dialogProps = __rest$1(_a, ["icons", "maskClassName"]);
            const wrappperClass = classNames(prefixCls2, wrapperClassName, rootClassName, {
              [`${prefixCls2}-error`]: isError.value
            });
            const mergedSrc = isError.value && fallback ? fallback : src.value;
            const imgCommonProps = {
              crossorigin,
              decoding,
              alt,
              sizes,
              srcset,
              usemap,
              width,
              height,
              class: classNames(`${prefixCls2}-img`, {
                [`${prefixCls2}-img-placeholder`]: placeholder === true
              }, cls),
              style: _extends({
                height: toSizePx(height)
              }, style2)
            };
            return vue.createVNode(vue.Fragment, null, [vue.createVNode("div", {
              "class": wrappperClass,
              "onClick": canPreview.value ? onPreview : (e2) => {
                emit("click", e2);
              },
              "style": _extends({
                width: toSizePx(width),
                height: toSizePx(height)
              }, wrapperStyle)
            }, [vue.createVNode("img", _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, imgCommonProps), isError.value && fallback ? {
              src: fallback
            } : {
              onLoad,
              onError,
              src: imgSrc
            }), {}, {
              "ref": img
            }), null), status.value === "loading" && vue.createVNode("div", {
              "aria-hidden": "true",
              "class": `${prefixCls2}-placeholder`
            }, [placeholder || slots.placeholder && slots.placeholder()]), slots.previewMask && canPreview.value && vue.createVNode("div", {
              "class": [`${prefixCls2}-mask`, maskClassName]
            }, [slots.previewMask()])]), !isPreviewGroup.value && canPreview.value && vue.createVNode(Preview$1, _objectSpread2$1(_objectSpread2$1({}, dialogProps), {}, {
              "aria-hidden": !isShowPreview.value,
              "visible": isShowPreview.value,
              "prefixCls": previewPrefixCls.value,
              "onClose": onPreviewClose,
              "mousePosition": mousePosition2.value,
              "src": mergedSrc,
              "alt": alt,
              "getContainer": getPreviewContainer.value,
              "icons": icons2,
              "rootClassName": rootClassName
            }), null)]);
          };
        }
      });
      ImageInternal.PreviewGroup = PreviewGroup$1;
      const Image$1 = ImageInternal;
      function box(position2) {
        return {
          position: position2,
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0
        };
      }
      const genModalMaskStyle = (token2) => {
        const {
          componentCls
        } = token2;
        return [{
          [`${componentCls}-root`]: {
            [`${componentCls}${token2.antCls}-zoom-enter, ${componentCls}${token2.antCls}-zoom-appear`]: {
              // reset scale avoid mousePosition bug
              transform: "none",
              opacity: 0,
              animationDuration: token2.motionDurationSlow,
              // https://github.com/ant-design/ant-design/issues/11777
              userSelect: "none"
            },
            [`${componentCls}${token2.antCls}-zoom-leave ${componentCls}-content`]: {
              pointerEvents: "none"
            },
            [`${componentCls}-mask`]: _extends(_extends({}, box("fixed")), {
              zIndex: token2.zIndexPopupBase,
              height: "100%",
              backgroundColor: token2.colorBgMask,
              [`${componentCls}-hidden`]: {
                display: "none"
              }
            }),
            [`${componentCls}-wrap`]: _extends(_extends({}, box("fixed")), {
              overflow: "auto",
              outline: 0,
              WebkitOverflowScrolling: "touch"
            })
          }
        }, {
          [`${componentCls}-root`]: initFadeMotion(token2)
        }];
      };
      const genModalStyle = (token2) => {
        const {
          componentCls
        } = token2;
        return [
          // ======================== Root =========================
          {
            [`${componentCls}-root`]: {
              [`${componentCls}-wrap`]: {
                zIndex: token2.zIndexPopupBase,
                position: "fixed",
                inset: 0,
                overflow: "auto",
                outline: 0,
                WebkitOverflowScrolling: "touch"
              },
              [`${componentCls}-wrap-rtl`]: {
                direction: "rtl"
              },
              [`${componentCls}-centered`]: {
                textAlign: "center",
                "&::before": {
                  display: "inline-block",
                  width: 0,
                  height: "100%",
                  verticalAlign: "middle",
                  content: '""'
                },
                [componentCls]: {
                  top: 0,
                  display: "inline-block",
                  paddingBottom: 0,
                  textAlign: "start",
                  verticalAlign: "middle"
                }
              },
              [`@media (max-width: ${token2.screenSMMax})`]: {
                [componentCls]: {
                  maxWidth: "calc(100vw - 16px)",
                  margin: `${token2.marginXS} auto`
                },
                [`${componentCls}-centered`]: {
                  [componentCls]: {
                    flex: 1
                  }
                }
              }
            }
          },
          // ======================== Modal ========================
          {
            [componentCls]: _extends(_extends({}, resetComponent(token2)), {
              pointerEvents: "none",
              position: "relative",
              top: 100,
              width: "auto",
              maxWidth: `calc(100vw - ${token2.margin * 2}px)`,
              margin: "0 auto",
              paddingBottom: token2.paddingLG,
              [`${componentCls}-title`]: {
                margin: 0,
                color: token2.modalHeadingColor,
                fontWeight: token2.fontWeightStrong,
                fontSize: token2.modalHeaderTitleFontSize,
                lineHeight: token2.modalHeaderTitleLineHeight,
                wordWrap: "break-word"
              },
              [`${componentCls}-content`]: {
                position: "relative",
                backgroundColor: token2.modalContentBg,
                backgroundClip: "padding-box",
                border: 0,
                borderRadius: token2.borderRadiusLG,
                boxShadow: token2.boxShadowSecondary,
                pointerEvents: "auto",
                padding: `${token2.paddingMD}px ${token2.paddingContentHorizontalLG}px`
              },
              [`${componentCls}-close`]: _extends({
                position: "absolute",
                top: (token2.modalHeaderCloseSize - token2.modalCloseBtnSize) / 2,
                insetInlineEnd: (token2.modalHeaderCloseSize - token2.modalCloseBtnSize) / 2,
                zIndex: token2.zIndexPopupBase + 10,
                padding: 0,
                color: token2.modalCloseColor,
                fontWeight: token2.fontWeightStrong,
                lineHeight: 1,
                textDecoration: "none",
                background: "transparent",
                borderRadius: token2.borderRadiusSM,
                width: token2.modalConfirmIconSize,
                height: token2.modalConfirmIconSize,
                border: 0,
                outline: 0,
                cursor: "pointer",
                transition: `color ${token2.motionDurationMid}, background-color ${token2.motionDurationMid}`,
                "&-x": {
                  display: "block",
                  fontSize: token2.fontSizeLG,
                  fontStyle: "normal",
                  lineHeight: `${token2.modalCloseBtnSize}px`,
                  textAlign: "center",
                  textTransform: "none",
                  textRendering: "auto"
                },
                "&:hover": {
                  color: token2.modalIconHoverColor,
                  backgroundColor: token2.wireframe ? "transparent" : token2.colorFillContent,
                  textDecoration: "none"
                },
                "&:active": {
                  backgroundColor: token2.wireframe ? "transparent" : token2.colorFillContentHover
                }
              }, genFocusStyle(token2)),
              [`${componentCls}-header`]: {
                color: token2.colorText,
                background: token2.modalHeaderBg,
                borderRadius: `${token2.borderRadiusLG}px ${token2.borderRadiusLG}px 0 0`,
                marginBottom: token2.marginXS
              },
              [`${componentCls}-body`]: {
                fontSize: token2.fontSize,
                lineHeight: token2.lineHeight,
                wordWrap: "break-word"
              },
              [`${componentCls}-footer`]: {
                textAlign: "end",
                background: token2.modalFooterBg,
                marginTop: token2.marginSM,
                [`${token2.antCls}-btn + ${token2.antCls}-btn:not(${token2.antCls}-dropdown-trigger)`]: {
                  marginBottom: 0,
                  marginInlineStart: token2.marginXS
                }
              },
              [`${componentCls}-open`]: {
                overflow: "hidden"
              }
            })
          },
          // ======================== Pure =========================
          {
            [`${componentCls}-pure-panel`]: {
              top: "auto",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              [`${componentCls}-content,
          ${componentCls}-body,
          ${componentCls}-confirm-body-wrapper`]: {
                display: "flex",
                flexDirection: "column",
                flex: "auto"
              },
              [`${componentCls}-confirm-body`]: {
                marginBottom: "auto"
              }
            }
          }
        ];
      };
      const genModalConfirmStyle = (token2) => {
        const {
          componentCls
        } = token2;
        const confirmComponentCls = `${componentCls}-confirm`;
        return {
          [confirmComponentCls]: {
            "&-rtl": {
              direction: "rtl"
            },
            [`${token2.antCls}-modal-header`]: {
              display: "none"
            },
            [`${confirmComponentCls}-body-wrapper`]: _extends({}, clearFix()),
            [`${confirmComponentCls}-body`]: {
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              [`${confirmComponentCls}-title`]: {
                flex: "0 0 100%",
                display: "block",
                // create BFC to avoid
                // https://user-images.githubusercontent.com/507615/37702510-ba844e06-2d2d-11e8-9b67-8e19be57f445.png
                overflow: "hidden",
                color: token2.colorTextHeading,
                fontWeight: token2.fontWeightStrong,
                fontSize: token2.modalHeaderTitleFontSize,
                lineHeight: token2.modalHeaderTitleLineHeight,
                [`+ ${confirmComponentCls}-content`]: {
                  marginBlockStart: token2.marginXS,
                  flexBasis: "100%",
                  maxWidth: `calc(100% - ${token2.modalConfirmIconSize + token2.marginSM}px)`
                }
              },
              [`${confirmComponentCls}-content`]: {
                color: token2.colorText,
                fontSize: token2.fontSize
              },
              [`> ${token2.iconCls}`]: {
                flex: "none",
                marginInlineEnd: token2.marginSM,
                fontSize: token2.modalConfirmIconSize,
                [`+ ${confirmComponentCls}-title`]: {
                  flex: 1
                },
                // `content` after `icon` should set marginLeft
                [`+ ${confirmComponentCls}-title + ${confirmComponentCls}-content`]: {
                  marginInlineStart: token2.modalConfirmIconSize + token2.marginSM
                }
              }
            },
            [`${confirmComponentCls}-btns`]: {
              textAlign: "end",
              marginTop: token2.marginSM,
              [`${token2.antCls}-btn + ${token2.antCls}-btn`]: {
                marginBottom: 0,
                marginInlineStart: token2.marginXS
              }
            }
          },
          [`${confirmComponentCls}-error ${confirmComponentCls}-body > ${token2.iconCls}`]: {
            color: token2.colorError
          },
          [`${confirmComponentCls}-warning ${confirmComponentCls}-body > ${token2.iconCls},
        ${confirmComponentCls}-confirm ${confirmComponentCls}-body > ${token2.iconCls}`]: {
            color: token2.colorWarning
          },
          [`${confirmComponentCls}-info ${confirmComponentCls}-body > ${token2.iconCls}`]: {
            color: token2.colorInfo
          },
          [`${confirmComponentCls}-success ${confirmComponentCls}-body > ${token2.iconCls}`]: {
            color: token2.colorSuccess
          },
          // https://github.com/ant-design/ant-design/issues/37329
          [`${componentCls}-zoom-leave ${componentCls}-btns`]: {
            pointerEvents: "none"
          }
        };
      };
      const genRTLStyle = (token2) => {
        const {
          componentCls
        } = token2;
        return {
          [`${componentCls}-root`]: {
            [`${componentCls}-wrap-rtl`]: {
              direction: "rtl",
              [`${componentCls}-confirm-body`]: {
                direction: "rtl"
              }
            }
          }
        };
      };
      const genWireframeStyle = (token2) => {
        const {
          componentCls,
          antCls
        } = token2;
        const confirmComponentCls = `${componentCls}-confirm`;
        return {
          [componentCls]: {
            [`${componentCls}-content`]: {
              padding: 0
            },
            [`${componentCls}-header`]: {
              padding: token2.modalHeaderPadding,
              borderBottom: `${token2.modalHeaderBorderWidth}px ${token2.modalHeaderBorderStyle} ${token2.modalHeaderBorderColorSplit}`,
              marginBottom: 0
            },
            [`${componentCls}-body`]: {
              padding: token2.modalBodyPadding
            },
            [`${componentCls}-footer`]: {
              padding: `${token2.modalFooterPaddingVertical}px ${token2.modalFooterPaddingHorizontal}px`,
              borderTop: `${token2.modalFooterBorderWidth}px ${token2.modalFooterBorderStyle} ${token2.modalFooterBorderColorSplit}`,
              borderRadius: `0 0 ${token2.borderRadiusLG}px ${token2.borderRadiusLG}px`,
              marginTop: 0
            }
          },
          [confirmComponentCls]: {
            [`${antCls}-modal-body`]: {
              padding: `${token2.padding * 2}px ${token2.padding * 2}px ${token2.paddingLG}px`
            },
            [`${confirmComponentCls}-body`]: {
              [`> ${token2.iconCls}`]: {
                marginInlineEnd: token2.margin,
                // `content` after `icon` should set marginLeft
                [`+ ${confirmComponentCls}-title + ${confirmComponentCls}-content`]: {
                  marginInlineStart: token2.modalConfirmIconSize + token2.margin
                }
              }
            },
            [`${confirmComponentCls}-btns`]: {
              marginTop: token2.marginLG
            }
          }
        };
      };
      const useStyle$1 = genComponentStyleHook("Modal", (token2) => {
        const headerPaddingVertical = token2.padding;
        const headerFontSize = token2.fontSizeHeading5;
        const headerLineHeight = token2.lineHeightHeading5;
        const modalToken = merge(token2, {
          modalBodyPadding: token2.paddingLG,
          modalHeaderBg: token2.colorBgElevated,
          modalHeaderPadding: `${headerPaddingVertical}px ${token2.paddingLG}px`,
          modalHeaderBorderWidth: token2.lineWidth,
          modalHeaderBorderStyle: token2.lineType,
          modalHeaderTitleLineHeight: headerLineHeight,
          modalHeaderTitleFontSize: headerFontSize,
          modalHeaderBorderColorSplit: token2.colorSplit,
          modalHeaderCloseSize: headerLineHeight * headerFontSize + headerPaddingVertical * 2,
          modalContentBg: token2.colorBgElevated,
          modalHeadingColor: token2.colorTextHeading,
          modalCloseColor: token2.colorTextDescription,
          modalFooterBg: "transparent",
          modalFooterBorderColorSplit: token2.colorSplit,
          modalFooterBorderStyle: token2.lineType,
          modalFooterPaddingVertical: token2.paddingXS,
          modalFooterPaddingHorizontal: token2.padding,
          modalFooterBorderWidth: token2.lineWidth,
          modalConfirmTitleFontSize: token2.fontSizeLG,
          modalIconHoverColor: token2.colorIconHover,
          modalConfirmIconSize: token2.fontSize * token2.lineHeight,
          modalCloseBtnSize: token2.controlHeightLG * 0.55
        });
        return [genModalStyle(modalToken), genModalConfirmStyle(modalToken), genRTLStyle(modalToken), genModalMaskStyle(modalToken), token2.wireframe && genWireframeStyle(modalToken), initZoomMotion(modalToken, "zoom")];
      });
      const genBoxStyle = (position2) => ({
        position: position2 || "absolute",
        inset: 0
      });
      const genImageMaskStyle = (token2) => {
        const {
          iconCls,
          motionDurationSlow,
          paddingXXS,
          marginXXS,
          prefixCls
        } = token2;
        return {
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          background: new TinyColor("#000").setAlpha(0.5).toRgbString(),
          cursor: "pointer",
          opacity: 0,
          transition: `opacity ${motionDurationSlow}`,
          [`.${prefixCls}-mask-info`]: _extends(_extends({}, textEllipsis), {
            padding: `0 ${paddingXXS}px`,
            [iconCls]: {
              marginInlineEnd: marginXXS,
              svg: {
                verticalAlign: "baseline"
              }
            }
          })
        };
      };
      const genPreviewOperationsStyle = (token2) => {
        const {
          previewCls,
          modalMaskBg,
          paddingSM,
          previewOperationColorDisabled,
          motionDurationSlow
        } = token2;
        const operationBg = new TinyColor(modalMaskBg).setAlpha(0.1);
        const operationBgHover = operationBg.clone().setAlpha(0.2);
        return {
          [`${previewCls}-operations`]: _extends(_extends({}, resetComponent(token2)), {
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            color: token2.previewOperationColor,
            listStyle: "none",
            background: operationBg.toRgbString(),
            pointerEvents: "auto",
            "&-operation": {
              marginInlineStart: paddingSM,
              padding: paddingSM,
              cursor: "pointer",
              transition: `all ${motionDurationSlow}`,
              userSelect: "none",
              "&:hover": {
                background: operationBgHover.toRgbString()
              },
              "&-disabled": {
                color: previewOperationColorDisabled,
                pointerEvents: "none"
              },
              "&:last-of-type": {
                marginInlineStart: 0
              }
            },
            "&-progress": {
              position: "absolute",
              left: {
                _skip_check_: true,
                value: "50%"
              },
              transform: "translateX(-50%)"
            },
            "&-icon": {
              fontSize: token2.previewOperationSize
            }
          })
        };
      };
      const genPreviewSwitchStyle = (token2) => {
        const {
          modalMaskBg,
          iconCls,
          previewOperationColorDisabled,
          previewCls,
          zIndexPopup,
          motionDurationSlow
        } = token2;
        const operationBg = new TinyColor(modalMaskBg).setAlpha(0.1);
        const operationBgHover = operationBg.clone().setAlpha(0.2);
        return {
          [`${previewCls}-switch-left, ${previewCls}-switch-right`]: {
            position: "fixed",
            insetBlockStart: "50%",
            zIndex: zIndexPopup + 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: token2.imagePreviewSwitchSize,
            height: token2.imagePreviewSwitchSize,
            marginTop: -token2.imagePreviewSwitchSize / 2,
            color: token2.previewOperationColor,
            background: operationBg.toRgbString(),
            borderRadius: "50%",
            transform: `translateY(-50%)`,
            cursor: "pointer",
            transition: `all ${motionDurationSlow}`,
            pointerEvents: "auto",
            userSelect: "none",
            "&:hover": {
              background: operationBgHover.toRgbString()
            },
            [`&-disabled`]: {
              "&, &:hover": {
                color: previewOperationColorDisabled,
                background: "transparent",
                cursor: "not-allowed",
                [`> ${iconCls}`]: {
                  cursor: "not-allowed"
                }
              }
            },
            [`> ${iconCls}`]: {
              fontSize: token2.previewOperationSize
            }
          },
          [`${previewCls}-switch-left`]: {
            insetInlineStart: token2.marginSM
          },
          [`${previewCls}-switch-right`]: {
            insetInlineEnd: token2.marginSM
          }
        };
      };
      const genImagePreviewStyle = (token2) => {
        const {
          motionEaseOut,
          previewCls,
          motionDurationSlow,
          componentCls
        } = token2;
        return [
          {
            [`${componentCls}-preview-root`]: {
              [previewCls]: {
                height: "100%",
                textAlign: "center",
                pointerEvents: "none"
              },
              [`${previewCls}-body`]: _extends(_extends({}, genBoxStyle()), {
                overflow: "hidden"
              }),
              [`${previewCls}-img`]: {
                maxWidth: "100%",
                maxHeight: "100%",
                verticalAlign: "middle",
                transform: "scale3d(1, 1, 1)",
                cursor: "grab",
                transition: `transform ${motionDurationSlow} ${motionEaseOut} 0s`,
                userSelect: "none",
                pointerEvents: "auto",
                "&-wrapper": _extends(_extends({}, genBoxStyle()), {
                  transition: `transform ${motionDurationSlow} ${motionEaseOut} 0s`,
                  // https://github.com/ant-design/ant-design/issues/39913
                  // TailwindCSS will reset img default style.
                  // Let's set back.
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&::before": {
                    display: "inline-block",
                    width: 1,
                    height: "50%",
                    marginInlineEnd: -1,
                    content: '""'
                  }
                })
              },
              [`${previewCls}-moving`]: {
                [`${previewCls}-preview-img`]: {
                  cursor: "grabbing",
                  "&-wrapper": {
                    transitionDuration: "0s"
                  }
                }
              }
            }
          },
          // Override
          {
            [`${componentCls}-preview-root`]: {
              [`${previewCls}-wrap`]: {
                zIndex: token2.zIndexPopup
              }
            }
          },
          // Preview operations & switch
          {
            [`${componentCls}-preview-operations-wrapper`]: {
              position: "fixed",
              insetBlockStart: 0,
              insetInlineEnd: 0,
              zIndex: token2.zIndexPopup + 1,
              width: "100%"
            },
            "&": [genPreviewOperationsStyle(token2), genPreviewSwitchStyle(token2)]
          }
        ];
      };
      const genImageStyle = (token2) => {
        const {
          componentCls
        } = token2;
        return {
          // ============================== image ==============================
          [componentCls]: {
            position: "relative",
            display: "inline-block",
            [`${componentCls}-img`]: {
              width: "100%",
              height: "auto",
              verticalAlign: "middle"
            },
            [`${componentCls}-img-placeholder`]: {
              backgroundColor: token2.colorBgContainerDisabled,
              backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "30%"
            },
            [`${componentCls}-mask`]: _extends({}, genImageMaskStyle(token2)),
            [`${componentCls}-mask:hover`]: {
              opacity: 1
            },
            [`${componentCls}-placeholder`]: _extends({}, genBoxStyle())
          }
        };
      };
      const genPreviewMotion = (token2) => {
        const {
          previewCls
        } = token2;
        return {
          [`${previewCls}-root`]: initZoomMotion(token2, "zoom"),
          [`&`]: initFadeMotion(token2, true)
        };
      };
      const useStyle = genComponentStyleHook("Image", (token2) => {
        const previewCls = `${token2.componentCls}-preview`;
        const imageToken = merge(token2, {
          previewCls,
          modalMaskBg: new TinyColor("#000").setAlpha(0.45).toRgbString(),
          imagePreviewSwitchSize: token2.controlHeightLG
        });
        return [genImageStyle(imageToken), genImagePreviewStyle(imageToken), genModalMaskStyle(merge(imageToken, {
          componentCls: previewCls
        })), genPreviewMotion(imageToken)];
      }, (token2) => ({
        zIndexPopup: token2.zIndexPopupBase + 80,
        previewOperationColor: new TinyColor(token2.colorTextLightSolid).toRgbString(),
        previewOperationColorDisabled: new TinyColor(token2.colorTextLightSolid).setAlpha(0.25).toRgbString(),
        previewOperationSize: token2.fontSizeIcon * 1.5
        // FIXME: fontSizeIconLG
      }));
      const icons = {
        rotateLeft: vue.createVNode(RotateLeftOutlined$1, null, null),
        rotateRight: vue.createVNode(RotateRightOutlined$1, null, null),
        zoomIn: vue.createVNode(ZoomInOutlined$1, null, null),
        zoomOut: vue.createVNode(ZoomOutOutlined$1, null, null),
        close: vue.createVNode(CloseOutlined$2, null, null),
        left: vue.createVNode(LeftOutlined$1, null, null),
        right: vue.createVNode(RightOutlined$1, null, null),
        flipX: vue.createVNode(SwapOutlined$1, null, null),
        flipY: vue.createVNode(SwapOutlined$1, {
          "rotate": 90
        }, null)
      };
      const previewGroupProps = () => ({
        previewPrefixCls: String,
        preview: anyType()
      });
      const InternalPreviewGroup = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "AImagePreviewGroup",
        inheritAttrs: false,
        props: previewGroupProps(),
        setup(props, _ref) {
          let {
            attrs,
            slots
          } = _ref;
          const {
            prefixCls,
            rootPrefixCls
          } = useConfigInject("image", props);
          const previewPrefixCls = vue.computed(() => `${prefixCls.value}-preview`);
          const [wrapSSR, hashId] = useStyle(prefixCls);
          const mergedPreview = vue.computed(() => {
            const {
              preview
            } = props;
            if (preview === false) {
              return preview;
            }
            const _preview = typeof preview === "object" ? preview : {};
            return _extends(_extends({}, _preview), {
              rootClassName: hashId.value,
              transitionName: getTransitionName(rootPrefixCls.value, "zoom", _preview.transitionName),
              maskTransitionName: getTransitionName(rootPrefixCls.value, "fade", _preview.maskTransitionName)
            });
          });
          return () => {
            return wrapSSR(vue.createVNode(PreviewGroup$1, _objectSpread2$1(_objectSpread2$1({}, _extends(_extends({}, attrs), props)), {}, {
              "preview": mergedPreview.value,
              "icons": icons,
              "previewPrefixCls": previewPrefixCls.value
            }), slots));
          };
        }
      });
      const PreviewGroup = InternalPreviewGroup;
      const Image = vue.defineComponent({
        name: "AImage",
        inheritAttrs: false,
        props: imageProps(),
        setup(props, _ref) {
          let {
            slots,
            attrs
          } = _ref;
          const {
            prefixCls,
            rootPrefixCls,
            configProvider
          } = useConfigInject("image", props);
          const [wrapSSR, hashId] = useStyle(prefixCls);
          const mergedPreview = vue.computed(() => {
            const {
              preview
            } = props;
            if (preview === false) {
              return preview;
            }
            const _preview = typeof preview === "object" ? preview : {};
            return _extends(_extends({
              icons
            }, _preview), {
              transitionName: getTransitionName(rootPrefixCls.value, "zoom", _preview.transitionName),
              maskTransitionName: getTransitionName(rootPrefixCls.value, "fade", _preview.maskTransitionName)
            });
          });
          return () => {
            var _a, _b;
            const imageLocale = ((_b = (_a = configProvider.locale) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.Image) || defaultLocale.Image;
            const defaultPreviewMask = () => vue.createVNode("div", {
              "class": `${prefixCls.value}-mask-info`
            }, [vue.createVNode(EyeOutlined$1, null, null), imageLocale === null || imageLocale === void 0 ? void 0 : imageLocale.preview]);
            const {
              previewMask = slots.previewMask || defaultPreviewMask
            } = props;
            return wrapSSR(vue.createVNode(Image$1, _objectSpread2$1(_objectSpread2$1({}, _extends(_extends(_extends({}, attrs), props), {
              prefixCls: prefixCls.value
            })), {}, {
              "preview": mergedPreview.value,
              "rootClassName": classNames(props.rootClassName, hashId.value)
            }), _extends(_extends({}, slots), {
              previewMask: typeof previewMask === "function" ? previewMask : null
            })));
          };
        }
      });
      Image.PreviewGroup = PreviewGroup;
      Image.install = function(app) {
        app.component(Image.name, Image);
        app.component(Image.PreviewGroup.name, Image.PreviewGroup);
        return app;
      };
      const __unplugin_components_0 = Image;
      var __rest = globalThis && globalThis.__rest || function(s2, e2) {
        var t2 = {};
        for (var p in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
            t2[p] = s2[p];
        if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
            if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
              t2[p[i2]] = s2[p[i2]];
          }
        return t2;
      };
      let mousePosition;
      const getClickPosition = (e2) => {
        mousePosition = {
          x: e2.pageX,
          y: e2.pageY
        };
        setTimeout(() => mousePosition = null, 100);
      };
      if (canUseDocElement()) {
        addEventListenerWrap(document.documentElement, "click", getClickPosition, true);
      }
      const modalProps = () => ({
        prefixCls: String,
        /** @deprecated Please use `open` instead. */
        visible: {
          type: Boolean,
          default: void 0
        },
        open: {
          type: Boolean,
          default: void 0
        },
        confirmLoading: {
          type: Boolean,
          default: void 0
        },
        title: PropTypes$1.any,
        closable: {
          type: Boolean,
          default: void 0
        },
        closeIcon: PropTypes$1.any,
        onOk: Function,
        onCancel: Function,
        "onUpdate:visible": Function,
        "onUpdate:open": Function,
        onChange: Function,
        afterClose: Function,
        centered: {
          type: Boolean,
          default: void 0
        },
        width: [String, Number],
        footer: PropTypes$1.any,
        okText: PropTypes$1.any,
        okType: String,
        cancelText: PropTypes$1.any,
        icon: PropTypes$1.any,
        maskClosable: {
          type: Boolean,
          default: void 0
        },
        forceRender: {
          type: Boolean,
          default: void 0
        },
        okButtonProps: objectType(),
        cancelButtonProps: objectType(),
        destroyOnClose: {
          type: Boolean,
          default: void 0
        },
        wrapClassName: String,
        maskTransitionName: String,
        transitionName: String,
        getContainer: {
          type: [String, Function, Boolean, Object],
          default: void 0
        },
        zIndex: Number,
        bodyStyle: objectType(),
        maskStyle: objectType(),
        mask: {
          type: Boolean,
          default: void 0
        },
        keyboard: {
          type: Boolean,
          default: void 0
        },
        wrapProps: Object,
        focusTriggerAfterClose: {
          type: Boolean,
          default: void 0
        },
        modalRender: Function,
        mousePosition: objectType()
      });
      const Modal = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "AModal",
        inheritAttrs: false,
        props: initDefaultProps$1(modalProps(), {
          width: 520,
          confirmLoading: false,
          okType: "primary"
        }),
        setup(props, _ref) {
          let {
            emit,
            slots,
            attrs
          } = _ref;
          const [locale2] = useLocaleReceiver("Modal");
          const {
            prefixCls,
            rootPrefixCls,
            direction,
            getPopupContainer
          } = useConfigInject("modal", props);
          const [wrapSSR, hashId] = useStyle$1(prefixCls);
          warning$2(props.visible === void 0);
          const handleCancel = (e2) => {
            emit("update:visible", false);
            emit("update:open", false);
            emit("cancel", e2);
            emit("change", false);
          };
          const handleOk = (e2) => {
            emit("ok", e2);
          };
          const renderFooter = () => {
            var _a, _b;
            const {
              okText = (_a = slots.okText) === null || _a === void 0 ? void 0 : _a.call(slots),
              okType,
              cancelText = (_b = slots.cancelText) === null || _b === void 0 ? void 0 : _b.call(slots),
              confirmLoading
            } = props;
            return vue.createVNode(vue.Fragment, null, [vue.createVNode(Button, _objectSpread2$1({
              "onClick": handleCancel
            }, props.cancelButtonProps), {
              default: () => [cancelText || locale2.value.cancelText]
            }), vue.createVNode(Button, _objectSpread2$1(_objectSpread2$1({}, convertLegacyProps(okType)), {}, {
              "loading": confirmLoading,
              "onClick": handleOk
            }, props.okButtonProps), {
              default: () => [okText || locale2.value.okText]
            })]);
          };
          return () => {
            var _a, _b;
            const {
              prefixCls: customizePrefixCls,
              visible,
              open,
              wrapClassName,
              centered,
              getContainer: getContainer2,
              closeIcon = (_a = slots.closeIcon) === null || _a === void 0 ? void 0 : _a.call(slots),
              focusTriggerAfterClose = true
            } = props, restProps = __rest(props, ["prefixCls", "visible", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose"]);
            const wrapClassNameExtended = classNames(wrapClassName, {
              [`${prefixCls.value}-centered`]: !!centered,
              [`${prefixCls.value}-wrap-rtl`]: direction.value === "rtl"
            });
            return wrapSSR(vue.createVNode(DialogWrap$1, _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, restProps), attrs), {}, {
              "rootClassName": hashId.value,
              "class": classNames(hashId.value, attrs.class),
              "getContainer": getContainer2 || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.value),
              "prefixCls": prefixCls.value,
              "wrapClassName": wrapClassNameExtended,
              "visible": open !== null && open !== void 0 ? open : visible,
              "onClose": handleCancel,
              "focusTriggerAfterClose": focusTriggerAfterClose,
              "transitionName": getTransitionName(rootPrefixCls.value, "zoom", props.transitionName),
              "maskTransitionName": getTransitionName(rootPrefixCls.value, "fade", props.maskTransitionName),
              "mousePosition": (_b = restProps.mousePosition) !== null && _b !== void 0 ? _b : mousePosition
            }), _extends(_extends({}, slots), {
              footer: slots.footer || renderFooter,
              closeIcon: () => {
                return vue.createVNode("span", {
                  "class": `${prefixCls.value}-close-x`
                }, [closeIcon || vue.createVNode(CloseOutlined$2, {
                  "class": `${prefixCls.value}-close-icon`
                }, null)]);
              }
            })));
          };
        }
      });
      const useDestroyed = () => {
        const destroyed = vue.shallowRef(false);
        vue.onBeforeUnmount(() => {
          destroyed.value = true;
        });
        return destroyed;
      };
      const useDestroyed$1 = useDestroyed;
      const actionButtonProps = {
        type: {
          type: String
        },
        actionFn: Function,
        close: Function,
        autofocus: Boolean,
        prefixCls: String,
        buttonProps: objectType(),
        emitEvent: Boolean,
        quitOnNullishReturnValue: Boolean
      };
      function isThenable(thing) {
        return !!(thing && thing.then);
      }
      const ActionButton = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "ActionButton",
        props: actionButtonProps,
        setup(props, _ref) {
          let {
            slots
          } = _ref;
          const clickedRef = vue.shallowRef(false);
          const buttonRef = vue.shallowRef();
          const loading = vue.shallowRef(false);
          let timeoutId;
          const isDestroyed = useDestroyed$1();
          vue.onMounted(() => {
            if (props.autofocus) {
              timeoutId = setTimeout(() => {
                var _a, _b;
                return (_b = (_a = findDOMNode(buttonRef.value)) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
              });
            }
          });
          vue.onBeforeUnmount(() => {
            clearTimeout(timeoutId);
          });
          const onInternalClose = function() {
            var _a;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            (_a = props.close) === null || _a === void 0 ? void 0 : _a.call(props, ...args);
          };
          const handlePromiseOnOk = (returnValueOfOnOk) => {
            if (!isThenable(returnValueOfOnOk)) {
              return;
            }
            loading.value = true;
            returnValueOfOnOk.then(function() {
              if (!isDestroyed.value) {
                loading.value = false;
              }
              onInternalClose(...arguments);
              clickedRef.value = false;
            }, (e2) => {
              if (!isDestroyed.value) {
                loading.value = false;
              }
              clickedRef.value = false;
              return Promise.reject(e2);
            });
          };
          const onClick = (e2) => {
            const {
              actionFn
            } = props;
            if (clickedRef.value) {
              return;
            }
            clickedRef.value = true;
            if (!actionFn) {
              onInternalClose();
              return;
            }
            let returnValueOfOnOk;
            if (props.emitEvent) {
              returnValueOfOnOk = actionFn(e2);
              if (props.quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
                clickedRef.value = false;
                onInternalClose(e2);
                return;
              }
            } else if (actionFn.length) {
              returnValueOfOnOk = actionFn(props.close);
              clickedRef.value = false;
            } else {
              returnValueOfOnOk = actionFn();
              if (!returnValueOfOnOk) {
                onInternalClose();
                return;
              }
            }
            handlePromiseOnOk(returnValueOfOnOk);
          };
          return () => {
            const {
              type,
              prefixCls,
              buttonProps: buttonProps2
            } = props;
            return vue.createVNode(Button, _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, convertLegacyProps(type)), {}, {
              "onClick": onClick,
              "loading": loading.value,
              "prefixCls": prefixCls
            }, buttonProps2), {}, {
              "ref": buttonRef
            }), slots);
          };
        }
      });
      function renderSomeContent(someContent) {
        if (typeof someContent === "function") {
          return someContent();
        }
        return someContent;
      }
      const ConfirmDialog = vue.defineComponent({
        name: "ConfirmDialog",
        inheritAttrs: false,
        props: ["icon", "onCancel", "onOk", "close", "closable", "zIndex", "afterClose", "visible", "open", "keyboard", "centered", "getContainer", "maskStyle", "okButtonProps", "cancelButtonProps", "okType", "prefixCls", "okCancel", "width", "mask", "maskClosable", "okText", "cancelText", "autoFocusButton", "transitionName", "maskTransitionName", "type", "title", "content", "direction", "rootPrefixCls", "bodyStyle", "closeIcon", "modalRender", "focusTriggerAfterClose", "wrapClassName", "confirmPrefixCls", "footer"],
        setup(props, _ref) {
          let {
            attrs
          } = _ref;
          const [locale2] = useLocaleReceiver("Modal");
          return () => {
            const {
              icon,
              onCancel,
              onOk,
              close,
              okText,
              closable = false,
              zIndex,
              afterClose,
              keyboard,
              centered,
              getContainer: getContainer2,
              maskStyle,
              okButtonProps,
              cancelButtonProps,
              okCancel,
              width = 416,
              mask = true,
              maskClosable = false,
              type,
              open,
              title,
              content,
              direction,
              closeIcon,
              modalRender,
              focusTriggerAfterClose,
              rootPrefixCls,
              bodyStyle,
              wrapClassName,
              footer
            } = props;
            let mergedIcon = icon;
            if (!icon && icon !== null) {
              switch (type) {
                case "info":
                  mergedIcon = vue.createVNode(InfoCircleFilled$1, null, null);
                  break;
                case "success":
                  mergedIcon = vue.createVNode(CheckCircleFilled$1, null, null);
                  break;
                case "error":
                  mergedIcon = vue.createVNode(CloseCircleFilled$1, null, null);
                  break;
                default:
                  mergedIcon = vue.createVNode(ExclamationCircleFilled$1, null, null);
              }
            }
            const okType = props.okType || "primary";
            const prefixCls = props.prefixCls || "ant-modal";
            const contentPrefixCls = `${prefixCls}-confirm`;
            const style2 = attrs.style || {};
            const mergedOkCancel = okCancel !== null && okCancel !== void 0 ? okCancel : type === "confirm";
            const autoFocusButton = props.autoFocusButton === null ? false : props.autoFocusButton || "ok";
            const confirmPrefixCls = `${prefixCls}-confirm`;
            const classString = classNames(confirmPrefixCls, `${confirmPrefixCls}-${props.type}`, {
              [`${confirmPrefixCls}-rtl`]: direction === "rtl"
            }, attrs.class);
            const mergedLocal = locale2.value;
            const cancelButton = mergedOkCancel && vue.createVNode(ActionButton, {
              "actionFn": onCancel,
              "close": close,
              "autofocus": autoFocusButton === "cancel",
              "buttonProps": cancelButtonProps,
              "prefixCls": `${rootPrefixCls}-btn`
            }, {
              default: () => [renderSomeContent(props.cancelText) || mergedLocal.cancelText]
            });
            return vue.createVNode(Modal, {
              "prefixCls": prefixCls,
              "class": classString,
              "wrapClassName": classNames({
                [`${confirmPrefixCls}-centered`]: !!centered
              }, wrapClassName),
              "onCancel": (e2) => close === null || close === void 0 ? void 0 : close({
                triggerCancel: true
              }, e2),
              "open": open,
              "title": "",
              "footer": "",
              "transitionName": getTransitionName(rootPrefixCls, "zoom", props.transitionName),
              "maskTransitionName": getTransitionName(rootPrefixCls, "fade", props.maskTransitionName),
              "mask": mask,
              "maskClosable": maskClosable,
              "maskStyle": maskStyle,
              "style": style2,
              "bodyStyle": bodyStyle,
              "width": width,
              "zIndex": zIndex,
              "afterClose": afterClose,
              "keyboard": keyboard,
              "centered": centered,
              "getContainer": getContainer2,
              "closable": closable,
              "closeIcon": closeIcon,
              "modalRender": modalRender,
              "focusTriggerAfterClose": focusTriggerAfterClose
            }, {
              default: () => [vue.createVNode("div", {
                "class": `${contentPrefixCls}-body-wrapper`
              }, [vue.createVNode("div", {
                "class": `${contentPrefixCls}-body`
              }, [renderSomeContent(mergedIcon), title === void 0 ? null : vue.createVNode("span", {
                "class": `${contentPrefixCls}-title`
              }, [renderSomeContent(title)]), vue.createVNode("div", {
                "class": `${contentPrefixCls}-content`
              }, [renderSomeContent(content)])]), footer !== void 0 ? renderSomeContent(footer) : vue.createVNode("div", {
                "class": `${contentPrefixCls}-btns`
              }, [cancelButton, vue.createVNode(ActionButton, {
                "type": okType,
                "actionFn": onOk,
                "close": close,
                "autofocus": autoFocusButton === "ok",
                "buttonProps": okButtonProps,
                "prefixCls": `${rootPrefixCls}-btn`
              }, {
                default: () => [renderSomeContent(okText) || (mergedOkCancel ? mergedLocal.okText : mergedLocal.justOkText)]
              })])])]
            });
          };
        }
      });
      const destroyFns = [];
      const destroyFns$1 = destroyFns;
      const confirm = (config) => {
        const container = document.createDocumentFragment();
        let currentConfig = _extends(_extends({}, omit(config, ["parentContext", "appContext"])), {
          close,
          open: true
        });
        let confirmDialogInstance = null;
        function destroy() {
          if (confirmDialogInstance) {
            vue.render(null, container);
            confirmDialogInstance.component.update();
            confirmDialogInstance = null;
          }
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          const triggerCancel = args.some((param) => param && param.triggerCancel);
          if (config.onCancel && triggerCancel) {
            config.onCancel(() => {
            }, ...args.slice(1));
          }
          for (let i2 = 0; i2 < destroyFns$1.length; i2++) {
            const fn = destroyFns$1[i2];
            if (fn === close) {
              destroyFns$1.splice(i2, 1);
              break;
            }
          }
        }
        function close() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          currentConfig = _extends(_extends({}, currentConfig), {
            open: false,
            afterClose: () => {
              if (typeof config.afterClose === "function") {
                config.afterClose();
              }
              destroy.apply(this, args);
            }
          });
          if (currentConfig.visible) {
            delete currentConfig.visible;
          }
          update(currentConfig);
        }
        function update(configUpdate) {
          if (typeof configUpdate === "function") {
            currentConfig = configUpdate(currentConfig);
          } else {
            currentConfig = _extends(_extends({}, currentConfig), configUpdate);
          }
          if (confirmDialogInstance) {
            _extends(confirmDialogInstance.component.props, currentConfig);
            confirmDialogInstance.component.update();
          }
        }
        const Wrapper = (p) => {
          const global2 = globalConfigForApi;
          const rootPrefixCls = global2.prefixCls;
          const prefixCls = p.prefixCls || `${rootPrefixCls}-modal`;
          const iconPrefixCls = global2.iconPrefixCls;
          const runtimeLocale2 = getConfirmLocale();
          return vue.createVNode(ConfigProvider$1, _objectSpread2$1(_objectSpread2$1({}, global2), {}, {
            "prefixCls": rootPrefixCls
          }), {
            default: () => [vue.createVNode(ConfirmDialog, _objectSpread2$1(_objectSpread2$1({}, p), {}, {
              "rootPrefixCls": rootPrefixCls,
              "prefixCls": prefixCls,
              "iconPrefixCls": iconPrefixCls,
              "locale": runtimeLocale2,
              "cancelText": p.cancelText || runtimeLocale2.cancelText
            }), null)]
          });
        };
        function render$1(props) {
          const vm = vue.createVNode(Wrapper, _extends({}, props));
          vm.appContext = config.parentContext || config.appContext || vm.appContext;
          vue.render(vm, container);
          return vm;
        }
        confirmDialogInstance = render$1(currentConfig);
        destroyFns$1.push(close);
        return {
          destroy: close,
          update
        };
      };
      const confirm$1 = confirm;
      function withWarn(props) {
        return _extends(_extends({}, props), {
          type: "warning"
        });
      }
      function withInfo(props) {
        return _extends(_extends({}, props), {
          type: "info"
        });
      }
      function withSuccess(props) {
        return _extends(_extends({}, props), {
          type: "success"
        });
      }
      function withError(props) {
        return _extends(_extends({}, props), {
          type: "error"
        });
      }
      function withConfirm(props) {
        return _extends(_extends({}, props), {
          type: "confirm"
        });
      }
      const comfirmFuncProps = () => ({
        config: Object,
        afterClose: Function,
        destroyAction: Function,
        open: Boolean
      });
      const HookModal = vue.defineComponent({
        name: "HookModal",
        inheritAttrs: false,
        props: initDefaultProps$1(comfirmFuncProps(), {
          config: {
            width: 520,
            okType: "primary"
          }
        }),
        setup(props, _ref) {
          let {
            expose
          } = _ref;
          var _a;
          const open = vue.computed(() => props.open);
          const innerConfig = vue.computed(() => props.config);
          const {
            direction,
            getPrefixCls
          } = useConfigContextInject();
          const prefixCls = getPrefixCls("modal");
          const rootPrefixCls = getPrefixCls();
          const afterClose = () => {
            var _a2, _b;
            props === null || props === void 0 ? void 0 : props.afterClose();
            (_b = (_a2 = innerConfig.value).afterClose) === null || _b === void 0 ? void 0 : _b.call(_a2);
          };
          const close = function() {
            props.destroyAction(...arguments);
          };
          expose({
            destroy: close
          });
          const mergedOkCancel = (_a = innerConfig.value.okCancel) !== null && _a !== void 0 ? _a : innerConfig.value.type === "confirm";
          const [contextLocale] = useLocaleReceiver("Modal", defaultLocale.Modal);
          return () => vue.createVNode(ConfirmDialog, _objectSpread2$1(_objectSpread2$1({
            "prefixCls": prefixCls,
            "rootPrefixCls": rootPrefixCls
          }, innerConfig.value), {}, {
            "close": close,
            "open": open.value,
            "afterClose": afterClose,
            "okText": innerConfig.value.okText || (mergedOkCancel ? contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.value.okText : contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.value.justOkText),
            "direction": innerConfig.value.direction || direction.value,
            "cancelText": innerConfig.value.cancelText || (contextLocale === null || contextLocale === void 0 ? void 0 : contextLocale.value.cancelText)
          }), null);
        }
      });
      let uuid = 0;
      const ElementsHolder = vue.defineComponent({
        name: "ElementsHolder",
        inheritAttrs: false,
        setup(_2, _ref) {
          let {
            expose
          } = _ref;
          const modals = vue.shallowRef([]);
          const addModal = (modal) => {
            modals.value.push(modal);
            modals.value = modals.value.slice();
            return () => {
              modals.value = modals.value.filter((currentModal) => currentModal !== modal);
            };
          };
          expose({
            addModal
          });
          return () => {
            return modals.value.map((modal) => modal());
          };
        }
      });
      function useModal() {
        const holderRef = vue.shallowRef(null);
        const actionQueue = vue.shallowRef([]);
        vue.watch(actionQueue, () => {
          if (actionQueue.value.length) {
            const cloneQueue = [...actionQueue.value];
            cloneQueue.forEach((action) => {
              action();
            });
            actionQueue.value = [];
          }
        }, {
          immediate: true
        });
        const getConfirmFunc = (withFunc) => function hookConfirm(config) {
          var _a;
          uuid += 1;
          const open = vue.shallowRef(true);
          const modalRef = vue.shallowRef(null);
          const configRef = vue.shallowRef(vue.unref(config));
          const updateConfig = vue.shallowRef({});
          vue.watch(() => config, (val) => {
            updateAction(_extends(_extends({}, vue.isRef(val) ? val.value : val), updateConfig.value));
          });
          const destroyAction = function() {
            open.value = false;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            const triggerCancel = args.some((param) => param && param.triggerCancel);
            if (configRef.value.onCancel && triggerCancel) {
              configRef.value.onCancel(() => {
              }, ...args.slice(1));
            }
          };
          let closeFunc;
          const modal = () => vue.createVNode(HookModal, {
            "key": `modal-${uuid}`,
            "config": withFunc(configRef.value),
            "ref": modalRef,
            "open": open.value,
            "destroyAction": destroyAction,
            "afterClose": () => {
              closeFunc === null || closeFunc === void 0 ? void 0 : closeFunc();
            }
          }, null);
          closeFunc = (_a = holderRef.value) === null || _a === void 0 ? void 0 : _a.addModal(modal);
          if (closeFunc) {
            destroyFns$1.push(closeFunc);
          }
          const updateAction = (newConfig) => {
            configRef.value = _extends(_extends({}, configRef.value), newConfig);
          };
          const destroy = () => {
            if (modalRef.value) {
              destroyAction();
            } else {
              actionQueue.value = [...actionQueue.value, destroyAction];
            }
          };
          const update = (newConfig) => {
            updateConfig.value = newConfig;
            if (modalRef.value) {
              updateAction(newConfig);
            } else {
              actionQueue.value = [...actionQueue.value, () => updateAction(newConfig)];
            }
          };
          return {
            destroy,
            update
          };
        };
        const fns = vue.computed(() => ({
          info: getConfirmFunc(withInfo),
          success: getConfirmFunc(withSuccess),
          error: getConfirmFunc(withError),
          warning: getConfirmFunc(withWarn),
          confirm: getConfirmFunc(withConfirm)
        }));
        const holderKey = Symbol("modalHolderKey");
        return [fns.value, () => vue.createVNode(ElementsHolder, {
          "key": holderKey,
          "ref": holderRef
        }, null)];
      }
      function modalWarn(props) {
        return confirm$1(withWarn(props));
      }
      Modal.useModal = useModal;
      Modal.info = function infoFn(props) {
        return confirm$1(withInfo(props));
      };
      Modal.success = function successFn(props) {
        return confirm$1(withSuccess(props));
      };
      Modal.error = function errorFn(props) {
        return confirm$1(withError(props));
      };
      Modal.warning = modalWarn;
      Modal.warn = modalWarn;
      Modal.confirm = function confirmFn(props) {
        return confirm$1(withConfirm(props));
      };
      Modal.destroyAll = function destroyAllFn() {
        while (destroyFns$1.length) {
          const close = destroyFns$1.pop();
          if (close) {
            close();
          }
        }
      };
      Modal.install = function(app) {
        app.component(Modal.name, Modal);
        return app;
      };
      const spaceSize = {
        small: 8,
        middle: 16,
        large: 24
      };
      const spaceProps = () => ({
        prefixCls: String,
        size: {
          type: [String, Number, Array]
        },
        direction: PropTypes$1.oneOf(tuple("horizontal", "vertical")).def("horizontal"),
        align: PropTypes$1.oneOf(tuple("start", "end", "center", "baseline")),
        wrap: booleanType()
      });
      function getNumberSize(size) {
        return typeof size === "string" ? spaceSize[size] : size || 0;
      }
      const Space = vue.defineComponent({
        compatConfig: {
          MODE: 3
        },
        name: "ASpace",
        inheritAttrs: false,
        props: spaceProps(),
        slots: Object,
        setup(props, _ref) {
          let {
            slots,
            attrs
          } = _ref;
          const {
            prefixCls,
            space,
            direction: directionConfig
          } = useConfigInject("space", props);
          const [wrapSSR, hashId] = useStyle$c(prefixCls);
          const supportFlexGap = useFlexGapSupport();
          const size = vue.computed(() => {
            var _a, _b, _c;
            return (_c = (_a = props.size) !== null && _a !== void 0 ? _a : (_b = space === null || space === void 0 ? void 0 : space.value) === null || _b === void 0 ? void 0 : _b.size) !== null && _c !== void 0 ? _c : "small";
          });
          const horizontalSize = vue.ref();
          const verticalSize = vue.ref();
          vue.watch(size, () => {
            [horizontalSize.value, verticalSize.value] = (Array.isArray(size.value) ? size.value : [size.value, size.value]).map((item) => getNumberSize(item));
          }, {
            immediate: true
          });
          const mergedAlign = vue.computed(() => props.align === void 0 && props.direction === "horizontal" ? "center" : props.align);
          const cn = vue.computed(() => {
            return classNames(prefixCls.value, hashId.value, `${prefixCls.value}-${props.direction}`, {
              [`${prefixCls.value}-rtl`]: directionConfig.value === "rtl",
              [`${prefixCls.value}-align-${mergedAlign.value}`]: mergedAlign.value
            });
          });
          const marginDirection = vue.computed(() => directionConfig.value === "rtl" ? "marginLeft" : "marginRight");
          const style2 = vue.computed(() => {
            const gapStyle = {};
            if (supportFlexGap.value) {
              gapStyle.columnGap = `${horizontalSize.value}px`;
              gapStyle.rowGap = `${verticalSize.value}px`;
            }
            return _extends(_extends({}, gapStyle), props.wrap && {
              flexWrap: "wrap",
              marginBottom: `${-verticalSize.value}px`
            });
          });
          return () => {
            var _a, _b;
            const {
              wrap,
              direction = "horizontal"
            } = props;
            const children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
            const items = filterEmpty(children);
            const len = items.length;
            if (len === 0) {
              return null;
            }
            const split = (_b = slots.split) === null || _b === void 0 ? void 0 : _b.call(slots);
            const itemClassName = `${prefixCls.value}-item`;
            const horizontalSizeVal = horizontalSize.value;
            const latestIndex = len - 1;
            return vue.createVNode("div", _objectSpread2$1(_objectSpread2$1({}, attrs), {}, {
              "class": [cn.value, attrs.class],
              "style": [style2.value, attrs.style]
            }), [items.map((child, index2) => {
              const originIndex = children.indexOf(child);
              let itemStyle = {};
              if (!supportFlexGap.value) {
                if (direction === "vertical") {
                  if (index2 < latestIndex) {
                    itemStyle = {
                      marginBottom: `${horizontalSizeVal / (split ? 2 : 1)}px`
                    };
                  }
                } else {
                  itemStyle = _extends(_extends({}, index2 < latestIndex && {
                    [marginDirection.value]: `${horizontalSizeVal / (split ? 2 : 1)}px`
                  }), wrap && {
                    paddingBottom: `${verticalSize.value}px`
                  });
                }
              }
              return wrapSSR(vue.createVNode(vue.Fragment, {
                "key": originIndex
              }, [vue.createVNode("div", {
                "class": itemClassName,
                "style": itemStyle
              }, [child]), index2 < latestIndex && split && vue.createVNode("span", {
                "class": `${itemClassName}-split`,
                "style": itemStyle
              }, [split])]));
            })]);
          };
        }
      });
      Space.Compact = __unplugin_components_2;
      Space.install = function(app) {
        app.component(Space.name, Space);
        app.component(__unplugin_components_2.name, __unplugin_components_2);
        return app;
      };
      const __unplugin_components_3 = Space;
      var _GM_cookie = /* @__PURE__ */ (() => typeof GM_cookie != "undefined" ? GM_cookie : void 0)();
      var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
      const _hoisted_1 = { class: "wrap" };
      const _hoisted_2 = { style: { "margin-left": "3px" } };
      const _sfc_main = /* @__PURE__ */ vue.defineComponent({
        __name: "App",
        setup(__props) {
          const api2 = vue.ref("http://192.168.123.5:5173/");
          const token2 = vue.ref("ptools");
          message.config({
            top: `50px`
          });
          const activeKey = vue.ref([]);
          const downloaders = vue.ref([]);
          const user_detail_page = vue.ref(false);
          const torrent_list_page = vue.ref(false);
          const torrent_detail_page = vue.ref(false);
          const open = vue.ref(false);
          const categories = vue.ref([]);
          const cookie = vue.ref("");
          const url_list = vue.ref([]);
          const modal_title = vue.ref("下载到");
          const showModal = () => {
            if (downloaders.value.length <= 0) {
              message.warning("没有可用的下载器！请现在ptools中添加！");
              return;
            }
            if (torrents.value.length <= 0) {
              message.warning("没有符合条件的种子！");
              return;
            }
            open.value = true;
            let downloader_id = downloaders.value[0].id;
            activeKey.value.push(downloader_id);
            getDownloaderCategorise(downloader_id);
          };
          const handleOk = (e2) => {
            console.log(e2);
            open.value = false;
          };
          async function init_button() {
            console.log("开始初始化按钮");
            if (location.origin === "https://hdcity.city") {
              user_detail_page.value = false;
              if (location.pathname.startsWith("/userdetails")) {
                user_detail_page.value = true;
              }
            } else {
              user_detail_page.value = true;
            }
            if (location.pathname.startsWith("/details.php") || location.pathname.includes("/torrent.php") || location.pathname.includes("/Torrents/details") || location.pathname.search(/torrents\D*\d+/) > 0) {
              console.log("当前为种子详情页");
              torrent_detail_page.value = true;
              await get_torrent_detail();
              await sync_torrents();
            }
            if (location.pathname.search(/torrents\D*$/) > 0 || location.pathname.search(/t$/) > 0 || location.pathname.endsWith("/Torrents") || location.pathname.includes("/music.php") || location.pathname.includes("/special.php") || location.pathname.includes("/live.php") || location.pathname.includes("/torrents.php")) {
              console.log("当前为种子列表页");
              torrent_list_page.value = true;
              await get_torrent_list();
              await sync_torrents();
            }
            if (location.pathname.startsWith("/userdetails") || location.href.includes("/user.php?id=") || location.href.includes("/user.php?u=") || location.href.includes("/index.php?page=usercp&uid=") || location.href.includes("/Users/profile?uid=") || location.href.includes("/profile/") || location.href.includes("/users/")) {
              console.log("当前为个人信息页");
              await sync_cookie();
            }
            if (location.pathname.search(/usercp.php/) > 0 || location.href.includes("/index.php?page=usercp&do=pid_c&action=change&uid=") || location.href.includes("/Users/me") || location.href.includes("/my.php")) {
              console.log("当前为控制面板页");
              user_detail_page.value = true;
              await sync_cookie();
            }
          }
          async function getSite() {
            const path = "api/monkey/get_site/";
            return new Promise((resolve, reject) => {
              _GM_xmlhttpRequest({
                url: `${api2.value}${path}${token2.value}/${document.location.host}`,
                method: "GET",
                responseType: "json",
                onload: function(response) {
                  let res = response.response;
                  console.log(res);
                  if (res.code === 0) {
                    console.log(res.msg);
                    resolve(false);
                  }
                  sessionStorage.setItem("ptools", JSON.stringify(res.data));
                  resolve(res.data);
                },
                onerror: function() {
                  console.log("服务器连接失败！");
                  reject(false);
                }
              });
            });
          }
          async function getCookie() {
            return new Promise(async (resolve, reject) => {
              await _GM_cookie.list({
                // 异步,如果在return data之前还没执行完，部分站点会导致cookie不全。
                url: location.href
              }, (cookies) => {
                try {
                  cookie.value = cookies.map((c2) => `${c2.name}=${c2.value}`).join("; ");
                  console.log("【Debug】cookie:", cookie.value);
                  resolve(cookie.value);
                } catch (e2) {
                  reject(false);
                }
              });
            });
          }
          async function getSiteData() {
            let site_info = JSON.parse(sessionStorage.getItem("ptools"));
            console.log(site_info);
            if (site_info === false) {
              message.error("ptools服务器连接失败！");
              return false;
            }
            console.log(site_info.my_uid_rule);
            let user_agent = window.navigator.userAgent;
            let cookie2 = await getCookie();
            if (!cookie2) {
              message.error("Cookie获取失败，请使用Beta版油猴（红色图标的油猴）！");
              return false;
            }
            let href = document.evaluate(site_info.my_uid_rule, document).iterateNext().textContent;
            console.log(href);
            if (!href) {
              console.log("获取 UID 出错啦！");
              return false;
            }
            let user_id_info = href.split("=");
            let user_id = user_id_info[user_id_info.length - 1].trim();
            console.log(user_id);
            if (!user_id) {
              message.error("用户ID获取失败！");
              return false;
            }
            let data = `user_id=${user_id}&nickname=${site_info.name}&site=${site_info.id}&cookie=${cookie2}&user_agent=${user_agent}`;
            let passkey = getPasskey();
            console.log(passkey);
            if (passkey != false) {
              data += `&passkey=${passkey}`;
            }
            let time_join = getTimeJoin();
            console.log(time_join);
            if (time_join != false) {
              data += `&time_join=${time_join}`;
            }
            return data;
          }
          const getPasskey = () => {
            try {
              let site_info = JSON.parse(sessionStorage.getItem("ptools"));
              let passkey = document.evaluate(site_info.my_passkey_rule, document).iterateNext().textContent;
              return passkey.trim();
            } catch (e2) {
              console.error(e2);
              return false;
            }
          };
          const getTimeJoin = () => {
            try {
              let site_info = JSON.parse(sessionStorage.getItem("ptools"));
              let time_join = document.evaluate(site_info.my_time_join_rule, document).iterateNext().textContent;
              return time_join.trim().replace("T", " ").replace("+08:00", "").match(/\d{4}\D\d{2}\D\d{2}\D\d{2}\D\d{2}\D\d{2}/)[0];
            } catch (e2) {
              console.error(e2);
              return false;
            }
          };
          async function sync_cookie() {
            await getSite();
            let data = await getSiteData();
            console.log(data);
            if (data) {
              return await send_site_info(data).then((res) => {
                return res;
              });
            }
          }
          async function send_site_info(data) {
            return new Promise((resolve, reject) => {
              _GM_xmlhttpRequest({
                url: `${api2.value}api/monkey/save_site/${token2.value}`,
                method: "POST",
                // responseType: "json",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                data,
                onload: function(response) {
                  console.log(response);
                  let res = JSON.parse(response.response);
                  console.log(res);
                  if (res.code == 0) {
                    console.log(res.msg);
                    resolve(false);
                  }
                  console.log("站点信息获取成功！", res.msg);
                  console.log(res);
                  message.success("PTools提醒您：" + res.msg);
                  resolve(res);
                },
                onerror: function() {
                  reject("站点信息获取失败");
                }
              });
            });
          }
          function xpath(query, node2) {
            return document.evaluate(query, node2, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
          }
          const torrents = vue.ref([]);
          async function get_torrent_list() {
            let o2 = sessionStorage.getItem("ptools");
            if (!o2) {
              await getSite();
            }
            torrents.value.length = 0;
            let site_info = JSON.parse(o2);
            let torrent_list = xpath(site_info.torrents_rule.replace("]/tr", "]/tbody/tr"), document);
            for (let i2 = 0; i2 <= torrent_list.snapshotLength; i2++) {
              try {
                let torrent_info = torrent_list.snapshotItem(i2);
                if (!torrent_info)
                  continue;
                let title = xpath(site_info.torrent_title_rule, torrent_info).snapshotItem(0);
                let category = xpath(site_info.torrent_category_rule, torrent_info).snapshotItem(0);
                let completers = xpath(site_info.torrent_completers_rule, torrent_info).snapshotItem(0);
                let detail_url = xpath(site_info.torrent_detail_url_rule, torrent_info).snapshotItem(0);
                let hr = xpath(site_info.torrent_hr_rule, torrent_info).snapshotItem(0);
                let leechers = xpath(site_info.torrent_leechers_rule, torrent_info).snapshotItem(0);
                let magnet_url = xpath(site_info.torrent_magnet_url_rule, torrent_info).snapshotItem(0);
                let poster = xpath(site_info.torrent_poster_rule, torrent_info).snapshotItem(0);
                let published = xpath(site_info.torrent_release_rule, torrent_info).snapshotItem(0);
                let sale_expire = xpath(site_info.torrent_sale_expire_rule, torrent_info).snapshotItem(0);
                let sale = xpath(site_info.torrent_sale_rule, torrent_info).snapshotItem(0);
                let seeders = xpath(site_info.torrent_seeders_rule, torrent_info).snapshotItem(0);
                let size_items = xpath(site_info.torrent_size_rule, torrent_info);
                let subtitle = xpath(site_info.torrent_subtitle_rule, torrent_info).snapshotItem(0);
                let tags = xpath(site_info.torrent_tags_rule, torrent_info);
                let tid = detail_url.textContent.match(/id=(\d+)/)[1];
                console.log(tid);
                let tag = [];
                for (let i22 = 0; i22 < tags.snapshotLength; i22++) {
                  tag.push(tags.snapshotItem(i22).textContent.trim());
                }
                let size = "";
                if (location.host.includes("hdchina.org")) {
                  size = size_items.snapshotItem(0).textContent;
                } else {
                  size = size_items ? `${size_items.snapshotItem(0).textContent} ${size_items.snapshotItem(1).textContent}` : "";
                }
                if (!tid)
                  continue;
                let torrent = {
                  title: title ? title.textContent : "",
                  subtitle: subtitle ? subtitle.textContent : "",
                  size,
                  category: category ? category.textContent : "",
                  completers: completers ? completers.textContent : 0,
                  // detail_url: detail_url ? detail_url.textContent : '',
                  hr: !hr,
                  leechers: leechers ? leechers.textContent : 0,
                  magnet_url: magnet_url ? magnet_url.textContent : "",
                  // poster: poster ? poster.textContent : '',
                  published: published ? published.textContent : "",
                  sale_expire: sale_expire ? sale_expire.textContent : "",
                  sale_status: sale ? sale.textContent : "",
                  seeders: seeders ? seeders.textContent : 0,
                  poster: poster ? poster.textContent : "",
                  tags: tags.snapshotLength > 0 ? tag.join() : "",
                  tid,
                  site_id: site_info.id
                };
                torrents.value.push(torrent);
              } catch (e2) {
                console.log(e2);
              }
            }
          }
          async function get_torrent_detail() {
            torrents.value.length = 0;
            let site_info = JSON.parse(sessionStorage.getItem("ptools"));
            let title = xpath(site_info.detail_title_rule, document).snapshotItem(0);
            let subtitle = xpath(site_info.detail_subtitle_rule, document).snapshotItem(0);
            let magnet_url = xpath(site_info.detail_download_url_rule, document).snapshotItem(0);
            let size = xpath(site_info.detail_size_rule, document).snapshotItem(0);
            let category = xpath(site_info.detail_category_rule, document).snapshotItem(0);
            let files_count = xpath(site_info.detail_count_files_rule, document).snapshotItem(0);
            let hash_string = xpath(site_info.detail_hash_rule, document).snapshotItem(0);
            let sale_status = xpath(site_info.detail_free_rule, document).snapshotItem(0);
            let sale_expire = xpath(site_info.detail_free_expire_rule, document).snapshotItem(0);
            let douban_url = xpath(site_info.detail_douban_rule, document).snapshotItem(0);
            let imdb = xpath(site_info.detail_imdb_rule, document).snapshotItem(0);
            let poster = xpath(site_info.detail_poster_rule, document).snapshotItem(0);
            let tags = xpath(site_info.detail_tags_rule, document);
            let hr = xpath(site_info.detail_hr_rule, document).snapshotItem(0);
            let tid = location.search.match(/id=(\d+)/)[1];
            let tag = [];
            for (let i2 = 0; i2 < tags.snapshotLength; i2++) {
              tag.push(tags.snapshotItem(i2).textContent.trim());
            }
            let torrent = {
              tid,
              site_id: site_info.id,
              title: title ? title.textContent.trim() : "",
              subtitle: subtitle ? subtitle.textContent.trim() : "",
              size: size ? size.textContent.trim() : "",
              category: category ? category.textContent.trim() : "",
              // completers: completers ? completers.textContent : '',
              hr: !hr,
              magnet_url: magnet_url ? magnet_url.textContent.trim() : "",
              // poster: poster ? poster.textContent : '',
              sale_expire: sale_expire ? sale_expire.textContent.trim() : null,
              sale_status: sale_status ? sale_status.textContent.trim() : "",
              // seeders: seeders ? seeders.textContent : '',
              douban_url: douban_url ? douban_url.textContent.trim() : "",
              files_count: files_count ? files_count.textContent.match(/\d+/g)[0] : null,
              hash_string: hash_string ? hash_string.textContent.trim().match(/[0-9a-f]{40}/)[0] : "",
              poster: poster ? poster.textContent.trim() : "",
              tags: tags.snapshotLength > 0 ? tag.join() : "",
              imdb_url: imdb ? imdb.textContent.trim() : ""
            };
            torrents.value.push(torrent);
          }
          async function getDownloaders() {
            _GM_xmlhttpRequest({
              url: `${api2.value}api/download/downloaders`,
              method: "GET",
              responseType: "json",
              headers: {
                Authorization: token2.value
              },
              onload: function(response) {
                let res = response.response;
                console.log(res);
                if (res.code !== 0) {
                  console.log(res.msg);
                } else {
                  console.log("下载器列表获取成功！", res);
                  downloaders.value = res.data;
                }
              }
            });
          }
          const test_connect = async (downloader_id) => {
            _GM_xmlhttpRequest({
              url: `${api2.value}api/download/downloader/test?downloader_id=${downloader_id}`,
              method: "GET",
              responseType: "json",
              headers: {
                Authorization: token2.value
              },
              onload: function(response) {
                let res = response.response;
                console.log(res);
                if (res.code !== 0) {
                  message.error(res.msg);
                } else {
                  message.success(res.msg);
                }
              }
            });
          };
          async function getDownloaderCategorise(downloader_id) {
            categories.value.length = 0;
            if (!downloader_id) {
              return;
            }
            await test_connect(downloader_id);
            _GM_xmlhttpRequest({
              url: `${api2.value}api/download/downloaders/categories?downloader_id=${downloader_id}`,
              method: "GET",
              responseType: "json",
              headers: {
                Authorization: token2.value
              },
              onload: function(response) {
                let res = response.response;
                console.log(res);
                if (!res || res.code !== 0) {
                  message.error(res.msg);
                } else {
                  categories.value = res.data;
                }
              }
            });
          }
          const generate_magnet_url = async (flag) => {
            url_list.value.length = 0;
            if (torrents.value.length < 0) {
              return;
            }
            console.log(flag);
            if (flag) {
              url_list.value = torrents.value.filter(
                (torrent) => torrent.sale_status.toLowerCase().includes("free")
              ).map(
                (torrent) => torrent.magnet_url.startsWith("https://") ? torrent.magnet_url : `${location.origin}/${torrent.magnet_url}`
              );
            } else {
              url_list.value = torrents.value.map(
                (torrent) => torrent.magnet_url.startsWith("https://") ? torrent.magnet_url : `${location.origin}/${torrent.magnet_url}`
              );
            }
            console.log(url_list.value);
          };
          const push_torrent = async (downloader_id, category) => {
            let site_info = JSON.parse(sessionStorage.getItem("ptools"));
            await generate_magnet_url(true);
            console.log(url_list.value);
            let data = `site=${site_info.id}&downloader_id=${downloader_id}&category=${category}&url=${url_list.value.join("|")}`;
            _GM_xmlhttpRequest({
              url: `${api2.value}api/mysite/push_torrent?${data}`,
              method: "GET",
              responseType: "json",
              headers: {
                Authorization: token2.value
              }
            });
            message.success("种子已推送，请检查下载器！");
            open.value = false;
          };
          const sync_torrents = async () => {
            _GM_xmlhttpRequest({
              url: `${api2.value}api/monkey/parse_torrents`,
              method: "POST",
              // responseType: "json",
              headers: { "Content-Type": "application/json" },
              data: JSON.stringify(torrents.value),
              onload: function(response) {
                console.log(response.response);
                let res = JSON.parse(response.response);
                console.log(res);
                if (res.code == 0) {
                  console.log("种子信息同步成功！", res.msg);
                } else {
                  console.log(res);
                }
              },
              onerror: function() {
                console.error("种子信息同步失败");
              }
            });
          };
          async function download_to() {
            await get_torrent_detail();
            await generate_magnet_url(false);
            modal_title.value = "正在下载当前种子...";
            showModal();
          }
          async function download_all() {
            await get_torrent_list();
            await generate_magnet_url(false);
            modal_title.value = `正在下载本页所有${url_list.value.length}条种子...`;
            showModal();
          }
          async function download_free() {
            await get_torrent_list();
            await generate_magnet_url(true);
            modal_title.value = `正在下载本页${url_list.value.length}条免费种子...`;
            showModal();
          }
          const init = vue.ref(0);
          vue.onBeforeMount(async () => {
            if (window.top != window.self)
              return;
            while (init.value < 1) {
              if (!sessionStorage.getItem("ptools")) {
                await getSite();
              }
              await getDownloaders();
              await init_button();
              init.value++;
            }
          });
          return (_ctx, _cache) => {
            const _component_a_image = __unplugin_components_0;
            const _component_a_button = Button;
            const _component_a_space_compact = __unplugin_components_2;
            const _component_a_space = __unplugin_components_3;
            const _component_a_avatar = Avatar$1;
            const _component_a_collapse_panel = __unplugin_components_5;
            const _component_a_collapse = Collapse;
            const _component_a_modal = Modal;
            return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
              vue.createVNode(_component_a_image, {
                preview: false,
                src: "https://api.r10086.com/%E6%A8%B1%E9%81%93%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87api%E6%8E%A5%E5%8F%A3.php?%E5%9B%BE%E7%89%87%E7%B3%BB%E5%88%97=%E7%8C%AB%E5%A8%981",
                fallback: `${api2.value}ptools.svg`,
                class: "image"
              }, null, 8, ["fallback"]),
              vue.createVNode(_component_a_space, {
                align: "center",
                style: { "width": "100%" }
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_a_space_compact, { direction: "vertical" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_a_button, {
                        danger: "",
                        type: "link",
                        block: "",
                        style: { "width": "110px" },
                        href: api2.value,
                        target: "_blank"
                      }, {
                        icon: vue.withCtx(() => [
                          vue.createVNode(vue.unref(SyncOutlined$1), { spin: true })
                        ]),
                        default: vue.withCtx(() => [
                          vue.createTextVNode(" PTools ")
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      user_detail_page.value ? (vue.openBlock(), vue.createBlock(_component_a_button, {
                        key: 0,
                        size: "small",
                        block: "",
                        type: "primary",
                        onClick: sync_cookie
                      }, {
                        icon: vue.withCtx(() => [
                          vue.createVNode(vue.unref(SyncOutlined$1))
                        ]),
                        default: vue.withCtx(() => [
                          vue.createTextVNode(" 同步数据 ")
                        ]),
                        _: 1
                      })) : vue.createCommentVNode("", true),
                      torrent_list_page.value ? (vue.openBlock(), vue.createBlock(_component_a_button, {
                        key: 1,
                        size: "small",
                        block: "",
                        onClick: download_all
                      }, {
                        icon: vue.withCtx(() => [
                          vue.createVNode(vue.unref(ArrowDownOutlined$1))
                        ]),
                        default: vue.withCtx(() => [
                          vue.createTextVNode(" 下载全部 ")
                        ]),
                        _: 1
                      })) : vue.createCommentVNode("", true),
                      torrent_list_page.value ? (vue.openBlock(), vue.createBlock(_component_a_button, {
                        key: 2,
                        size: "small",
                        block: "",
                        onClick: download_free
                      }, {
                        icon: vue.withCtx(() => [
                          vue.createVNode(vue.unref(DownloadOutlined$1))
                        ]),
                        default: vue.withCtx(() => [
                          vue.createTextVNode(" 下载免费 ")
                        ]),
                        _: 1
                      })) : vue.createCommentVNode("", true),
                      torrent_detail_page.value ? (vue.openBlock(), vue.createBlock(_component_a_button, {
                        key: 3,
                        size: "small",
                        block: "",
                        onClick: download_to
                      }, {
                        icon: vue.withCtx(() => [
                          vue.createVNode(vue.unref(DownloadOutlined$1))
                        ]),
                        default: vue.withCtx(() => [
                          vue.createTextVNode(" 下载到... ")
                        ]),
                        _: 1
                      })) : vue.createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              vue.createVNode(_component_a_modal, {
                open: open.value,
                "onUpdate:open": _cache[1] || (_cache[1] = ($event) => open.value = $event),
                title: modal_title.value,
                onOk: handleOk
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_a_collapse, {
                    activeKey: activeKey.value,
                    "onUpdate:activeKey": _cache[0] || (_cache[0] = ($event) => activeKey.value = $event),
                    accordion: "",
                    style: { "background": "rgb(255, 255, 255)" },
                    "expand-icon-position": "end",
                    bordered: false,
                    onChange: getDownloaderCategorise
                  }, {
                    default: vue.withCtx(() => [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(downloaders.value, (d2) => {
                        return vue.openBlock(), vue.createBlock(_component_a_collapse_panel, {
                          key: d2.id,
                          style: { "font-size": "16px" }
                        }, {
                          header: vue.withCtx(() => [
                            vue.createVNode(_component_a_avatar, { size: 18 }, {
                              default: vue.withCtx(() => [
                                vue.createTextVNode(vue.toDisplayString(d2.category), 1)
                              ]),
                              _: 2
                            }, 1024),
                            vue.createElementVNode("span", _hoisted_2, vue.toDisplayString(d2.name), 1)
                          ]),
                          default: vue.withCtx(() => [
                            vue.createVNode(_component_a_space, {
                              wrap: "",
                              align: "center"
                            }, {
                              default: vue.withCtx(() => [
                                d2.category === "Qb" ? (vue.openBlock(), vue.createBlock(_component_a_button, {
                                  key: 0,
                                  type: "primary",
                                  size: "small",
                                  ghost: "",
                                  onClick: ($event) => push_torrent(d2.id, "")
                                }, {
                                  default: vue.withCtx(() => [
                                    vue.createTextVNode(" 未分类 ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])) : vue.createCommentVNode("", true),
                                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(categories.value, (c2) => {
                                  return vue.openBlock(), vue.createBlock(_component_a_button, {
                                    type: "primary",
                                    size: "small",
                                    ghost: "",
                                    onClick: ($event) => push_torrent(d2.id, c2.name)
                                  }, {
                                    default: vue.withCtx(() => [
                                      vue.createTextVNode(vue.toDisplayString(c2.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]);
                                }), 256))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["activeKey"])
                ]),
                _: 1
              }, 8, ["open", "title"])
            ]);
          };
        }
      });
      const _export_sfc = (sfc, props) => {
        const target = sfc.__vccOpts || sfc;
        for (const [key2, val] of props) {
          target[key2] = val;
        }
        return target;
      };
      const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-423688fb"]]);
      vue.createApp(App).mount(
        (() => {
          const element_ptools = document.createElement("div");
          document.body.append(element_ptools);
          return element_ptools;
        })()
      );
    }
  });
  require_main_001();

})(Vue);