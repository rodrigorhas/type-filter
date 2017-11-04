
function Main () {

  // Some dom references
  const REFS = {
    INPUT: '#search-field',
    VIEW:  '#view',
  }

  // Data example
  const DATA = [
    {
      id: 1, text: 'A B C',
    },
    {
      id: 2, text: 'B E F',
    },
    {
      id: 3, text: 'F B D',
    },
  ]

  // Attach keyup listener
  $(REFS.INPUT).on('keyup', SearchInputHandler)

  // Listener handler
  function SearchInputHandler ($event) {
    const key = $event.keyCode || $event.which;
    const element = $(this);
    const query = element.val();

    let shadow = DATA.filter( item => item.text.toLocaleLowerCase().includes(query.toLocaleLowerCase()) )

    RenderView(shadow);
  }

  // Render view Helper
  function RenderView (data) {
    const View = $(REFS.VIEW);

    View.empty();

    let UL = $('<ul/>');

    data.forEach( item =>
      UL.append(
        $('<li/>').text(
          `#${item.id} - ${item.text}`
        )
      )
    );
    
    View.append(UL);
  }

  // First call to populate view
  RenderView(DATA);
}

$(Main);