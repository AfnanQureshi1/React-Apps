function Item({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
        itemContent = (
            <del>
                {name + " ✔"}
            </del>
        );
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    );
}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}
function Items({ names, importance }) {
    return (
      <li className="item">
      {names}
      {importance > 0 && " "}
      {importance > 0 &&
        <i> (Importance: {importance}) </i>
        }
      </li>
    );
  }
  
  export function PackingsList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Items 
            importance={9} 
            names="Space suit" 
          />
          <Items 
           
            names="Helmet with a golden leaf" 
          />
          <Items 
            importance={6} 
            names="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
  