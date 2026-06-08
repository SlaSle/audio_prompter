# AudioPrompter

Aplikacja do wyswietlania tekstow i akordow na tablecie podczas gry na Casio CT-X3000.

## Uruchomienie na komputerze

Otworz `index.html` w przegladarce.

## Uruchomienie na tablecie

1. Uruchom `start-tablet-server.bat`.
2. Sprawdz adres IPv4 pokazany w oknie.
3. Na tablecie, w tej samej sieci Wi-Fi, otworz `http://ADRES_IP_KOMPUTERA:8080`.

## Format utworu

```text
# Tytul utworu
@artist: Wykonawca albo notatka
@bpm: 96
@rhythm: Pop 4/4
@tone: 016
@transpose: -3,-2
@scroll: 1.00

[Zwrotka 1]
[C]Tutaj wpisz tekst [G]i akordy {1}
[Am]Akord pojawia sie [F]nad sylaba {2}
```

Akord wpisuj w nawiasach kwadratowych bezposrednio przed sylaba lub slowem, nad ktorym ma sie pokazac.
Liczbe taktow dla linii wpisuj na koncu w nawiasach klamrowych. Brak oznaczenia oznacza `{1}`.

Utwory zapisuja sie w pamieci przegladarki. Przycisk `Eksport` zapisuje kopie JSON, a `Import JSON` przywraca biblioteke.
