import React from "react"

function Header() {
  return (
    <div>
      <header>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABBVBMVEX2ggv////3//////z3fgD2dwD5//r159TwsHP8/////v/6///4gQn1gg3///v//P/6gQXy///+fgD7fwfzeQDvfQDxgxP///X3gQD6//fvhBTueAD//PX1hAbshwztfgD5fhXnhhv2gBP8++n248rzdwDskTfznU70pl/opVvwyZP27c300KLxhhrtm0bw1azx++rrrmbjewDv8dfuv4LnhwDmhSXwnF3y//XutXP73bX46uHjjyX59OTwiSjnn0jisn/2z6f247nu4c723cDtjj363Mn0vYn008DiigDx17rt26b7eyH0zrLz0Zvzx5nzwqLws3jynEDqt2nyrHfuyYProFN24J+yAAAMAUlEQVR4nO2d/VvbthbHbTk2yJIcxbJlx4lj40AKaWgIg45uo4WOjS53Xcq2y///p1yZrrt9gcRx5Bd4/O3DD31aknyic3TOkeQjRWnUqFGjRo0aNWrUqFGjRo0aNWrUqFE1wuLP0xYWqvozFKsnD/iECSnFCiFE8f1WRfLDMCQKZqwgwiAgCnP28OjZ/nYV2n82ChzHpgoPCiK07Z57MN498hCoRsg6ej7ZPuy17GIAW3svpkfibZClViJN/BgGRGe7s2PmS0XDLLX9aPZdNWT36Gi8I4yVSJvxSOBTZ38XaZpW0fB9JVNDw5PTFiNcEqFC7ZeXFkKmamlVw32U2TXQ1oErZ0rllGD3+y0jdT9NM6tmEzKtvgY11TgbR6EMOyWYO6/6oB7m+aXQDy9tzjdmZIGzsACqw+B9LQ39+JOSbDyG3B2D1C6qxvlW0Ot3zl+3yCZ0mCuhMwGmZkJYNc+30hAcovOffLzBjIo5dV95sI4W+lHIhLuBrdDchASzNxBZqGqQB4U8DUxclp9QoTtHGujX0EL/kUhBNGO2iSvu/VDLMPGvUv8xfhzlDxitC7W+PvhJbXTp5CZ0prBdNcBKtQ34In+l0fu5vrPMJ1ntzpWeF5DYe2+R1+lXDbFCpjpqHeabTxnxj9+qVqdqhJWaOnaYj/CQ2dHPqlc1wEr1d1jOiBH6hERXQIM1zmtSwe0NyigWJleq1q03Ibjs5Se0OQuukAeqhlgq+DzaIDdNBq3BlVrD6ukzacYvGyy+sZDz6FeRf7fra6ldtL1Rqc8S2rsyvW59M3BDvc6fuQlhErDjOTLqO4ZQvcyd1qQKCQ5/P52b9fVFBKcbESoYh4kfzaGBapqIa8bWZoSpuI3nbc+omuV+ySBkhIeDd+BJjyHz49N5TQO/FMJUrDdHqlnDKVUWIQ78aArPamipsgj9gOmn78waFlPSxpDQ0/i3d7B+xZQ0PxRKWDA3VaNmliqTEHPbncN+zeZUmYThIWsdX9UtgZNJyDAdEHcO2u06+aJMQiEc28fvzK71hAkJZ3v/AWaNdjRkE4YkDqNpnVbDJROmZxMDPJhCzazLlCqbUIjFdDAHR3UJiwUQ+gPOovegLuViAYRJyEhy+q4uvlgAYaow7k1B26zDOBZEyBIqDLUWxVRBhP5pkgze1yK1KYgw8Vnw++A9qAFjQYR30oOpanpVMxZIyBI7ugTgCROGgxhH7ytPUQskjCnjcTQRaXilFWORfvixmJqYwKsSsWBChdvuH9W6YsGEoSJ8caJWubtYLGFaTIWJqBfbXmVpasGESlpM2dEUVnd4qnhCKoopZwwqK4iLJ4xDhpPjy6oASyBMhbkuiqlhJb5YDqGd2L0J6FSyb1MOYRjwWB+DJzyGnCkhji4hVMt/OqocwlREjy5NWL6hlkeIue0sACg9LpZHSAcJj8Zm6QlceYRcxEXWWwBolfugVHmESmqobG/RKdlQyyUUk2pv3AGlloulEhKCORHTTZmApRPiMHAWELTLc8VSCVOxxHY/gM7w6RLe7UyNSzzmVzohZz4P9fETttJUg9hZINAvJ0WthFD4ovMBgHJy1EoIlUGCo5OSnl+shDBW2EDERQ2qJTyHWs0YChEWLVRYws5UZYSM271SiqnKCMNBrEQnJayGV0YY+3Sg9MYA9gs+HF4Z4R2lfXytFr0zVSmhwuneCSjYUKskJKEi4uJ1wb5Y6RhirASKu7Da/QJXUqu1UkWhsR0tYJGr4VUTpsWUflLkzlTVhHHICHavn7CVpkqLKauwXeI6EKbF1AIV5Yt1IPQHSayfoIJ8sQ6Esc8GwhfT1KaA0FgHwlTEdscWKiKBqwshDqh7DYroPFUsoX+nLP9TFFNJMb5YACEhCmWURrYT7Yz+/HO0E7m6TcUgsSV9DNNjfrx3jUxNtqEWQIgx4dzlo/muZ6BU3tZ0tuPafLCi149I4AoopooYQ8yc0cl5p29pWl+7E4DD+RvXXt6LUnwxdu8EyQ78BRCG7mjSRbAPxPBBo5uOo6VCpF69cJc2GUmfmSLutSU5Ysh+sosRrs/OwcfIZpr/rFAI57I0NLyM2LKORuLfeOIukCr1IU3ZYxjQ3tx4wNAssPs6Wv7rLBZBw5K6MyWZkNg7W1DT7jM0TQwpOH+2vKE4HQS2e6LJXA2XTMhebiExsdx7sluzrD4Y3raW/X4cYsL2XskMizIJuYIHz9GKx/K8X+wVfWGFL15obWmGKvVJZ+JMVXNFQyXzu9/s5R3i7IQ6F/KKKanP47duRHj3VhB2/oiWd6byT5PYlbcaLpNw8PrMNFf2vjbB9vLGsHHIeKxfd6GcmCGTMLrMcFIGeZ1dTlb1iCP24MKCQxnr/RIJ/VGWtsLAs9Sb1qpmjT4PnWtDygOaEgmdKchwLk9kqXBrZZdtEnAa3bRl5KjyurewY8vKcAOEBqGF9le1aGYUk1g/6XQ3P3ErbQy5Pcv8pmjirG4pSsSkemGCjXeJZRESYaTZCbd4husnSODrN8bGQUMaoe9kv4hFM15nuLYgIQp2bzbuyCiLMIwH2cMXUrczXSEiKjExit32Rom4NMLWn9nfFKnXGS9JwWF03e5stAInbS7197O/KVQXSyuM/78q57b+12Z2KouQ+X9nt1INTXoZXzcUU9hso2JKFiFtvVrjq0bTbGOYKmH6jYgZuS1VmpWy7OFQmOkaDf3pwHdmaif3bCMtWrDbNQDVRfbrmNghtnt/5b8vSx7haJ1ocZGdEIeUh3szUUzlm3GkzTQ4OsqcXyHzds32zMx5lXePWJofKr2rzG8Kz1+u12KbHfrOdhflKonl1Rb2ODvhW329Zv7xoY3dWbdSQob9keplWqzWNHSyJmEYUhLqf3fy9J+QZ6W8t5VxMoD90YrltntERNiYddH6C1TS8tIQs7/MTHaE4CSi67e6JwHVZzl8UdoYYuxHz9HqI78mhMPvabJ+q3ucKKS1vWKtskhC8WO/ShcAV8QMlN5QhEkOQmEnrLV9Zq05jFJXhN0rcLeTtlTg/Lf8dxWE0fYZXC8wSt23sEdDzVox31lopue72SY1VG67B0Z1Y6gM2HbXWnFsG/1Xx3nvQgsZGyi9/fWKKcm7a+6N5S25zcMwrD+ON7sfNB1F0F/DF2XvH0bjdhc92KWtD+bHhCqbXC3JMNb3jTV8UTJhSPRtr/vA7oypGpd6ekX5JiKHnDr73ezFlOx9fMJb3z9HSNXUf59J/3hcIf1rf1tPQrLR5aDp5ekBFmk4VDPuTRVw2qQ1WAyFoXrex+85nV0RtPoqmP+Sfe1iqQiLZh7KenqqK52Q+85oMkxP09wNniYANRV1rp6xvFHiazEettIcNZNM+YSM7FC8c/HrEP57E5SxdTLS3RyJzP3CCcbugZdt18bs/iz9bCJjSsKYG+x/eL+7u3s1Wdwc9lo0YX4g6Q1CUckQZ//MULMs3xjzok5f0pbb03V9r9eSfGP9nbB/fNAHGW5hssC1JPf/RglmNOBcpMwbTp/3CWPu6zMvw3yqof2iCPHdB8GkAL60IMapL2a5rdd4XcD7f/oYRHwMrMi4xv2el1YCJmZUDXWXA8Jzd/MbyCuSsI/ooLsqgUNTp4BvuByJGZW2blclcNqMPVrC0GeEtW5XFFPeMd3ggvXqxZn7xnjQFy3Ut6Z68GjHMBVNQue2+1DnKWiaIMfKZa3kJ8QWvvhAWEQWunJw7jWFWijElLPW/hHU7gv+mgWeMf54Z5pPIjQ6GCLtnlNw0HjrVv3pZIjQtNK4b+lGOxpl36issdKsSb8dfltMmeoH59HmM58Lp9lh6/ZI+8IXTattPA+orKq7ahGFRrdD8Pnel9UG5yNOH/U8+oUodm6/8EXTAwc6fTqEIiBgfX/42Ria6O6m40cfKT4TwezgyIJ3ibiGTDjpxYWUphVKFFO33l0xBYHqXUb08Yf6L0VFGs5uu2kSbnXB2LWDx51yfythpSJqvEgJkXbSU+KljwI+ViU0+qlrQG+mM1lLlzVTiOPozdHWa5slTyXUfy2Mqfuau0EQr3os55EKK2FyFxtp8sQCRaNGjRo1atSoUaNGjRo1atSoUaNGjRo1arRC/wOlgCutSgs28QAAAABJRU5ErkJggg=="
          alt="logoofhnrtech"
          class="text-hnr"
          height="70"
          width="70"
        ></img>
        <input
          type="text"
          className="search"
          placeholder="Search here.."
        ></input>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDtAgn_Si64cPM86BqfbYK57f5MqKYhG5Nv1R-183O0-NzgrB1&usqp=CAU"
          alt="logoofcart"
          class="test-cart"
          height="70"
          width="70"
        ></img>

        <br></br>
        <br></br>
        <br></br>
        <h1>Products</h1>
      </header>
    </div>
  )
}
export default Header
