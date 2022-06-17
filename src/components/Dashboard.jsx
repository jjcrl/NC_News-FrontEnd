import "../Css/App.css";

export const Dashboard = () => {
  return (
    <div className="dash">
      <div className="greeting">
        <p>Hello</p>
        <p>!!</p>
      </div>
      <p>
        Welcome to the nc-news webapp, thank you for visiting. Here is a breif
        overview of the site map, and run down on the basics.
      </p>
      <br />

      <br />
      <p>Where will each of the icons will take you?</p>
      <div className="dash-list">
        <ul>
          <li>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACT0lEQVRoge2ZQWsTQRSAv7dRjK14CiKKkINSSlMUevNg2ioUC/EW/QNWUfDipXoTvIjisVAr/gC9SRTxki1B9OSlXYmCkIpFxOpJrA2SPA9tIC7dpGZ27CLzHWfe2zcfM7vsY8DhsIKYJI8N6yRNZhD2ASsKnwRe4PE8v4B/A2m2xxeLmvpW5aQqEwjHgQNABuWLeFwuL8qz7RHJ6TJwMGI6ULg+H8gTgPFhLapyExiIiF/2AznU61p29Jq4gXaYywmURof0lgj9qlwxrNURzyRZhAtArUvMNegqUVNlymgtJsktCiPa93ONjAoDTSgAU0A6IvwHyj2Bpx68353ma+m1rJquIRaRMCdyOpiCMrA/NPWx4ZGvLEjHXewFo6MVRSWQKsp0eFyVqzYkwJIIQLrOw/DY9zSPbdWzcrRajOX0j6+aH4i1etZ25F/jRJKGE0kaTiRpOJGk4USSRmz/Pm39e3ZLCcqSaZ/eTnw7osxuWQJAyKpyP67y/83Rik1EhIt06d9D1FQ5H1v9uB60Ga4f6QEnkjScSNJwIknDiSQNJ5I0rImMjOjO8Njpw7rLVj1rInvrFMJj9TRnbdWz8jc6ekyz8gt/k0brcwPGK4FU464Z69VbI8URGkyyfre4JyJ8DeEBTUrS5G1/HyvbfvX21316FDH072bviDLXTUJhFuF2x+es9+9zJksxfdk73bO/A87NB3LJX5RpUc4AgWG9SOK6Z18FPii8ErgrMJEZZMgP5FErtvxGSvmAo3icAu4AL1GWNnKN79kdDkv8BhKisTAtkdq0AAAAAElFTkSuQmCC" />
            <p>Article Editor - For creating and posting new posts.</p>
          </li>
          <li>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACI0lEQVRoge2ZPWgUURDHf7MEvJALWhyYVF5h5a0pBKNXCLuxFOwCflRWFmkUOwuxE9FCW5F0gkYLQUgX7goLg9rInmAnFh5CKqNitWNxe3Lubswu+3nwfs3uvnk77z87bxh4CwaDwWCoAAkPOG1tMM8dUS4ACxVo+h9DlKf6k5v9z/J70jATmToK4lpp0tKxiHBd5lDgxqQhEkiQCSxleWsgb0sSmAj3mJ7C4g3CRUKBWDHzFwDqFgRA76NsB7eLYVtcILni2qqurVr0OtEaCeF0tCmCBxxJ6PN1z5MzZfkbk3tGVMn16yf1t29G+gP5AbQzKyrI35jCa6Qs8qqRRPu4CH9jcslIVXUxiamRumH6yF6YPpIRUyMhTB/Jy5+pkbph+shemD6SkX0DyUrPk8jZWRFEt5bwFWClo8tlCEiDs6Sng9th2BbNiM9jhFsqbLt24Ycf6fBHF4H1sCkuI4cKF5SdZnjgn/3rdvQ8wsvweB1RZbU/kBfj57+CnY4eFeEdcLASZenZxeJk74N8gmBrOW1tiPCM6QkCYB6fjW5XZyEodpnjIXAio+PN5gFWX72XX0kmd7s629jlOXAuw5pLje88AK6Ke1wvoTzJ4AxgxwJ7y5NvaV46a+thHzyglWl14bKFcj+TkxFraYMACN5Zy2H9e1LGSXkZWMR0ySnkixXXJacNhUczfovbsoMAV4j5E1RzhgLr2uJu1UIMBkNJ/AH2EdUFpYnV5QAAAABJRU5ErkJggg==" />
            <p>All Posts - where you can find, filter and view posts.</p>
          </li>
          <li>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEzklEQVRoge2aX4iUVRjGf+837hhkFLQbppFdJLbOzAaJSdjFzPqH0AhvBiHQuhHqIkGjTXJD1srcixIMLAgSlYLSi25Sy3ZnqiWCWkKdWSWFUvzbjpBlors739OF32zjzuzO7Owck9jn6jvvOe95n+c758w55/0GJnF7wVx1nIwonPN4A7EKQ/LZ3QSb9mZtwEW8KS46BbgEmxFtAAjM2JADAa+5iOe56BRAHqsADBYinuRG4TlX8ZyNCKIBAONuGYOmIpsDOBsREx8BSOw3cajY5gLOhPhNtEtsLZQltvpNtLuK5xyJqJSISq7jOBuRW43/jZCSX61bvZFVQrV8SoQ42Mh6JGpeI9XyKTmiJGI6i5hhsFDCMHowzqWO2sxayUwE1fIZdY1IRSJF45I5muGQb1ksmaMZiMYyfEpGuGRqyWe3GRsweorM4aEGjsej6vhrKtt7e22wEolEVMsRazAeBy6nMtZcrYB589Rw13XWDsEmIAwwgs+ukT4lUysZUbgfOsxjNcID9hjMFqwImvSZeKk7a92jioipc3he/4vLQI8XYn3XYftlNN/WiFplvAfMDQh+LjgBrAaGgF2NomPkYq/6GB+P6CnP2C6YHZg+tRAvdx+2szcRadFj8ukdo6szEs3prF25ye9RzVSed4CVAbETvlibztrBavhVvY+ks3Zw6jViwEbgKrBSeY4nImpLRhQutJNYXqGrB8zjmUIhGVE4EVGb8hwPRFwFNk69RqxaEeMSAnDgpF1PZWxLSDSbsQ+YhtGZM74ZbhQszgp4uPCQ8/gWoxOYZsa+kGhOZWzLgZN2fTzcajrGf52100ByUVRLfGMbIl+oE/xeab4KLhYV8hhZT6zrOmqHauEDE7yPdGXsEBAtthkcq+Rn4kzhOZWxhRPhUEDdz1oS8ys3YkG949ZdiEEaGOtcNkCoaE3VCXUXksralwafjdHk49QR66p3XCfHeE9sBE6Xqfp1yqCbW6KzvFY8oulmnC+2eTC9K2MXR/OZCJwJgRvX3OJyKmPO4jm7ISZaNKcaW71Q9zcUf0h32DSeBd4Cpo+oPg+06wqfpH+za/WMW5OQ1mbN8jwU7PAALG3RfQN51pmxBri3QheXJD7Mh3n3u5+tv2BcHNGDvo91H7NT4+U0LiFLW3TnUJ7XZazH6C/c0hZFNN839kNV56xi9AuWpTP2E0AiqnNAI8a2BmPzV0fs72o7qnqNxGNaMejTJ+NVIGRiZ6HON3YwfhEATcCOovJOIIRoG/Tpi8e0YhS/EpS9WA1nLcAT7PHgEcHTQZNeT7zYlbUfCz7Bm7y/BiGMvH8Ho/s+MC8wfSE4ZrAaY2i0LEqJkNaItgZvfST+kGhvmssHe/davkx93ZBMKtTfxwtmvAncU6bJ26mM1ZBFgQGJWemsXXDEvSyCTfUUEK5PFgX6axWRiOmHeFTf1+KbztoFjFwJnzJZlBIh8tkNECgvZC5KshZVQywweKJm9yr5lFysmmBTvyDIoogga1ErkYnituEz+VlhnJgUUgnxuKYkYuoslBMxdcbjcvbx1VnHlmML8MqwQbRZDoOSVGpd4HJqPQ9gxjI8FhfbXMDdd3ZjEIF8/gzKMHZ2ZUJw98+Hem+sFeBsRG6bjWwS/xH+ARaOAFfiaxR7AAAAAElFTkSuQmCC" />
            <p>User Center - under construction!</p>
          </li>
        </ul>
      </div>
      <p>
        Through out the site you will see and few diffrent symbols, I wanted to
        add somthing visual to the site so here is a little info on them.
      </p>

      <div className="symbol-grid">
        <div className="grid-item">
          <p id="grid-symbol">++</p>
          <p id="symbol-info">Votes for a a post.</p>
        </div>
        <div className="grid-item">
          <p id="grid-symbol">≡</p>
          <p id="symbol-info">Total comments on a post</p>
        </div>

        <div className="grid-item">
          <p id="grid-symbol">¤</p>
          <p id="symbol-info">The Inerativity score for a post or topic</p>
        </div>

        <div className="grid-item">
          <p id="grid-symbol">¶</p>
          <p id="symbol-info">Total Posts, or a new post</p>
        </div>
      </div>

      <p>Thank You for visting!</p>
      <br />
      <p> To view the repososroties on github they are linekd below.</p>
      <div className="links">
        <a href="https://github.com/jjcrl/fe-nc-news">Front End Reposortory</a>
        <a href="https://github.com/jjcrl/be-nc-news">Back End Reposortory </a>
      </div>
    </div>
  );
};
