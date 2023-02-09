Feature: View Episodes
Description: Show Episodes of a Character 

Scenario Outline: View Episodes of a Character
    When I select a View Episodes of a <Character>
    Then Show multiples card with Episodes of a <Character>

    Examples:
    | Character |
    | Rick Sanchez |
    | Morty Smith |
    | Summer Smith |
    | Beth Smith |
    | Jerry Smith |
