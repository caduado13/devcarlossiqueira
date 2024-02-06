import React from 'react'

const Item = ({iconLenguage,iconLevel, title}) => {
  return (<div className={`portifolio__skills_techs-content`}>
        <div>
            {iconLenguage}
            <p>{title}</p>
        </div>
        {iconLevel}
    </div>)
}

export default Item
