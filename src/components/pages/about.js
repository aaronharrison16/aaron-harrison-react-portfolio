import React from "react";
import ProfilePicture from "../../../static/assets/images/profile-picture.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{ backgroundImage: `url(${ProfilePicture})` }}
      />

      <div className="right-column">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis auctor elit sed
        vulputate mi. Et sollicitudin ac orci phasellus egestas. Molestie ac
        feugiat sed lectus vestibulum mattis ullamcorper. Quam adipiscing vitae
        proin sagittis nisl rhoncus mattis rhoncus. Sit amet nisl purus in
        mollis nunc. Varius quam quisque id diam vel quam elementum. Risus sed
        vulputate odio ut enim blandit volutpat maecenas. Aliquam purus sit amet
        luctus. Egestas erat imperdiet sed euismod nisi porta lorem mollis.
        Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod.
        Feugiat in ante metus dictum at tempor commodo. Vitae nunc sed velit
        dignissim sodales ut. Molestie nunc non blandit massa enim nec. Nullam
        eget felis eget nunc.
      </div>
    </div>
  );
}
