json.pokemon do 
    json.id @pokemon.id 
    json.name @pokemon.name
    json.attack @pokemon.attack
    json.defense @pokemon.defense
    json.moves @pokemon.moves
    json.item_ids @pokemon.item_ids
    json.poke_type @pokemon.poke_type
    json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}")
end

json.items do
    @pokemon.items.each do |item|
        json.set! item.id do 
            json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
        end
    end
end

# {"pokemon":{
#     "id":5,
#     "name":"Charmeleon",
#     "attack":64,
#     "defense":58,
#     "moves":["scratch","ember","metal claw","flamethrower"],
#     "item_ids":[13,14,15],"poke_type":"fire",
#     "image_url":"/assets/pokemon_snaps/5-b47514f3eb8f165ebf18df794acd63f595d5177a32c9233f862741b2d1d95454.svg"
# },
# "items":{
#     "13":{"id":13,
#         "name":"Fantastic Rubber Watch",
#         "pokemon_id":5,
#         "price":42,"happiness":18,
#         "image_url":"/assets/pokemon_super_potion.svg"
#     },
    
#     "14":{"id":14,"name":"Awesome Copper Hat","pokemon_id":5,"price":87,"happiness":85,"image_url":"/assets/pokemon_potion.svg"},
#     "15":{"id":15,"name":"Heavy Duty Copper Bottle","pokemon_id":5,"price":40,"happiness":54,"image_url":"/assets/pokemon_super_potion.svg"}
# }
# }