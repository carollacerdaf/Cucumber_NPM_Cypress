Feature: NPM

Quero abrir página do NPM

Scenario: Abrindo uma página do Node
    Given Eu abro Página NPM
    Then Eu vejo "npm | build amazing things" no titulo

Scenario: Outro modo de abrir
    Given Eu abro Página NPM
    When Eu clico em botão "See plans"
    Then Vou para página com titulo "npm | Products"